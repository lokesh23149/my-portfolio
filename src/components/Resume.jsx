
import Resumeimg from "../assets/resume.png";
import React from "react";
import Header from "./header";

export default function Resume() {
  const resumePath = "/resume.png";

  return (
    <>
      <Header />

      <section
        id="resume"
        className="w-full min-h-screen animated-bg flex flex-col items-center justify-center py-16 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-slate-100"
      >
        {/* Resume Image */}
        <div className="flex justify-center items-center mb-8">
          <div className="group relative w-[320px] md:w-[380px]">
            <div
              className="absolute -inset-0.5 rounded-2xl blur-lg opacity-40"
              style={{
                backgroundImage:
                  "linear-gradient(135deg, var(--acc1), var(--acc3))",
              }}
            />
            <div className="relative rounded-2xl bg-white/5 ring-1 ring-white/10 backdrop-blur-md shadow-xl transition-transform duration-300 group-hover:-translate-y-1 group-hover:rotate-1 overflow-hidden">
              <div className="flex items-center gap-2 px-4 py-2 border-b border-white/10 bg-white/5">
                <span
                  className="h-3 w-3 rounded-full"
                  style={{ background: "#ef4444" }}
                />
                <span
                  className="h-3 w-3 rounded-full"
                  style={{ background: "#f59e0b" }}
                />
                <span
                  className="h-3 w-3 rounded-full"
                  style={{ background: "#10b981" }}
                />
                <span className="ml-auto text-xs text-slate-300">
                  resume.pdf
                </span>
              </div>
              <img
                src={Resumeimg}
                alt="Resume"
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="flex justify-center items-center">
          <div className="flex flex-col mx-10 mt-5 text-center">
            <h1 className="font-bold border-b-2 border-emerald-400 w-fit pr-4 text-3xl mb-4">
              Resume
            </h1>
            <p className="font-medium font-hero-font">
              Grab my latest resume below.
            </p>
            <div className="mt-4">
              <a
                className="group inline-flex items-center gap-2 rounded-full px-6 py-2 text-white shadow-lg transition hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
                href={resumePath}
                download
                style={{
                  backgroundImage:
                    "linear-gradient(90deg, var(--acc1), var(--acc2))",
                }}
              >
                <span className="font-semibold">Download my Resume</span>
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="transition-transform group-hover:translate-y-0.5"
                >
                  <path
                    d="M12 3v12m0 0 4-4m-4 4-4-4"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M20 21H4"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </a>
              <div className="mt-2 text-sm text-slate-300">PDF • ~1 MB</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
