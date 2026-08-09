import { useState } from "react";
import type { Project, ProjectFilter } from "../types/portfolio";
import { projects } from "../data/portfolioData";

const filters: ProjectFilter[] = [
  "All",
  "FinTech",
  "Education",
  "Healthcare",
  "Enterprise",
];

function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const visibleProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((project) => project.industry === activeFilter);

  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section className="bg-[#0B1F3A] px-6 py-20 text-white">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="font-semibold uppercase tracking-[0.2em] text-[#00BCD4]">
              Our Work
            </p>

            <h1 className="mt-3 text-4xl font-bold leading-tight md:text-5xl">
              Technology that delivers measurable impact
            </h1>

            <p className="mt-6 text-lg leading-8 text-slate-300">
              Explore how MetroBlue helps organisations solve real problems
              with thoughtful, reliable digital products.
            </p>
          </div>

          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {filters.map((filter) => (
              <button
                key={filter}
                type="button"
                onClick={() => setActiveFilter(filter)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                  activeFilter === filter
                    ? "bg-[#00BCD4] text-[#0B1F3A]"
                    : "border border-[#0F4C81] text-slate-300 hover:border-[#00BCD4] hover:text-[#00BCD4]"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="bg-white px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 max-w-2xl">
            <p className="font-semibold uppercase tracking-[0.2em] text-[#0F4C81]">
              Featured Projects
            </p>

            <h2 className="mt-3 text-3xl font-bold text-[#0B1F3A] md:text-4xl">
              Solutions built around real business needs.
            </h2>

            <p className="mt-4 leading-7 text-slate-600">
              Discover some of the digital solutions and technology projects
              delivered by MetroBlue.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {visibleProjects.map((project) => (
              <article
                key={project.id}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-[#00BCD4]/50 hover:shadow-lg"
              >
                <p className="text-sm font-semibold uppercase tracking-wider text-[#0F4C81]">
                  {project.industry}
                </p>

                <h2 className="mt-2 text-xl font-bold text-[#0B1F3A]">
                  {project.title}
                </h2>

                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {project.description}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {project.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-full bg-[#E6F7FB] px-3 py-1 text-xs font-medium text-[#0F4C81]"
                    >
                      {technology}
                    </span>
                  ))}
                </div>

                <button
                  type="button"
                  onClick={() => setSelectedProject(project)}
                  className="mt-5 text-sm font-semibold text-[#0F4C81] transition hover:text-[#00BCD4]"
                >
                  View project details →
                </button>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#E6F7FB] px-6 py-16">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 text-center md:flex-row md:text-left">
          <div>
            <h2 className="text-3xl font-bold text-[#0B1F3A]">
              Have a project in mind?
            </h2>

            <p className="mt-2 text-slate-600">
              Let's turn your next idea into a technology solution.
            </p>
          </div>

          <a
            href="/contact"
            className="rounded-lg bg-[#0F4C81] px-7 py-3 font-semibold text-white transition hover:bg-[#0B1F3A]"
          >
            Start a Conversation
          </a>
        </div>
      </section>

      {/* Project Details Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#0B1F3A]/90 p-4"
          role="presentation"
          onClick={() => setSelectedProject(null)}
        >
          <section
            className="relative max-h-[85vh] w-full max-w-2xl overflow-y-auto rounded-2xl border border-[#0F4C81] bg-white p-6 shadow-2xl sm:p-8"
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-modal-title"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setSelectedProject(null)}
              className="absolute right-5 top-5 rounded-md px-3 py-1 text-slate-500 transition hover:bg-[#E6F7FB] hover:text-[#0B1F3A]"
              aria-label="Close project details"
            >
              ×
            </button>

            <p className="text-sm font-semibold uppercase tracking-wider text-[#0F4C81]">
              {selectedProject.industry}
            </p>

            <h2
              id="project-modal-title"
              className="mt-3 pr-10 text-3xl font-bold text-[#0B1F3A]"
            >
              {selectedProject.title}
            </h2>

            <div className="mt-6 grid gap-6 sm:grid-cols-2">
              <section>
                <h3 className="text-lg font-bold text-[#0F4C81]">
                  The challenge
                </h3>

                <p className="mt-3 leading-7 text-slate-600">
                  {selectedProject.challenge}
                </p>
              </section>

              <section>
                <h3 className="text-lg font-bold text-[#0F4C81]">
                  MetroBlue's approach
                </h3>

                <p className="mt-3 leading-7 text-slate-600">
                  {selectedProject.solution}
                </p>
              </section>
            </div>

            <h3 className="mt-8 text-lg font-bold text-[#0B1F3A]">
              Technologies used
            </h3>

            <div className="mt-3 flex flex-wrap gap-2">
              {selectedProject.technologies.map((technology) => (
                <span
                  key={technology}
                  className="rounded-full bg-[#E6F7FB] px-3 py-1 text-sm text-[#0F4C81]"
                >
                  {technology}
                </span>
              ))}
            </div>

            <h3 className="mt-8 text-lg font-bold text-[#0B1F3A]">
              Project outcomes
            </h3>

            <ul className="mt-3 space-y-2 text-slate-600">
              {selectedProject.results.map((result) => (
                <li key={result}>✓ {result}</li>
              ))}
            </ul>
          </section>
        </div>
      )}
    </main>
  );
}

export default Projects;