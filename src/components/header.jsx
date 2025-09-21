
import { useState } from "react";

import { Bars3Icon } from "@heroicons/react/24/solid";


export default function Header({ style }) {
  const [togglemenu, settogglemenu] = useState(false);
  return (
    <header
      style={style}
      id="header"
      className="flex justify-between items-center  bg-clr"
    >
      <a href="#" className="p-4 font-bold text-3xl ">
        Lokeshwaran V
      </a>
      <nav className="hidden md:block">
        <ul className="flex text-lg ">
          <li className="hover:text-white hover:font-medium ">
            <a href="/">HOME</a>
          </li>
          <li className="hover:text-white hover:font-medium">
            <a href="#about">ABOUT</a>
          </li>
          <li className="hover:text-white hover:font-medium">
            <a href="#project">PROJECT</a>
          </li>
          <li className="hover:text-white hover:font-medium">
            <a href="#resume">RESUME</a>
          </li>
          <li className="hover:text-white hover:font-medium">
            <a href="#contact">CONTACT</a>
          </li>
        </ul>
      </nav>
      {togglemenu && (
        <nav className="block md:hidden">
          <ul
            onClick={() => settogglemenu(!togglemenu)}
            className="flex flex-col text-lg toggle-menu"
          >
            <a href="/">
              <li>HOME</li>
            </a>

            <a href="#about">
              <li>ABOUT</li>
            </a>

            <a href="#project">
              <li>PROJECT</li>
            </a>

            <a href="#resume">
              <li>RESUME</li>
            </a>

            <a href="#contact">
              <li>CONTACT</li>
            </a>
          </ul>
        </nav>
      )}
      <button
        onClick={() => settogglemenu(!togglemenu)}
        className="block md:hidden"
      >
        <Bars3Icon className="text-black h-5 px-4" />
      </button>
    </header>
  );
}

