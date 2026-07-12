import Link from "next/link";
import Container from "@/components/Container";
import FadeIn from "@/components/FadeIn";
import { projects } from "@/data/projects";

const statusStyles = {
  live: "bg-[#aee8ab]/[0.1] text-[#aee8ab] border border-[#aee8ab]/20",
  "in progress":
    "bg-amber-500/[0.07] text-amber-200 border border-amber-500/[0.12]",
  "coming soon": "bg-zinc-700/20 text-zinc-300 border border-zinc-700/40",
};


export default function Projects() {
  return (
    <section id="projects" className="py-24">
      <Container>
        <FadeIn>
          <p className="text-accent text-sm uppercase tracking-widest mb-4">
            projects
          </p>
        </FadeIn>
        <FadeIn delay={0.1}>
          <h2 className="text-text text-4xl md:text-5xl font-medium mb-12">
            Things I have built!
          </h2>
        </FadeIn>
        <div className="flex flex-col gap-6">
          {projects.map((project, i) => (
            <FadeIn key={project.title} delay={0.1 + i * 0.1}>
              <div className="border border-white/10 rounded-2xl p-6 md:p-8 bg-surface">
                <div className="flex items-start justify-between gap-4 flex-wrap mb-3">
                  <h3 className="text-text text-xl font-medium">
                    <Link
                      href={`/projects/${project.slug}`}
                      className="hover:text-accent transition-colors duration-200"
                    >
                      {project.title}
                    </Link>
                  </h3>
                  <span
                    className={`text-xs px-3 py-1 rounded-full font-medium ${statusStyles[project.status]}`}
                  >
                    {project.status}
                  </span>
                </div>
                <p className="text-muted text-base leading-relaxed mb-4">
                  {project.description}
                </p>
                <p className="text-sm text-accent-light mb-5">
                  {project.tech.join(" · ")}
                </p>
                <div className="flex gap-4 -ml-2">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-accent px-2 py-1 rounded-md transition-colors duration-200 hover:bg-accent/10 hover:text-white"
                    >
                      GitHub
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-accent px-2 py-1 rounded-md transition-colors duration-200 hover:bg-accent/10 hover:text-white"
                    >
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
