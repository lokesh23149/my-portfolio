import projectimg from "../assets/OIP.jpg";
import weatherapp from "../assets/weather-app.jpg";
import todolist from "../assets/todo-list.jpg";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Header from "./header";

// Replace this with your actual image import

export default function Project() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

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
      image: projectimg,
      disc: "Responsive Portfolio Site",
      link: "https://yourprojectlink3.com",
    },
  ];

  return (
    <>
      <Header style={{ backgroundColor: "rgb(251, 239, 215)" }} />
      <section
        id="project"
        className="w-full min-h-screen flex flex-col py-10 px-5 justify-center bg-clr2"
      >
        <div className="text-center mb-12">
          <h1 className="font-bold text-4xl mb-3 border-b-4 inline-block border-teal-700">
            Projects
          </h1>
          <p className="text-lg font-hero-font text-gray-700">
            My proudest builds with React and TailwindCSS. Check them out!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-5 ">
          {Projects.map((Project, index) => (
            <div
              key={index}
              className="bg-white rounded-lg    shadow-md hover:shadow-2xl transition duration-300 transform hover:-translate-y-2 "
              data-aos="fade-up"
              
            >
              <img
                src={Project.image}
                alt={Project.disc}
                className="rounded-t-lg h-[200px] w-full object-cover"
              />
              <div className="p-6">
                <p className="text-center text-lg text-teal-700 font-semibold mb-4">
                  {Project.disc}
                </p>
                <div className="flex justify-center">
                  <a
                    href={Project.link}
                    className="bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 rounded transition duration-200"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Project
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

