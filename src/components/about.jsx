import { useEffect, useRef, useState } from "react";
import heroimg from "../assets/Heroimgsmall.png";
import Header from "./header";

export default function About() {
  const sectionRef = useRef(null);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setAnimate(true);
      },
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const config = {
    myself:
      "Hi, I’m Lokeshwaran 👋 I build clean, user‑friendly products with modern web tech.",
    myself2:
      "From React on the front to APIs on the back, I focus on performance, accessibility, and great developer experience.",
    skills: [
      { name: "HTML", percent: 95 },
      { name: "CSS", percent: 92 },
      { name: "JavaScript", percent: 88 },
      { name: "TailwindCSS", percent: 90 },
      { name: "React.js", percent: 85 },
      { name: "Java", percent: 75 },
      { name: "Spring Boot", percent: 20 },
      { name: "SQL", percent: 77 },
    ],
  };

  const [displayedPercents, setDisplayedPercents] = useState(() =>
    config.skills.map(() => 0)
  );

  useEffect(() => {
    if (!animate) return;
    const durationMs = 900;
    const startTs = performance.now();
    let rafId;

    const tick = (now) => {
      const t = Math.min(1, (now - startTs) / durationMs);
      const eased = 1 - Math.pow(1 - t, 3); // easeOutCubic
      setDisplayedPercents(
        config.skills.map((s) => Math.round(s.percent * eased))
      );
      if (t < 1) rafId = requestAnimationFrame(tick);
    };

    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, [animate]);

  return (
    <>
      <Header />
      <section
        ref={sectionRef}
        id="about"
        className="w-full min-h-screen animated-bg flex flex-col md:flex-row items-center justify-center py-16 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-slate-100"
      >
        {/* Left image panel */}
        <div
          className={`md:w-1/2 transition-all duration-700 ease-out transform hover:scale-[1.01] ${
            animate ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
          }`}
        >
          <img src={heroimg} alt="Hero" />
        </div>

        {/* Right content panel */}
        <div className="md:w-1/2 flex justify-center">
          <div
            className={`flex flex-col mx-10 md:mx-1 mt-5 transition-opacity duration-700 delay-300 ease-out ${
              animate ? "opacity-100" : "opacity-0"
            }`}
          >
            <h1
              className="font-bold border-b-2 border-teal-400 w-fit text-3xl mb-4 transform transition-transform duration-500 delay-300 ease-out"
              style={{
                transform: animate ? "translateY(0)" : "translateY(20px)",
              }}
            >
              About Me!
            </h1>
            <div className="font-medium font-hero-font">
              <p
                className="my-5 transition duration-500 delay-400 text-slate-200"
                style={{ opacity: animate ? 1 : 0 }}
              >
                {config.myself}
              </p>
              <p
                className="my-3 transition duration-500 delay-500 text-slate-300"
                style={{ opacity: animate ? 1 : 0 }}
              >
                {config.myself2}
              </p>

              {/* Skill bars */}
              <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                {config.skills.map((skill, index1) => (
                  <div
                    key={index1}
                    className="w-full rounded-lg border border-white/10 bg-white/5 p-4 backdrop-blur-sm shadow hover:shadow-md transition"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-slate-100">
                        {skill.name}
                      </span>
                      <span className="text-sm text-emerald-300">
                        {displayedPercents[index1]}%
                      </span>
                    </div>
                    <div
                      className="h-2.5 w-full rounded-full bg-white/10 overflow-hidden"
                      role="progressbar"
                      aria-valuemin={0}
                      aria-valuemax={100}
                      aria-valuenow={displayedPercents[index1]}
                    >
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 transition-all duration-700 ease-out"
                        style={{
                          width: `${displayedPercents[index1]}%`,
                          boxShadow: "0 0 12px rgba(16,185,129,0.35)",
                          transitionDelay: `${index1 * 120 + 300}ms`,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}