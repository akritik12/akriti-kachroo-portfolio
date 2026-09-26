"use client";

import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { projects, projectCategories, type Project, type ProjectCategory } from "@/lib/data";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";

export default function Projects() {
  const [filter, setFilter] = useState<ProjectCategory>("All");
  const [selected, setSelected] = useState<Project | null>(null);

  // Other sections (e.g. "See related projects" in Skills) can set the filter via a custom event.
  useEffect(() => {
    const onFilter = (e: Event) => {
      const value = (e as CustomEvent<string>).detail;
      if ((projectCategories as readonly string[]).includes(value)) {
        setFilter(value as ProjectCategory);
      }
    };
    window.addEventListener("project-filter", onFilter);
    return () => window.removeEventListener("project-filter", onFilter);
  }, []);

  const counts = useMemo(() => {
    const c: Record<string, number> = { All: projects.length };
    projects.forEach((p) => p.categories.forEach((cat) => (c[cat] = (c[cat] ?? 0) + 1)));
    return c;
  }, []);

  const visible = useMemo(
    () =>
      filter === "All"
        ? projects
        : projects.filter((p) => (p.categories as string[]).includes(filter)),
    [filter]
  );

  return (
    <section id="projects" className="section-padding band-dark">
      <div className="container-max">
        <div className="mb-10 md:mb-12">
          <p className="font-mono text-xs uppercase tracking-wider text-base/40 mb-3">
            Selected Work
          </p>
          <h2 className="font-heading text-3xl md:text-4xl font-semibold tracking-tight">
            Featured Projects
          </h2>
          <p className="mt-3 text-base md:text-lg text-base/50 max-w-xl">
            Real analyses, not tutorials. Click any project to see the key results.
          </p>
        </div>

        {/* Filter chips */}
        <div role="group" aria-label="Filter projects by area" className="flex flex-wrap gap-2 mb-10">
          {projectCategories.map((cat) => {
            const active = filter === cat;
            return (
              <button
                key={cat}
                type="button"
                aria-pressed={active}
                onClick={() => setFilter(cat)}
                className={`relative px-4 py-2 rounded-full text-sm font-medium transition-colors focus-ring ${
                  active ? "text-navy" : "text-base/70 hover:text-base border border-white/15"
                }`}
              >
                {active && (
                  <motion.span
                    layoutId="project-filter-pill"
                    className="absolute inset-0 rounded-full bg-base"
                    transition={{ type: "spring", stiffness: 400, damping: 32 }}
                  />
                )}
                <span className="relative z-10">
                  {cat}
                  <span className={`ml-1.5 font-mono text-xs ${active ? "text-navy/50" : "text-base/40"}`}>
                    {counts[cat] ?? 0}
                  </span>
                </span>
              </button>
            );
          })}
        </div>

        <motion.div layout className="grid sm:grid-cols-2 gap-6">
          <AnimatePresence mode="popLayout">
            {visible.map((project, i) => (
              <ProjectCard
                key={project.title}
                project={project}
                index={i}
                onOpen={() => setSelected(project)}
              />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      <ProjectModal project={selected} onClose={() => setSelected(null)} />
    </section>
  );
}
