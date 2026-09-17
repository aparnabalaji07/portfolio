"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      animate={{ height: scrolled ? 56 : 80 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      className={`fixed top-0 inset-x-0 z-50 border-b transition-colors duration-300 ${
        scrolled
          ? "bg-bg/90 backdrop-blur-md border-text/10"
          : "bg-transparent border-text/5"
      }`}
    >
      <div className="max-w-5xl mx-auto px-6 h-full flex items-center justify-between">
        <a
          href="#"
          className="flex items-center gap-2 text-text text-lg font-medium outline-none focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-4 rounded-sm"
        >
          <Image
            src="/images/heart-icon.png"
            alt=""
            width={16}
            height={16}
          />
          Aparna Balaji
        </a>
        <div className="flex items-center gap-6">
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
              className={`absolute top-full right-0 mt-2 w-48 bg-surface border border-text/10 rounded-2xl overflow-hidden flex flex-col ${
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
        </div>
      </div>
    </motion.nav>
  );
}
