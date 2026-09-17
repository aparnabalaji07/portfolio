import ClickableImage from "@/components/ClickableImage";

function DataBody({ detail }) {
  return (
    <dl className="mt-10 border-t border-text/10 font-mono text-sm max-w-2xl">
      {detail.mechanics.map((m) => (
        <div
          key={m.term}
          className="grid grid-cols-1 md:grid-cols-[9rem_1fr] gap-1 md:gap-6 border-b border-text/10 py-4"
        >
          <dt className="text-accent-light">{m.term}</dt>
          <dd className="text-muted leading-relaxed">{m.detail}</dd>
        </div>
      ))}
    </dl>
  );
}

function HardwareBody({ detail }) {
  return (
    <>
      <div className="mt-10 grid grid-cols-2 border-t border-l border-text/10 max-w-2xl">
        {detail.specs.map((s) => (
          <div key={s.label} className="border-r border-b border-text/10 p-5">
            <p className="text-muted text-xs font-mono">{s.label}</p>
            <p className="text-text font-mono text-lg mt-1">{s.value}</p>
          </div>
        ))}
      </div>
      <p className="text-muted leading-relaxed mt-8 max-w-2xl">{detail.note}</p>

      {detail.buildPhotos && (
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl">
          {detail.buildPhotos.map((photo) => (
            <div key={photo.src} className="relative aspect-4/3 overflow-hidden">
              <ClickableImage
                src={photo.src}
                alt={photo.alt}
                fill
                sizes="(min-width: 640px) 20rem, 100vw"
                imgClassName="object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
          ))}
        </div>
      )}

      {detail.cameraRoll && (
        <div className="mt-10 max-w-2xl">
          <p className="text-muted text-sm">
            Photos actually taken by the camera, in order.
          </p>
          <div className="mt-4 flex flex-col sm:flex-row gap-4">
            {detail.cameraRoll.map((shot) => (
              <div key={shot.src} className="flex-1">
                <div className="relative aspect-square overflow-hidden">
                  <ClickableImage
                    src={shot.src}
                    alt={shot.caption}
                    fill
                    sizes="(min-width: 640px) 13rem, 33vw"
                    imgClassName="object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <p className="text-muted text-xs font-mono mt-2">
                  {shot.caption}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
}

function StepsBody({ detail }) {
  return (
    <>
      {detail.screenshot && (
        <ClickableImage
          src={detail.screenshot.src}
          alt={detail.screenshot.alt}
          sizes="(min-width: 640px) 42rem, 100vw"
          wrapperClassName="w-full max-w-2xl mt-10"
          imgClassName="w-full h-auto border border-text/10"
        />
      )}
      <div className="mt-10 flex flex-col md:flex-row md:items-start gap-8 md:gap-0 max-w-2xl">
        {detail.steps.map((step, i) => (
          <div
            key={step.label}
            className={`flex-1 md:px-6 first:md:pl-0 ${
              i > 0 ? "md:border-l md:border-text/10" : ""
            }`}
          >
            <p className="font-mono text-accent text-xs">
              {String(i + 1).padStart(2, "0")}
            </p>
            <p className="text-text font-medium mt-2">{step.label}</p>
            <p className="text-muted text-sm mt-2 leading-relaxed">
              {step.detail}
            </p>
          </div>
        ))}
      </div>
    </>
  );
}

function EditorialBody({ detail }) {
  return (
    <>
      {detail.screenshot && (
        <ClickableImage
          src={detail.screenshot.src}
          alt={detail.screenshot.alt}
          sizes="(min-width: 640px) 42rem, 100vw"
          wrapperClassName="w-full max-w-2xl mt-10"
          imgClassName="w-full h-auto border border-text/10"
        />
      )}
      <p className="text-muted leading-relaxed mt-8 max-w-2xl">{detail.role}</p>
      <p className="text-text border-l-2 border-accent pl-4 mt-6 max-w-xl">
        {detail.outcome}
      </p>
    </>
  );
}

export default function ProjectBody({ project }) {
  const { detail } = project;

  if (project.kind === "data") return <DataBody detail={detail} />;
  if (project.kind === "hardware") return <HardwareBody detail={detail} />;
  if (detail.steps) return <StepsBody detail={detail} />;
  return <EditorialBody detail={detail} />;
}
