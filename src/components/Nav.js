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
    <nav
      className={`fixed top-0 w-full z-50 h-16 flex items-center justify-between px-6 transition-colors duration-300 ${
        scrolled
          ? "bg-bg/80 backdrop-blur-sm border-b border-white/10"
          : "bg-transparent"
      }`}
    >
      {" "}
      <a href="#" className="text-text text-lg font-medium">
        Aparna Balaji
      </a>
      <div className="hidden md:flex gap-8">
        <a
          href="#about"
          className="text-muted hover:text-accent transition-colors"
        >
          about
        </a>
        <a
          href="#projects"
          className="text-muted hover:text-accent transition-colors"
        >
          projects
        </a>
        <a
          href="#experience"
          className="text-muted hover:text-accent transition-colors"
        >
          experience
        </a>
        <a
          href="#contact"
          className="text-muted hover:text-accent transition-colors"
        >
          contact
        </a>
      </div>
      <button
        className="md:hidden text-text text-2xl"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? "✕" : "☰"}
      </button>
      {menuOpen && (
        <div className="absolute top-16 right-0 w-48 bg-bg shadow-lg flex flex-col">
          <a
            href="#about"
            className="px-4 py-2 text-muted hover:text-accent transition-colors"
            onClick={() => setMenuOpen(false)}
          >
            about
          </a>
          <a
            href="#projects"
            className="px-4 py-2 text-muted hover:text-accent transition-colors"
            onClick={() => setMenuOpen(false)}
          >
            projects
          </a>
          <a
            href="#experience"
            className="px-4 py-2 text-muted hover:text-accent transition-colors"
            onClick={() => setMenuOpen(false)}
          >
            experience
          </a>
          <a
            href="#contact"
            className="px-4 py-2 text-muted hover:text-accent transition-colors"
            onClick={() => setMenuOpen(false)}
          >
            contact
          </a>
        </div>
      )}
    </nav>
  );
}
