import { NextRequest, NextResponse } from "next/server";
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

async function submitToAppsScript(entry: {
  name: string;
  phone: string;
  email: string;
  source: string;
}) {
  const url = process.env.GOOGLE_APPS_SCRIPT_URL;
  const secret = process.env.GOOGLE_APPS_SCRIPT_SECRET;

  if (!url || !secret) {
    throw new Error("Google Apps Script is not configured");
  }

  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ ...entry, secret }),
    redirect: "follow",
  });

  const data = await res.json();
  if (!res.ok || data.error) {
    throw new Error(data.error || `Apps Script request failed (${res.status})`);
  }
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
    await submitToAppsScript({ name, phone, email, source: resolvedSource });
  } catch (err) {
    console.error("Failed to submit entry via Apps Script:", err);
    return NextResponse.json(
      { error: "Something went wrong saving your entry. Please try again." },
      { status: 500 }
    );
  }

  return NextResponse.json({ ok: true });
}
