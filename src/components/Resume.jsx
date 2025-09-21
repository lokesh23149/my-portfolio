
import Resumeimg from "../assets/hero3.png";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Header from "./header";


export default function Resume() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);
  const resumePath="/resume.pdf";

  return (
    <>
      <Header />

      <section
        id="resume"
        className="w-full min-h-screen flex flex-col md:flex-row py-20 bg-clr3"
      >
        {/* Left Image Section */}
        <div
          className="w-full md:w-1/2 flex justify-center items-center"
          data-aos="fade-right"
        >
          <img
            src={Resumeimg}
            alt="Resume preview"
            className="max-w-md rounded-lg shadow-lg"
          />
        </div>

        {/* Right Content Section */}
        <div
          className="w-full md:w-1/2 flex justify-center items-center"
          data-aos="fade-left"
        >
          <div className="flex flex-col mx-10 mt-5 text-center md:text-left">
            <h1 className="font-bold border-b-2 w-[110px] text-3xl mb-4">
              Resume
            </h1>
            <p className="font-medium font-hero-font">
              You can view my resume{" "}
              <a
                className="btn text-teal-700 underline hover:text-teal-800"
                href={resumePath}
              >
                Download
              </a>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
