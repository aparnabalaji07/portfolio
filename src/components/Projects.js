import Link from "next/link";
import Container from "@/components/Container";
import FadeIn from "@/components/FadeIn";
import ClickableImage from "@/components/ClickableImage";
import { projects } from "@/data/projects";

const statusDot = {
  live: "bg-[#aee8ab]",
  "in progress": "bg-amber-300",
};

function kindLine(project) {
  if (project.kind === "data") {
    return "walk-forward backtest, no look-ahead";
  }
  return null;
}

export default function Projects() {
  return (
    <section id="projects" className="py-24">
      <Container>
        <FadeIn>
          <h2 className="text-text text-4xl md:text-5xl font-medium">
            What I have been building
          </h2>
          <p className="text-muted text-lg mt-4 max-w-xl">
            These are my projects, that span from trading systems, embedded
            systems, and web applications. Click on a project to learn more
            about what I did!
          </p>
        </FadeIn>

        <div className="mt-14 border-t border-text/10">
          {projects.map((project) => (
            <div
              key={project.slug}
              className="relative border-b border-text/10 py-10 before:content-[''] before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-accent before:opacity-0 before:transition-opacity hover:before:opacity-100 after:content-[''] after:absolute after:inset-x-0 after:bottom-0 after:h-px after:bg-accent after:opacity-0 after:transition-opacity hover:after:opacity-100"
            >
              <FadeIn>
                <div className="flex flex-col md:flex-row md:justify-between gap-6">
                  <div className="md:w-64 shrink-0">
                    <h3 className="text-text text-xl font-medium">
                      <Link
                        href={`/projects/${project.slug}`}
                        className="hover:text-accent transition-colors outline-none focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-4 rounded-sm"
                      >
                        {project.title}
                      </Link>
                    </h3>
                    <div className="flex items-center gap-2 mt-2">
                      <span
                        className={`h-1.5 w-1.5 rounded-full ${statusDot[project.status]}`}
                      />
                      <span className="text-muted text-xs font-mono">
                        {project.status}
                      </span>
                    </div>
                    <p className="text-muted text-xs font-mono mt-1">
                      {project.dateRange}
                    </p>
                  </div>

                  <div className="flex-1">
                    <p className="text-muted text-base leading-relaxed">
                      {project.description}
                    </p>
                    {kindLine(project) && (
                      <p className="text-accent-light text-xs font-mono mt-3">
                        {kindLine(project)}
                      </p>
                    )}
                    <p className="text-muted text-xs font-mono mt-3">
                      {project.tech.join(", ")}
                    </p>
                    {(project.demo || project.github) && (
                      <div className="flex gap-6 mt-4">
                        {project.demo && (
                          <a
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm text-accent hover:text-accent-light transition-colors underline underline-offset-4 decoration-accent/30 outline-none focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-4 rounded-sm"
                          >
                            live demo
                          </a>
                        )}
                        {project.github && (
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm text-muted hover:text-text transition-colors underline underline-offset-4 decoration-text/20 outline-none focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-4 rounded-sm"
                          >
                            github
                          </a>
                        )}
                      </div>
                    )}
                  </div>

                  {project.thumbnail && (
                    <div className="relative h-24 w-32 shrink-0 overflow-hidden">
                      <ClickableImage
                        src={project.thumbnail.src}
                        alt={project.thumbnail.alt}
                        fill
                        sizes="128px"
                        imgClassName="object-cover transition-transform duration-300 hover:scale-105"
                      />
                    </div>
                  )}
                </div>
              </FadeIn>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
