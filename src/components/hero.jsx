import { BsWhatsapp } from "react-icons/bs";


import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import loki2 from "../assets/lokeshwaran.jpg";

import {
  AiFillInstagram,
  AiFillFacebook,
  AiFillTwitterSquare,
} from "react-icons/ai";

export default function Hero() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section
      id="hero"
      className="w-full min-h-screen flex flex-col md:flex-row items-center justify-center px-4 md:px-20 py-20 bg-clr2 gap-10"
    >
      {/* Left Side – Text + Icons */}
      <div
        className="flex flex-col items-start text-left max-w-md rounded-xl p-6 transition duration-300"
        data-aos="fade-right"
      >
        <h1 className="text-4xl font-bold text-black font-hero-font leading-tight">
          Hi,<br /> I'm Lokeshwaran
        </h1>
        <p className="text-lg text-gray-700 mt-2">I'm a Full Stack Developer</p>

        {/* Social Icons */}
        <div className="flex gap-4 pt-4" data-aos="zoom-in" data-aos-delay="300">
          <a
            href="https://www.instagram.com/this_is_loki__/" target="_blank"
            className="hover:text-purple-600"
          >
            <AiFillInstagram size={30} />
          </a>
          <a href="#" className="hover:text-green-500">
            <AiFillTwitterSquare size={30} />
          </a>
          <a href="#" className="hover:text-blue-600">
            <AiFillFacebook size={30} />
          </a>
        </div>
      </div>

      {/* Right Side – Image */}
      <div
        className="border-2 border-teal-500 rounded-full p-2 bg-white shadow-md hover:shadow-lg transition duration-300"
        data-aos="fade-left"
        data-aos-delay="200"
      >
        <img
          src={loki2}
          alt="Lokeshwaran"
          className="rounded-full object-cover hover:scale-105 transition-transform duration-300"
          style={{
            height: "300px",
            width: "300px",
            boxShadow: "0px 10px 30px rgb(0, 136, 122)",
            border: "5px solid #00887A",
          }}
        />
      </div>
    </section>
  );
}