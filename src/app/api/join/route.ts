import { NextRequest, NextResponse } from "next/server";
import { google } from "googleapis";
import { Resend } from "resend";
import dns from "node:dns/promises";

async function isEmailDomainValid(email: string) {
  const domain = email.split("@")[1]?.trim().toLowerCase();
  if (!domain) return false;
  try {
    const records = await dns.resolveMx(domain);
    return records.length > 0;
  } catch {
    try {
      await dns.resolve(domain);
      return true;
    } catch {
      return false;
    }
  }
}

async function appendToSheet(row: string[]) {
  const email = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
  const key = process.env.GOOGLE_PRIVATE_KEY;
  const sheetId = process.env.GOOGLE_SHEET_ID;

  if (!email || !key || !sheetId) {
    throw new Error("Google Sheets is not configured");
  }

  const auth = new google.auth.JWT({
    email,
    key: key.replace(/\\n/g, "\n"),
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });

  const sheets = google.sheets({ version: "v4", auth });

  await sheets.spreadsheets.values.append({
    spreadsheetId: sheetId,
    range: "Sheet1!A:F",
    valueInputOption: "USER_ENTERED",
    insertDataOption: "INSERT_ROWS",
    requestBody: { values: [row] },
  });
}

async function sendConfirmationEmail(name: string, email: string) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    throw new Error("Resend is not configured");
  }

  const resend = new Resend(apiKey);

  await resend.emails.send({
    from: "Ameeco <contact@ameeco.in>",
    to: email,
    subject: "We've received your entry!",
    html: `
      <div style="font-family: sans-serif; max-width: 480px; margin: 0 auto;">
        <h1 style="color: #5e3825;">Thanks, ${name}!</h1>
        <p style="color: #5e3825; font-size: 16px; line-height: 1.6;">
          We've received your entry. Thanks for your time, and for being
          one of the first to join the Ameeco family. We can't wait to
          welcome you at the Galleria, Gurgaon, very soon.
        </p>
        <p style="color: #5e3825; font-size: 16px; line-height: 1.6;">
          Keep an eye on your inbox, we'll be in touch.
        </p>
        <p style="color: #5e3825; font-size: 16px;">— Team Ameeco</p>
      </div>
    `,
  });
}

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { name, phone, email, source, sourceOther } = body;

  if (
    typeof name !== "string" ||
    !name.trim() ||
    typeof phone !== "string" ||
    !/^\d{10}$/.test(phone) ||
    typeof email !== "string" ||
    !email.includes("@") ||
    typeof source !== "string" ||
    !source
  ) {
    return NextResponse.json({ error: "Invalid submission" }, { status: 400 });
  }

  const validDomain = await isEmailDomainValid(email);
  if (!validDomain) {
    return NextResponse.json(
      { error: "That email domain doesn't seem to exist." },
      { status: 400 }
    );
  }

  const resolvedSource = source === "others" ? sourceOther || "Others" : source;

  try {
    await appendToSheet([
      "=ROW()-1",
      new Date().toLocaleString("en-IN", {
        timeZone: "Asia/Kolkata",
        dateStyle: "medium",
        timeStyle: "short",
      }),
      name,
      phone,
      email,
      resolvedSource,
    ]);
  } catch (err) {
    console.error("Failed to write to Google Sheet:", err);
    return NextResponse.json(
      { error: "Something went wrong saving your entry. Please try again." },
      { status: 500 }
    );
  }

  try {
    await sendConfirmationEmail(name, email);
  } catch (err) {
    console.error("Failed to send confirmation email:", err);
  }

  return NextResponse.json({ ok: true });
}
