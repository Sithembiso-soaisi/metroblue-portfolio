import { useState } from "react";
import type { Project, ProjectFilter } from "../types/portfolio";
import { projects } from "../data/portfolioData";

const filters: ProjectFilter[] = ["All", "FinTech", "Education", "Healthcare", "Enterprise"];

function Projects() {
  const [activeFilter, setActiveFilter] = useState<ProjectFilter>("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const visibleProjects = activeFilter === "All"
    ? projects
    : projects.filter((project) => project.industry === activeFilter);

  return (
    <main className="bg-slate-950 text-white">
      <section className="bg-gradient-to-br from-blue-950 via-slate-950 to-cyan-950 px-6 py-20">
        <div className="mx-auto max-w-6xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">Our Work</p>
          <h1 className="text-4xl font-bold sm:text-5xl">Technology that delivers measurable impact</h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            Explore how MetroBlue helps organisations solve real problems with thoughtful, reliable digital products.
          </p>
        </div>
      </section>

      <section className="px-6 py-16 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-wrap justify-center gap-3">
            {filters.map((filter) => (
              <button
                key={filter}
                type="button"
                onClick={() => setActiveFilter(filter)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                  activeFilter === filter
                    ? "bg-cyan-400 text-slate-950"
                    : "border border-slate-700 text-slate-300 hover:border-cyan-400 hover:text-cyan-300"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {visibleProjects.map((project) => (
              <article key={project.id} className="rounded-xl border border-slate-800 bg-slate-900 p-5">
                <p className="text-sm font-semibold uppercase tracking-wider text-cyan-400">{project.industry}</p>
                <h2 className="mt-2 text-xl font-bold">{project.title}</h2>
                <p className="mt-3 text-sm leading-6 text-slate-300">{project.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.technologies.map((technology) => (
                    <span key={technology} className="rounded-full bg-slate-800 px-3 py-1 text-xs text-slate-200">{technology}</span>
                  ))}
                </div>
                <button
                  type="button"
                  onClick={() => setSelectedProject(project)}
                  className="mt-5 text-sm font-semibold text-cyan-400 transition hover:text-cyan-300"
                >
                  View project details →
                </button>
              </article>
            ))}
          </div>
        </div>
      </section>

      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 p-4"
          role="presentation"
          onClick={() => setSelectedProject(null)}
        >
          <section
            className="relative max-h-[85vh] w-full max-w-2xl overflow-y-auto rounded-2xl border border-slate-700 bg-slate-900 p-6 shadow-2xl sm:p-8"
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-modal-title"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setSelectedProject(null)}
              className="absolute right-5 top-5 rounded-md px-3 py-1 text-slate-300 hover:bg-slate-800 hover:text-white"
              aria-label="Close project details"
            >
              ×
            </button>
            <p className="text-sm font-semibold uppercase tracking-wider text-cyan-400">{selectedProject.industry}</p>
            <h2 id="project-modal-title" className="mt-3 pr-10 text-3xl font-bold">{selectedProject.title}</h2>

            <div className="mt-6 grid gap-6 sm:grid-cols-2">
              <section>
                <h3 className="text-lg font-bold text-cyan-400">The challenge</h3>
                <p className="mt-3 leading-7 text-slate-300">{selectedProject.challenge}</p>
              </section>
              <section>
                <h3 className="text-lg font-bold text-cyan-400">MetroBlue's approach</h3>
                <p className="mt-3 leading-7 text-slate-300">{selectedProject.solution}</p>
              </section>
            </div>

            <h3 className="mt-8 text-lg font-bold">Technologies used</h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {selectedProject.technologies.map((technology) => (
                <span key={technology} className="rounded-full bg-cyan-400/10 px-3 py-1 text-sm text-cyan-300">{technology}</span>
              ))}
            </div>

            <h3 className="mt-8 text-lg font-bold">Project outcomes</h3>
            <ul className="mt-3 space-y-2 text-slate-300">
              {selectedProject.results.map((result) => <li key={result}>✓ {result}</li>)}
            </ul>
          </section>
        </div>
      )}
    </main>
  );
}

export default Projects;
