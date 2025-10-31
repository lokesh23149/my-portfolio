import { useState } from "react";

export default function Contact() {
  const [copied, setCopied] = useState("");
  const contactInfo = {
    message: "If you'd like to discuss in more detail, feel free to reach out to me anytime.",
    email: "lokiloki4693@gmail.com",
    phone: "9361719237",
  };

  return (
    <section
      id="contact"
      className="min-h-screen animated-bg flex flex-col justify-center items-center md:flex-row py-16 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white"
    >
      <div className="flex flex-col items-center mt-20 max-w-xl text-center">
        <h1 className="text-3xl font-bold mb-5">
          <span className="border-b-2 border-emerald-400 pb-1">Contact</span>
        </h1>
        <p className="mb-8 text-slate-200">{contactInfo.message}</p>

        <div className="w-full max-w-md space-y-4">
          <div className="flex items-center justify-between gap-3 rounded-lg bg-white/5 px-4 py-3 ring-1 ring-white/10 backdrop-blur-sm transition hover:bg-white/10 hover:-translate-y-0.5 hover:shadow-md">
            <div className="text-left">
              <div className="text-sm text-slate-300">Email</div>
              <a href={`mailto:${contactInfo.email}`} className="text-lg font-semibold text-emerald-200 hover:underline underline-offset-4">
                {contactInfo.email}
              </a>
            </div>
            <button
              onClick={async () => {
                try {
                  await navigator.clipboard.writeText(contactInfo.email);
                  setCopied("email");
                  setTimeout(() => setCopied(""), 1200);
                } catch {}
              }}
              className="rounded-md px-3 py-2 text-sm font-medium bg-emerald-600/90 text-white hover:bg-emerald-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70 transition hover:-translate-y-0.5"
            >
              {copied === "email" ? "Copied" : "Copy"}
            </button>
          </div>

          <div className="flex items-center justify-between gap-3 rounded-lg bg-white/5 px-4 py-3 ring-1 ring-white/10 backdrop-blur-sm transition hover:bg-white/10 hover:-translate-y-0.5 hover:shadow-md">
            <div className="text-left">
              <div className="text-sm text-slate-300">Phone</div>
              <a href={`tel:${contactInfo.phone}`} className="text-lg font-semibold text-emerald-200 hover:underline underline-offset-4">
                {contactInfo.phone}
              </a>
            </div>
            <button
              onClick={async () => {
                try {
                  await navigator.clipboard.writeText(contactInfo.phone);
                  setCopied("phone");
                  setTimeout(() => setCopied(""), 1200);
                } catch {}
              }}
              className="rounded-md px-3 py-2 text-sm font-medium bg-emerald-600/90 text-white hover:bg-emerald-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70 transition hover:-translate-y-0.5"
            >
              {copied === "phone" ? "Copied" : "Copy"}
            </button>
          </div>
        </div>

        <div className="mt-8">
          <a
            href={`https://wa.me/${contactInfo.phone}?text=${encodeURIComponent("Hey Lokeshwaran! I visited your portfolio and would like to connect.")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full px-6 py-2.5 font-semibold text-white shadow hover:shadow-lg transition hover:-translate-y-0.5"
            style={{ backgroundImage: 'linear-gradient(90deg, var(--acc1), var(--acc2))' }}
          >
            Say Hello on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}