import React, { useState, useEffect } from "react";
import heroimg from "../assets/Heroimgsmall.png";
import Header from "./header";
import { motion } from "framer-motion";

export default function About() {
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

  const [animatedSkills, setAnimatedSkills] = useState(
    config.skills.map(skill => skill.percent)
  );

  useEffect(() => {
    // Start animation immediately when component mounts
    setAnimatedSkills(config.skills.map(skill => skill.percent));
  }, []);

  return (
    <>
      <Header />
      <section
        id="about"
        className="w-full min-h-screen animated-bg flex flex-col md:flex-row items-center justify-center py-16 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-slate-100"
      >
        {/* Left image panel */}
        <motion.div
          className="md:w-1/2"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <img src={heroimg} alt="Hero" className="transition-all duration-700 ease-out transform hover:scale-[1.01]" />
        </motion.div>

        {/* Right content panel */}
        <motion.div
          className="md:w-1/2 flex justify-center"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col mx-10 md:mx-1 mt-5">
            <motion.h1
              className="font-bold border-b-2 border-teal-400 w-fit text-3xl mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              About Me!
            </motion.h1>
            <div className="font-medium font-hero-font">
              <motion.p
                className="my-5 text-slate-200"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
              >
                {config.myself}
              </motion.p>
              <motion.p
                className="my-3 text-slate-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                viewport={{ once: true }}
              >
                {config.myself2}
              </motion.p>

              {/* Skill bars */}
              <motion.div
                className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 1 }}
                viewport={{ once: true }}
              >
                {config.skills.map((skill, index1) => (
                  <motion.div
                    key={index1}
                    className="w-full rounded-lg border border-white/10 bg-white/5 p-4 backdrop-blur-sm shadow"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1.2 + index1 * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-slate-100">
                        {skill.name}
                      </span>
                      <span className="text-sm text-emerald-300">
                        {skill.percent}%
                      </span>
                    </div>
                    <div
                      className="h-2.5 w-full rounded-full bg-white/10 overflow-hidden"
                      role="progressbar"
                      aria-valuemin={0}
                      aria-valuemax={100}
                      aria-valuenow={skill.percent}
                    >
                      <motion.div
                        className="h-full rounded-full bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400"
                        initial={{ width: 0 }}
                        animate={{ width: `${animatedSkills[index1]}%` }}
                        transition={{ duration: 1.2, delay: 0.5 + index1 * 0.1, ease: "easeOut" }}
                        style={{
                          boxShadow: "0 0 12px rgba(16,185,129,0.35)",
                        }}
                      />
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </motion.div>
      </section>
    </>
  );
}
