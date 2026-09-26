"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { X, Github, ExternalLink, Download, Check } from "lucide-react";
import type { Project } from "@/lib/data";

type Props = { project: Project | null; onClose: () => void };

export default function ProjectModal({ project, onClose }: Props) {
  const closeRef = useRef<HTMLButtonElement>(null);

  // Close on Escape, lock page scroll, and move focus into the dialog while it is open.
  useEffect(() => {
    if (!project) return;
    const previouslyFocused = document.activeElement as HTMLElement | null;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
      previouslyFocused?.focus();
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          key="overlay"
          className="fixed inset-0 z-[70] flex items-end sm:items-center justify-center p-0 sm:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={onClose} aria-hidden />

          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-modal-title"
            initial={{ opacity: 0, y: 40, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 40, scale: 0.98 }}
            transition={{ type: "spring", stiffness: 320, damping: 32 }}
            className="relative w-full sm:max-w-3xl max-h-[92vh] overflow-y-auto bg-navy-light text-base border border-white/10 rounded-t-card-lg sm:rounded-card-lg shadow-soft-lg"
          >
            {/* Header */}
            <div className="sticky top-0 z-10 flex items-start justify-between gap-4 bg-navy-light/95 backdrop-blur px-6 sm:px-8 pt-6 pb-4 border-b border-white/10">
              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <span className="inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-wider px-3 py-1 rounded-full bg-accent/15 text-accent-light">
                    {project.tag}
                  </span>
                  {project.categories.map((c) => (
                    <span key={c} className="font-mono text-[11px] uppercase tracking-wider text-base/45">
                      {c}
                    </span>
                  ))}
                  <span className="font-mono text-[11px] text-base/40">· {project.year}</span>
                </div>
                <h3 id="project-modal-title" className="mt-3 font-heading text-2xl sm:text-3xl font-semibold leading-tight">
                  {project.title}
                </h3>
              </div>
              <button
                ref={closeRef}
                onClick={onClose}
                aria-label="Close project details"
                className="shrink-0 w-10 h-10 rounded-full border border-white/15 flex items-center justify-center text-base/70 hover:bg-base hover:text-navy transition-colors focus-ring"
              >
                <X size={18} />
              </button>
            </div>

            <div className="px-6 sm:px-8 py-6 space-y-7">
              <p className="text-base/70 leading-relaxed">{project.description}</p>

              {project.metrics.length > 0 && (
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {project.metrics.map((m) => (
                    <div key={m.label} className="rounded-2xl bg-white/5 border border-white/10 p-4">
                      <p className="font-heading text-xl font-semibold">{m.value}</p>
                      <p className="mt-1 font-mono text-[10px] uppercase tracking-wide text-base/45">{m.label}</p>
                    </div>
                  ))}
                </div>
              )}

              {project.highlights.length > 0 && (
                <div>
                  <p className="font-mono text-xs uppercase tracking-wider text-base/40 mb-3">Key Results</p>
                  <ul className="space-y-2.5">
                    {project.highlights.map((h) => (
                      <li key={h} className="flex gap-3 text-sm text-base/80 leading-relaxed">
                        <Check size={16} className="text-accent-light shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {project.image && (
                <figure className="rounded-2xl overflow-hidden border border-white/10 bg-white">
                  <Image
                    src={project.image.src}
                    alt={project.image.alt}
                    width={project.image.width}
                    height={project.image.height}
                    className="w-full h-auto"
                  />
                  <figcaption className="px-4 py-2 text-xs text-navy/60 bg-white border-t border-navy/10">
                    {project.image.alt}
                  </figcaption>
                </figure>
              )}

              <div>
                <p className="font-mono text-xs uppercase tracking-wider text-base/40 mb-3">Tools</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span key={t} className="font-mono text-[11px] px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-base/70">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex flex-wrap gap-3 pt-2">
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-accent text-white text-sm font-semibold hover:bg-accent-dark transition-colors focus-ring"
                  >
                    <ExternalLink size={15} />
                    Live Demo
                  </a>
                )}
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-base text-navy text-sm font-semibold hover:bg-accent-tint transition-colors focus-ring"
                >
                  <Github size={15} />
                  View Code
                </a>
                {project.extraLinks?.map((l) => (
                  <a
                    key={l.href}
                    href={l.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/20 text-sm font-semibold hover:bg-white/10 transition-colors focus-ring"
                  >
                    <Download size={15} />
                    {l.label}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
