"use client";

import { useState, useEffect } from "react";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed top-4 inset-x-4 md:inset-x-8 z-50 flex justify-center">
      <nav
        className={`w-full max-w-5xl flex items-center justify-between h-14 px-6 rounded-full border transition-colors duration-300 ${
          scrolled
            ? "bg-bg/90 backdrop-blur-md border-white/10"
            : "bg-bg/40 backdrop-blur-md border-white/5"
        }`}
      >
        <a
          href="#"
          className="text-text text-lg font-medium outline-none focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-4 rounded-sm"
        >
          Aparna Balaji
        </a>
        <div className="hidden md:flex gap-8">
          <a
            href="#about"
            className="text-text hover:text-accent transition-colors outline-none focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-4 rounded-sm"
          >
            about
          </a>
          <a
            href="#projects"
            className="text-text hover:text-accent transition-colors outline-none focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-4 rounded-sm"
          >
            projects
          </a>
          <a
            href="#experience"
            className="text-text hover:text-accent transition-colors outline-none focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-4 rounded-sm"
          >
            experience
          </a>
          <a
            href="#contact"
            className="text-text hover:text-accent transition-colors outline-none focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-4 rounded-sm"
          >
            contact
          </a>
        </div>

        <div
          className="relative md:hidden group"
          onMouseLeave={() => setMenuOpen(false)}
        >
          <button
            className="text-text text-2xl outline-none focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2 rounded-sm"
            onClick={() => setMenuOpen(!menuOpen)}
            onMouseEnter={() => setMenuOpen(true)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? "✕" : "☰"}
          </button>
          <div
            className={`absolute top-full right-0 mt-2 w-48 bg-surface border border-white/10 rounded-2xl overflow-hidden flex flex-col ${
              menuOpen ? "flex" : "hidden"
            }`}
          >
            <a
              href="#about"
              className="px-4 py-2 text-text hover:text-accent transition-colors outline-none focus-visible:outline-2 focus-visible:outline-accent focus-visible:-outline-offset-2"
              onClick={() => setMenuOpen(false)}
            >
              about
            </a>
            <a
              href="#projects"
              className="px-4 py-2 text-text hover:text-accent transition-colors outline-none focus-visible:outline-2 focus-visible:outline-accent focus-visible:-outline-offset-2"
              onClick={() => setMenuOpen(false)}
            >
              projects
            </a>
            <a
              href="#experience"
              className="px-4 py-2 text-text hover:text-accent transition-colors outline-none focus-visible:outline-2 focus-visible:outline-accent focus-visible:-outline-offset-2"
              onClick={() => setMenuOpen(false)}
            >
              experience
            </a>
            <a
              href="#contact"
              className="px-4 py-2 text-text hover:text-accent transition-colors outline-none focus-visible:outline-2 focus-visible:outline-accent focus-visible:-outline-offset-2"
              onClick={() => setMenuOpen(false)}
            >
              contact
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
}
