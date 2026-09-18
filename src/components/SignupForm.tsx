"use client";

import { useState } from "react";

export default function SignupForm({
  onSuccess,
}: {
  onSuccess: () => void;
}) {
  const [source, setSource] = useState("");
  const [sourceOther, setSourceOther] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [formError, setFormError] = useState("");
  const [submitting, setSubmitting] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setEmailError("");
    setFormError("");

    if (phone.length !== 10) {
      return;
    }

    setSubmitting(true);
    try {
      const res = await fetch("/api/join", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, phone, email, source, sourceOther }),
      });
      const data = await res.json();

      if (!res.ok) {
        if (typeof data.error === "string" && data.error.includes("email")) {
          setEmailError(data.error);
        } else {
          setFormError(data.error || "Something went wrong. Please try again.");
        }
        return;
      }

      onSuccess();
    } catch {
      setFormError("Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mt-8 flex w-full max-w-sm flex-col gap-4"
    >
      <input
        type="text"
        name="name"
        placeholder="Full name"
        required
        value={name}
        onChange={(e) =>
          setName(e.target.value.replace(/[^A-Za-z\s'-]/g, ""))
        }
        pattern="[A-Za-z\s'-]+"
        title="Name can only contain letters"
        className="rounded-full border border-black/20 bg-white px-5 py-3 text-black placeholder:text-black/40 focus:outline-none focus:ring-2 focus:ring-black/40"
      />
      <input
        type="tel"
        name="phone"
        placeholder="Phone number"
        required
        inputMode="numeric"
        value={phone}
        onChange={(e) =>
          setPhone(e.target.value.replace(/[^0-9]/g, "").slice(0, 10))
        }
        pattern="[0-9]{10}"
        maxLength={10}
        title="Phone number must be exactly 10 digits"
        className="rounded-full border border-black/20 bg-white px-5 py-3 text-black placeholder:text-black/40 focus:outline-none focus:ring-2 focus:ring-black/40"
      />
      <div className="flex flex-col gap-1">
        <input
          type="email"
          name="email"
          placeholder="Email"
          required
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            setEmailError("");
          }}
          className="w-full rounded-full border border-black/20 bg-white px-5 py-3 text-black placeholder:text-black/40 focus:outline-none focus:ring-2 focus:ring-black/40"
        />
        {emailError && (
          <p className="px-4 text-left text-sm text-red-600">{emailError}</p>
        )}
      </div>
      <select
        name="source"
        required
        value={source}
        onChange={(e) => setSource(e.target.value)}
        className="appearance-none rounded-full border border-black/20 bg-white bg-no-repeat py-3 pl-5 pr-10 text-black focus:outline-none focus:ring-2 focus:ring-black/40"
        style={{
          color: source ? "black" : "rgba(0,0,0,0.4)",
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%235e3825' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E\")",
          backgroundPosition: "right 1rem center",
          backgroundSize: "16px",
        }}
      >
        <option value="" disabled>
          How did you hear about us?
        </option>
        <option value="instagram" style={{ color: "black" }}>
          Instagram
        </option>
        <option value="word_of_mouth" style={{ color: "black" }}>
          Word of mouth
        </option>
        <option value="google_search" style={{ color: "black" }}>
          Google search
        </option>
        <option value="others" style={{ color: "black" }}>
          Others
        </option>
      </select>
      {source === "others" && (
        <input
          type="text"
          name="sourceOther"
          placeholder="Please specify"
          required
          value={sourceOther}
          onChange={(e) => setSourceOther(e.target.value)}
          className="rounded-full border border-black/20 bg-white px-5 py-3 text-black placeholder:text-black/40 focus:outline-none focus:ring-2 focus:ring-black/40"
        />
      )}
      {formError && (
        <p className="px-4 text-center text-sm text-red-600">{formError}</p>
      )}
      <button
        type="submit"
        disabled={submitting}
        className="playful-btn mt-2 self-center disabled:opacity-60"
      >
        {submitting ? "Submitting..." : "Submit"}
      </button>
    </form>
  );
}
