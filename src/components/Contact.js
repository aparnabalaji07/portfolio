import Container from "@/components/Container";
import FadeIn from "@/components/FadeIn";

export default function Contact() {
  return (
    <section
      id="contact"
      className="pt-12 pb-24 min-h-80 flex flex-col justify-center items-center"
    >
      <Container>
        <FadeIn>
          <div className="max-w-md mx-auto text-center">
            <h2 className="text-text text-4xl md:text-5xl font-medium">
              Contact
            </h2>
            <p className="text-muted text-lg mt-4">
              I am excited to hear about new opportunities and collaborations.
              Please reach out if you would like to work together or just want
              to say hi!
            </p>

            <div className="flex flex-wrap items-center justify-center gap-6 mt-8">
              <a
                href="mailto:aparna.balaji@gmail.com"
                className="bg-accent text-bg px-6 py-3 rounded-lg font-medium hover:opacity-90 transition-opacity outline-none focus-visible:outline-2 focus-visible:outline-text focus-visible:outline-offset-2"
              >
                email me
              </a>
              <a
                href="https://github.com/aparnabalaji07"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted hover:text-text transition-colors underline underline-offset-4 decoration-text/20 outline-none focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-4 rounded-sm"
              >
                github
              </a>
              <a
                href="https://www.linkedin.com/in/aparna-balaji07/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted hover:text-text transition-colors underline underline-offset-4 decoration-text/20 outline-none focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-4 rounded-sm"
              >
                linkedin
              </a>
            </div>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
