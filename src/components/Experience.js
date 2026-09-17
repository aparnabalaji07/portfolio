import Container from "@/components/Container";
import FadeIn from "@/components/FadeIn";
import ClickableImage from "@/components/ClickableImage";
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
                  <div className="flex items-center gap-2">
                    {job.dateRange.includes("present") && (
                      <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                    )}
                    <h3 className="text-text text-xl font-medium">
                      {job.role}
                    </h3>
                  </div>
                  <p className="text-accent-light text-sm mt-1">{job.org}</p>
                  <p className="text-muted text-xs font-mono mt-2">
                    {job.dateRange}
                  </p>
                  <p className="text-muted text-xs font-mono mt-1">
                    {job.location}
                  </p>
                </div>

                {job.description && (
                  <div className="flex-1">
                    {job.description.map((paragraph, i) => (
                      <p
                        key={i}
                        className={`text-muted text-base leading-relaxed ${
                          i > 0 ? "mt-4" : ""
                        }`}
                      >
                        {paragraph}
                      </p>
                    ))}
                    {job.skills.length > 0 && (
                      <p className="text-muted text-xs font-mono mt-4">
                        {job.skills.join(", ")}
                      </p>
                    )}
                    {job.images.length > 0 && (
                      <div className="flex flex-wrap gap-3 mt-5">
                        {job.images.map((image) => (
                          <div
                            key={image.src}
                            className="relative h-24 w-32 shrink-0 overflow-hidden"
                          >
                            <ClickableImage
                              src={image.src}
                              alt={image.alt}
                              fill
                              sizes="128px"
                              imgClassName="object-cover transition-transform duration-300 hover:scale-105"
                            />
                          </div>
                        ))}
                      </div>
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
