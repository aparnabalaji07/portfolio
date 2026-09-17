import Link from "next/link";
import { notFound } from "next/navigation";
import Container from "@/components/Container";
import ProjectBody from "@/components/ProjectBody";
import { projects } from "@/data/projects";

const statusDot = {
  live: "bg-[#aee8ab]",
  "in progress": "bg-amber-300",
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};
  return {
    title: `${project.title} — Aparna Balaji`,
    description: project.description,
  };
}

export default async function ProjectPage({ params }) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  const isProduct = Boolean(project.detail.steps);

  return (
    <section className="py-24">
      <Container>
        <Link
          href="/#projects"
          className="text-muted text-sm hover:text-accent transition-colors"
        >
          ← back to projects
        </Link>

        <h1 className="text-text text-4xl md:text-6xl font-medium mt-6 max-w-3xl">
          {project.title}
        </h1>

        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 mt-5">
          <div className="flex items-center gap-2">
            <span
              className={`h-1.5 w-1.5 rounded-full ${statusDot[project.status]}`}
            />
            <span className="text-muted text-xs font-mono">
              {project.status}
            </span>
          </div>
          <span className="text-muted text-xs font-mono">
            {project.dateRange}
          </span>
          <span className="text-muted text-xs font-mono">
            {project.tech.join(", ")}
          </span>
        </div>

        <p className="text-muted text-lg mt-8 max-w-2xl leading-relaxed">
          {project.detail.intro}
        </p>

        <ProjectBody project={project} />

        {(project.demo || project.github) && (
          <div className="flex flex-wrap items-center gap-6 mt-12">
            {project.demo &&
              (isProduct ? (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-accent text-bg px-6 py-3 rounded-lg font-medium hover:opacity-90 transition-opacity"
                >
                  visit the live site
                </a>
              ) : (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-accent hover:text-accent-light transition-colors underline underline-offset-4 decoration-accent/30"
                >
                  live demo
                </a>
              ))}
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted hover:text-text transition-colors underline underline-offset-4 decoration-white/20"
              >
                github
              </a>
            )}
          </div>
        )}
      </Container>
    </section>
  );
}
