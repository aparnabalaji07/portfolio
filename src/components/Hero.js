"use client";
import Starfield from "@/components/Starfield";
import Typewriter from "@/components/Typewriter";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center overflow-hidden">
      <Starfield />
      <div className="px-6 md:px-12 max-w-4xl relative z-10">
        <h1 className="text-text text-5xl sm:text-6xl md:text-8xl font-medium">
          Aparna Balaji
        </h1>
        <p className="text-muted text-lg sm:text-xl md:text-2xl mt-6 max-w-2xl">
          <Typewriter
            text="I am a computer science student who builds projects and likes teaching people how they work."
            speed={35}
          />
        </p>

        <div className="flex flex-wrap gap-4 mt-10">
          <a
            href="#projects"
            className="bg-accent text-bg px-6 py-3 rounded-lg font-medium hover:opacity-90 transition-opacity outline-none focus-visible:outline-2 focus-visible:outline-text focus-visible:outline-offset-2"
          >
            view my work
          </a>
          <a
            href="/Aparna_Balaji_Resume.pdf"
            className="border border-accent text-accent px-6 py-3 rounded-lg font-medium hover:bg-accent hover:text-bg transition-colors outline-none focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2"
          >
            download resume
          </a>
        </div>
      </div>
    </section>
  );
}
