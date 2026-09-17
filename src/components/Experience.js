import Container from "@/components/Container";
import FadeIn from "@/components/FadeIn";
import { experience } from "@/data/experience";

export default function Experience() {
  return (
    <section id="experience" className="py-24">
      <Container>
        <FadeIn>
          <h2 className="text-text text-4xl md:text-5xl font-medium">
            Experience
          </h2>
          <p className="text-muted text-lg mt-4 max-w-xl">
            Nonprofit leadership, teaching, and service work alongside
            school.
          </p>
        </FadeIn>

        <div className="mt-14 border-t border-white/10">
          {experience.map((job) => (
            <div
              key={`${job.org}-${job.role}`}
              className="border-b border-white/10 py-10 transition-colors hover:bg-white/2"
            >
              <div className="flex flex-col md:flex-row md:justify-between gap-6">
                <div className="md:w-64 shrink-0">
                  <h3 className="text-text text-xl font-medium">
                    {job.role}
                  </h3>
                  <p className="text-muted text-sm mt-1">{job.org}</p>
                  <p className="text-muted text-xs font-mono mt-2">
                    {job.dateRange}
                  </p>
                  <p className="text-muted text-xs font-mono mt-1">
                    {job.location}
                  </p>
                </div>

                {job.description && (
                  <div className="flex-1">
                    <p className="text-muted text-base leading-relaxed max-w-xl">
                      {job.description}
                    </p>
                    {job.skills.length > 0 && (
                      <p className="text-muted text-xs font-mono mt-3">
                        {job.skills.join(", ")}
                      </p>
                    )}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
