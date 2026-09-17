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
            I grew up in Frisco, Texas. Started my CS degree at the
            University of Ottawa on an honors track, then transferred to UT
            Dallas halfway through (long story). Along the way I&apos;ve
            taught five-year-olds how to code, helped run an Arduino
            workshop that won an IEEE award, and co-authored two papers on
            measuring binary star separations. Not exactly related to
            computer science, but it was fun. Everything below is stuff I
            built because I wanted to, not because a class assigned it: a
            backtesting engine, a digital camera held together by a
            microcontroller, and whatever I get into next.
          </p>
          <p className="text-muted font-mono text-sm mt-6">
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
