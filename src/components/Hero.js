"use client";
import Starfield from "@/components/Starfield";
import Typewriter from "@/components/Typewriter";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center">
      <Starfield />
      <div className="px-6 md:px-12 max-w-4xl relative z-10">
        <p className="text-accent text-sm uppercase tracking-widest mb-4">
          CS student · uOttawa
        </p>
        <h1 className="text-text text-6xl md:text-8xl font-medium">
          Aparna Balaji
        </h1>
        <p className="text-muted text-xl md:text-2xl mt-6 max-w-2xl">
          <Typewriter
            text="Something about what I am building and interested in here **IN PROGRESS**."
            speed={50}
          />
        </p>

        <div className="flex gap-4 mt-10">
          <a
            href="#projects"
            className="bg-accent text-bg px-6 py-3 rounded-lg font-medium hover:opacity-90 transition-opacity"
          >
            view my work
          </a>
          <a
            href="/Aparna_Balaji_Resume.pdf"
            className="border border-accent text-accent px-6 py-3 rounded-lg font-medium hover:bg-accent hover:text-bg transition-colors"
          >
            download resume
          </a>
        </div>
      </div>

      <motion.a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted text-2xl hover:text-accent transition-colors cursor-pointer"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
      >
        ↓
      </motion.a>
    </section>
  );
}
