import Container from "@/components/Container";
import FadeIn from "@/components/FadeIn";

export default function About() {
  return (
    <section id="about" className="py-24">
      <Container>
        <FadeIn>
          <p className="text-accent text-sm uppercase tracking-widest mb-4">
            about me
          </p>
        </FadeIn>
        <FadeIn delay={0.1}>
          <h2 className="text-text text-4xl md:text-5xl font-medium max-w-3xl">
            I am a first-year CS student at uOttawa, originally from Frisco,
            Texas.
          </h2>
        </FadeIn>
        <FadeIn delay={0.2}>
          <p className="text-muted text-lg mt-6 max-w-2xl leading-relaxed">
            Small description about me here (IN PROGRESS)
          </p>
        </FadeIn>
      </Container>
    </section>
  );
}
