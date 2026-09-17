import Container from "@/components/Container";
import FadeIn from "@/components/FadeIn";

export default function About() {
  return (
    <section id="about" className="py-24">
      <Container>
        <FadeIn>
          <h2 className="text-text text-4xl md:text-5xl font-medium max-w-3xl">
            I build things end to end.
          </h2>
          <p className="text-muted text-lg mt-6 max-w-2xl leading-relaxed">
            I grew up in Frisco, Texas. I started my computer science degree
            at the University of Ottawa on an honors track, then transferred
            to the University of Texas at Dallas. Along the way, I have
            taught coding to kids as young as five, helped run an Arduino
            workshop that won an IEEE award, and co-authored two papers on
            measuring the separation of binary star systems as a side
            interest in amateur astronomy. That last one has nothing to do
            with computer science, but it mattered to me because it was real
            research, not a class project. Everything below is something I
            built because I wanted to, not because it was assigned: a
            backtesting engine, a digital camera controlled by a
            microcontroller, and whatever I take on next.
          </p>
          <p className="text-text text-lg mt-8 max-w-2xl leading-relaxed">
            I am a woman of color in computer science, and I have been
            doubted in this field because of it more than once. That has
            made me pay attention to who gets left out and made sure I do
            not do the same.
          </p>
          <p className="text-muted font-mono text-sm mt-8">
            Ottawa, ON / Dallas, TX
          </p>
          <p className="text-muted font-mono text-sm mt-1">
            open to relocating anywhere in the US
          </p>
        </FadeIn>
      </Container>
    </section>
  );
}
