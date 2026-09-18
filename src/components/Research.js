import Container from "@/components/Container";
import FadeIn from "@/components/FadeIn";
import { research } from "@/data/research";

export default function Research() {
  return (
    <section id="research" className="py-24">
      <Container>
        <FadeIn>
          <h2 className="text-text text-4xl md:text-5xl font-medium">
            Research
          </h2>
          <p className="text-muted text-lg mt-4 max-w-xl">
            Two papers I co-authored on amateur astronomy, measuring binary star
            separations.
          </p>
        </FadeIn>

        <div className="mt-14 border-t border-text/10">
          {research.map((paper) => (
            <div
              key={paper.url}
              className="relative border-b border-text/10 py-10 before:content-[''] before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-accent before:opacity-0 before:transition-opacity hover:before:opacity-100 after:content-[''] after:absolute after:inset-x-0 after:bottom-0 after:h-px after:bg-accent after:opacity-0 after:transition-opacity hover:after:opacity-100"
            >
              <FadeIn>
                <div className="flex flex-col md:flex-row md:justify-between gap-6">
                  <div className="md:w-64 shrink-0">
                    <h3 className="text-text text-xl font-medium leading-snug">
                      {paper.title}
                    </h3>
                    <p className="text-muted text-xs font-mono mt-2">
                      {paper.citation}
                    </p>
                    <p className="text-muted text-xs font-mono mt-1">
                      {paper.year}
                    </p>
                  </div>

                  <div className="flex-1">
                    <p className="text-muted text-base leading-relaxed">
                      Co-authored, published in the {paper.journal}.
                    </p>
                    <a
                      href={paper.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block text-sm text-accent hover:text-accent-light transition-colors underline underline-offset-4 decoration-accent/30 mt-4 outline-none focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-4 rounded-sm"
                    >
                      read the paper
                    </a>
                  </div>

                  <div className="relative h-24 w-32 shrink-0 overflow-hidden border border-text/10">
                    <object
                      data={paper.url}
                      type="application/pdf"
                      className="w-full h-full pointer-events-none"
                      aria-label={paper.title}
                    >
                      <a
                        href={paper.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full h-full flex items-center justify-center text-muted text-xs font-mono"
                      >
                        pdf
                      </a>
                    </object>
                  </div>
                </div>
              </FadeIn>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
