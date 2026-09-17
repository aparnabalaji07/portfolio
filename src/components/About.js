import Container from "@/components/Container";
import FadeIn from "@/components/FadeIn";

export default function About() {
  return (
    <section id="about" className="py-24">
      <Container>
        <FadeIn>
          <h2 className="text-text text-4xl md:text-5xl font-medium max-w-3xl">
            I like building things end to end, from the code down to whatever
            it&apos;s supposed to run on.
          </h2>
          <p className="text-muted text-lg mt-6 max-w-2xl leading-relaxed">
            I grew up in Frisco, Texas, and started my CS degree at the
            University of Ottawa on an honors track before transferring to
            the University of Texas at Dallas. In between, I&apos;ve taught
            coding fundamentals to kids as young as five, coordinated a
            first-year Arduino workshop that won an IEEE award, and
            co-authored a couple of papers on binary star measurements as a
            side interest in amateur astronomy. Most of what&apos;s below is
            what I build when nobody&apos;s assigning it: a backtesting
            engine, a digital camera built around a microcontroller, and a
            few other things I wanted to see work.
          </p>
          <p className="text-muted font-mono text-sm mt-6">
            Frisco, TX / Ottawa, ON / Dallas, TX
          </p>
        </FadeIn>
      </Container>
    </section>
  );
}
