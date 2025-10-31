
import { useEffect, useState } from "react";

import { Bars3Icon } from "@heroicons/react/24/solid";


export default function Header({ style }) {
  const [togglemenu, settogglemenu] = useState(false);
  const [theme, setTheme] = useState('emerald');

  useEffect(() => {
    const saved = localStorage.getItem('theme') || 'emerald';
    setTheme(saved);
    document.documentElement.classList.add(`theme-${saved}`);
  }, []);

  const applyTheme = (name) => {
    // Remove any existing theme-* classes to avoid conflicts
    document.documentElement.classList.forEach((cls) => {
      if (cls.startsWith('theme-')) {
        document.documentElement.classList.remove(cls);
      }
    });
    document.documentElement.classList.add(`theme-${name}`);
    setTheme(name);
    localStorage.setItem('theme', name);
  };
  return (
    <header
      style={style}
      id="header"
      className="sticky top-0 z-50 flex items-center justify-between bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 text-white shadow-md"
    >
      <a href="#" className="p-4 font-bold text-3xl tracking-tight transition transform hover:-translate-y-0.5">
        <span className="bg-gradient-to-r from-white to-teal-200 bg-clip-text text-transparent drop-shadow">Lokeshwaran V</span>
      </a>
      <nav className="hidden md:block">
        <ul className="flex items-center gap-6 text-base">
          <li>
            <a
              href="/"
              className="px-2 py-2 rounded-md transition-all duration-200 hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60 underline-offset-4 hover:underline"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#about"
              className="px-2 py-2 rounded-md transition-all duration-200 hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60 underline-offset-4 hover:underline"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#project"
              className="px-2 py-2 rounded-md transition-all duration-200 hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60 underline-offset-4 hover:underline"
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#resume"
              className="px-2 py-2 rounded-md transition-all duration-200 hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60 underline-offset-4 hover:underline"
            >
              Resume
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="px-2 py-2 rounded-md transition-all duration-200 hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60 underline-offset-4 hover:underline"
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>
      <div className="hidden md:flex items-center gap-2 pr-3">
        <label htmlFor="theme" className="text-sm text-white/80">Theme</label>
        <select id="theme" value={theme} onChange={(e)=>applyTheme(e.target.value)} className="text-sm rounded-md bg-white/10 text-white px-2 py-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70">
          <option value="emerald">Emerald</option>
          <option value="sky">Sky</option>
          <option value="purple">Purple</option>
        </select>
      </div>
      {togglemenu && (
        <nav className="md:hidden absolute right-4 top-16">
          <ul
            className="flex flex-col rounded-lg bg-white/95 text-gray-900 shadow-xl ring-1 ring-black/5 backdrop-blur-sm overflow-hidden origin-top-right transform transition-all duration-200"
          >
            <a href="/" className="px-4 py-3 hover:bg-gray-100 transition-colors" onClick={() => settogglemenu(false)}> 
              <li>HOME</li>
            </a>
            <a href="#about" className="px-4 py-3 hover:bg-gray-100 transition-colors" onClick={() => settogglemenu(false)}>
              <li>ABOUT</li>
            </a>
            <a href="#project" className="px-4 py-3 hover:bg-gray-100 transition-colors" onClick={() => settogglemenu(false)}>
              <li>PROJECT</li>
            </a>
            <a href="#resume" className="px-4 py-3 hover:bg-gray-100 transition-colors" onClick={() => settogglemenu(false)}>
              <li>RESUME</li>
            </a>
            <a href="#contact" className="px-4 py-3 hover:bg-gray-100 transition-colors" onClick={() => settogglemenu(false)}>
              <li>CONTACT</li>
            </a>
            <div className="px-4 py-3 border-t border-gray-200" onClick={(e)=>e.stopPropagation()}>
              <label htmlFor="m-theme" className="text-sm text-gray-700 mr-2">Theme</label>
              <select id="m-theme" value={theme} onChange={(e)=>applyTheme(e.target.value)} className="text-sm rounded-md bg-gray-100 text-gray-900 px-2 py-1">
                <option value="emerald">Emerald</option>
                <option value="sky">Sky</option>
                <option value="purple">Purple</option>
              </select>
            </div>
          </ul>
        </nav>
      )}
      <button
        aria-expanded={togglemenu}
        aria-controls="mobile-nav"
        aria-label="Toggle navigation menu"
        onClick={() => settogglemenu(!togglemenu)}
        className="block md:hidden p-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
      >
        <Bars3Icon className="h-6 w-6 text-white" />
      </button>
    </header>
  );
}

