import { projects } from "@/lib/data";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <section id="projects" className="section-padding band-dark">
      <div className="container-max">
        <div className="mb-12 md:mb-16">
          <p className="font-mono text-xs uppercase tracking-wider text-base/40 mb-3">
            Selected Work
          </p>
          <h2 className="font-heading text-3xl md:text-4xl font-semibold tracking-tight">
            Featured Projects
          </h2>
          <p className="mt-3 text-base md:text-lg text-base/50 max-w-xl">
            Real analyses, not tutorials — each one links straight to the code.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
