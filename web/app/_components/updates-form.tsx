"use client";

import { useState } from "react";
import { enquiryStatuses, site } from "../_content/home";
import { CheckIcon, WhatsAppIcon } from "./icons";

type Status = "idle" | "sending" | "done" | "error";

/**
 * Sign-up form for WhatsApp daily updates.
 *
 * If `site.updatesFormEndpoint` is set (a Google Apps Script web app URL, see README),
 * the details are saved to your Google Sheet. If it's empty, the form opens WhatsApp
 * with the details pre-filled so no sign-up is lost.
 */
export function UpdatesForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const lead = {
      name: String(form.get("name") ?? "").trim(),
      whatsapp: String(form.get("whatsapp") ?? "").trim(),
      status: String(form.get("status") ?? ""),
      source: "website",
    };

    if (!site.updatesFormEndpoint) {
      const text = `Hi! Please add me to The PM Lab daily updates.\nName: ${lead.name}\nWhatsApp: ${lead.whatsapp}\nI am a: ${lead.status}`;
      window.open(`https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(text)}`, "_blank", "noopener");
      setStatus("done");
      return;
    }

    setStatus("sending");
    try {
      // text/plain + no-cors avoids a CORS preflight, which Apps Script doesn't support.
      await fetch(site.updatesFormEndpoint, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "text/plain;charset=utf-8" },
        body: JSON.stringify(lead),
      });
      setStatus("done");
    } catch {
      setStatus("error");
    }
  }

  if (status === "done") {
    return (
      <div className="relative flex flex-col items-center justify-center rounded-2xl bg-white p-8 text-center text-ink">
        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-mint text-white">
          <CheckIcon className="h-7 w-7" />
        </span>
        <p className="mt-5 font-display text-2xl font-bold">You&apos;re on the list!</p>
        <p className="mt-2 text-ink-soft">
          Your first update will arrive on WhatsApp soon. You can reply STOP at any time to unsubscribe.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="relative grid gap-3 rounded-2xl bg-white p-6 text-ink">
      <div>
        <label htmlFor="name" className="text-sm font-medium">Full name</label>
        <input
          id="name"
          name="name"
          required
          autoComplete="name"
          placeholder="Your name"
          className="mt-1.5 h-11 w-full rounded-xl border border-line bg-paper px-3 outline-none focus:border-brand"
        />
      </div>
      <div>
        <label htmlFor="whatsapp" className="text-sm font-medium">WhatsApp number</label>
        <input
          id="whatsapp"
          name="whatsapp"
          type="tel"
          required
          autoComplete="tel"
          inputMode="tel"
          pattern="[+0-9 ]{10,16}"
          title="Enter a valid phone number, e.g. +91 98765 43210"
          placeholder="+91 98765 43210"
          className="mt-1.5 h-11 w-full rounded-xl border border-line bg-paper px-3 outline-none focus:border-brand"
        />
      </div>
      <div>
        <label htmlFor="status" className="text-sm font-medium">I am a…</label>
        <select
          id="status"
          name="status"
          required
          defaultValue=""
          className="mt-1.5 h-11 w-full rounded-xl border border-line bg-paper px-3 outline-none focus:border-brand"
        >
          <option value="" disabled>Select one</option>
          {enquiryStatuses.map((s) => (
            <option key={s}>{s}</option>
          ))}
        </select>
      </div>
      <label className="mt-1 flex items-start gap-2.5 text-sm text-ink-soft">
        <input type="checkbox" name="consent" required className="mt-0.5 h-4 w-4 shrink-0 accent-[var(--color-brand)]" />
        <span>
          I agree to receive daily updates from {site.name} on WhatsApp and to the{" "}
          <a href="/privacy" target="_blank" className="underline hover:text-ink">Privacy Policy</a>. I can
          reply STOP at any time.
        </span>
      </label>
      <button
        type="submit"
        disabled={status === "sending"}
        className="mt-2 flex h-12 items-center justify-center gap-2 rounded-xl bg-[#25d366] font-semibold text-ink transition hover:brightness-95 disabled:opacity-60"
      >
        <WhatsAppIcon className="h-5 w-5" />
        {status === "sending" ? "Subscribing…" : "Get daily updates"}
      </button>
      {status === "error" && (
        <p className="text-center text-sm text-accent">Something went wrong. Please try again.</p>
      )}
    </form>
  );
}
