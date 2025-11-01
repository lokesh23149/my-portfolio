import Ecommerce from "../assets/Ecommercesmall.png";
import weatherapp from "../assets/Weathersmall.jpg";
import todolist from "../assets/todo-list.jpg";
import React from "react";
import Header from "./header";

export default function Project() {
  const Projects = [
    {
      image: weatherapp,
      disc: "Weather App using API",
      link: "https://yourprojectlink1.com",
    },
    {
      image: todolist,
      disc: "Todo List with CRUD",
      link: "https://yourprojectlink2.com",
    },
    {
      image: Ecommerce,
      disc: "Responsive Portfolio Site",
      link: "https://yourprojectlink3.com",
    },
  ];

  return (
    <>
      <Header />
      <section
        id="project"
        className="w-full min-h-screen animated-bg flex flex-col md:flex-row items-center justify-center py-16 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-slate-100"
      >
        <div className="text-center mb-12">
          <h1 className="font-bold text-4xl mb-3 border-b-4 inline-block border-emerald-400">
            Projects
          </h1>
          <p className="text-lg font-hero-font text-slate-300">
            Selected projects showcasing UI polish, performance, and clean code.
          </p>
        </div>

        <div className="mx-auto w-full max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 px-2 md:px-4">
          {Projects.map((Project, index) => (
            <div
              key={index}
              className="group bg-white/5 rounded-lg shadow-md ring-1 ring-white/10 backdrop-blur-sm hover:ring-white/20 hover:shadow-xl hover:shadow-emerald-400/20 hover:scale-[1.02] transition-transform duration-300"
            >
              <div className="overflow-hidden">
                <img
                  src={Project.image}
                  alt={Project.disc}
                  className="rounded-t-lg h-[200px] w-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <p className="text-center text-lg text-emerald-300 font-semibold mb-4">
                  {Project.disc}
                </p>
                <div className="flex justify-center">
                  <a
                    href={Project.link}
                    className="accent-btn text-white px-4 py-2 rounded-md hover:bg-emerald-600"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Open Project
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}