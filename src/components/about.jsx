import { useEffect, useRef, useState } from "react";
import heroimg from "../assets/heroimg.png";
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
      "Hi, I’m Lokeshwaran 👋 An enthusiastic Full Stack Developer who loves building powerful and user-friendly web apps.",
    myself2:
      "I enjoy working with both frontend and backend using React, Node.js, and MongoDB. I love learning, building, and solving real-world problems through code.",
    skills: [
      "HTML",
      "CSS",
      "JAVASCRIPT",
      "TAILWIND",
      "REACT.JS",
      "JAVA",
      "SQL",

    ],
  };

  return (
    <>
      <Header />
      <section
        ref={sectionRef}
        id="about"
        className="flex flex-col md:flex-row py-20 bg-clr3  "
      >
        {/* Left image panel */}
        <div
          className={`md:w-1/2 transition-all duration-700 ease-out ${
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
              className="font-bold border-b-2 border-teal-700 w-fit text-3xl mb-4 transform transition-transform duration-500 delay-300 ease-out"
              style={{
                transform: animate ? "translateY(0)" : "translateY(20px)",
              }}
            >
              About Me!
            </h1>
            <div className="font-medium font-hero-font">
              <p
                className="my-5 transition duration-500 delay-400"
                style={{ opacity: animate ? 1 : 0 }}
              >
                {config.myself}
              </p>
              <p
                className="my-3 transition duration-500 delay-500"
                style={{ opacity: animate ? 1 : 0 }}
              >
                {config.myself2}
              </p>

              {/* Skill badges */}
              <div className="flex flex-wrap gap-3 mt-4 ">
                {config.skills.map((skill, index1) => (
                  <a href="#">
                    <span
                      key={index1}
                      className={`px-3 py-1 bg-white text-black rounded-full shadow-md transition-all ease-out duration-500 `}
                      style={{
                        opacity: animate ? 1 : 0,
                        transform: animate
                          ? "translateY(0)"
                          : "translateY(15px)",
                        transitionDelay: `${index1 * 100 + 500}ms`,
                      }}
                    >
                      {skill}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
