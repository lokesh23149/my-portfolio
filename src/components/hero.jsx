import { BsWhatsapp } from "react-icons/bs";


import React from "react";
import loki2 from "../assets/lokii.jpg";

import {
  AiFillInstagram,
  AiFillFacebook,
  AiFillTwitterSquare,
  AiFillLinkedin,
  AiFillX,
} from "react-icons/ai";

export default function Hero() {

  return (
    <section
      id="hero"
       className="w-full min-h-screen animated-bg flex flex-col md:flex-row items-center justify-center py-16 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-slate-100"
    >
      {/* Left Side – Text + Icons */}
      <div
        className="flex flex-col items-start text-left max-w-md rounded-xl p-6"
      >
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight">
          <span className="bg-clip-text text-transparent accent-gradient">Hi,<br /> I'm Lokeshwaran</span>
        </h1>
        <p className="text-xl text-slate-300 mt-2">Full‑Stack Developer crafting fast, modern web apps</p>

        {/* Social Icons */}
        <div className="flex gap-4 pt-4">
          <a
            href="https://www.instagram.com/this__is__loki___/" target="_blank"
            className="hover:text-fuchsia-400"
          >
            <AiFillInstagram size={30} />
          </a>
          <a href="https://www.linkedin.com/in/lokeshwaran4" className="hover:text-sky-400">
            <AiFillLinkedin size={30} />
          </a>
          <a href="https://www.facebook.com/share/17Z71dDnSH/" className="hover:text-blue-700"
          >
            <AiFillFacebook size={30} />
          </a><a href="https://x.com/LokeshLoke9386?t=DOKiD-w0cYTSbSKp9KQjKw&s=09" className="hover:text-gray-500"
          >
            <AiFillTwitterSquare size={30} />
          </a>
        </div>
      </div>

      {/* Right Side – Image */}
      <div
        className="rounded-full p-2 bg-white/90 shadow-md hover:scale-105 transition-transform duration-300"
      >
        <img
          src={loki2}
          alt="Lokeshwaran"
          className="rounded-full object-cover h-72 w-72 md:h-80 md:w-80"
        />
      </div>
    </section>
  );
}