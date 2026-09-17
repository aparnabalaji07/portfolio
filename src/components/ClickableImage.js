"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function ClickableImage({
  src,
  alt,
  fill = false,
  sizes,
  wrapperClassName = "",
  imgClassName = "",
}) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label={`Expand image: ${alt}`}
        className={`cursor-zoom-in outline-none focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2 ${
          fill ? "relative block w-full h-full" : "block"
        } ${wrapperClassName}`}
      >
        {fill ? (
          <Image src={src} alt={alt} fill sizes={sizes} className={imgClassName} />
        ) : (
          <Image
            src={src}
            alt={alt}
            width={0}
            height={0}
            sizes={sizes}
            className={imgClassName}
          />
        )}
      </button>

      {open && (
        <div
          className="fixed inset-0 z-[100] bg-bg/95 backdrop-blur-sm flex items-center justify-center p-6"
          onClick={() => setOpen(false)}
        >
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Close"
            className="absolute top-6 right-6 text-text text-3xl hover:text-accent transition-colors outline-none focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2 rounded-sm"
          >
            ✕
          </button>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={src}
            alt={alt}
            className="max-h-[90vh] max-w-[90vw] object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </>
  );
}
