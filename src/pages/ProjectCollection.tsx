import { Link } from "react-router-dom";
import { projects } from "../data/portfolioData";

type ProjectCollectionProps = {
  view: "case-studies" | "success-stories";
};

function ProjectCollection({ view }: ProjectCollectionProps) {
  const isCaseStudies = view === "case-studies";
  const pageTitle = isCaseStudies ? "Project Case Studies" : "Client Success Stories";
  const intro = isCaseStudies
    ? "A closer look at the challenges, solutions, and outcomes behind selected MetroBlue engagements."
    : "The results our clients achieve when practical technology is aligned with their goals.";
  const selectedProjects = isCaseStudies ? projects.filter((project) => project.featured) : projects;

  return (
    <main className="bg-slate-950 text-white">
      <section className="bg-gradient-to-br from-blue-950 via-slate-950 to-cyan-950 px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <Link to="/projects" className="text-sm font-medium text-cyan-400 hover:text-cyan-300">← All Projects</Link>
          <p className="mt-8 text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">Our Work</p>
          <h1 className="mt-3 text-4xl font-bold sm:text-5xl">{pageTitle}</h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">{intro}</p>
        </div>
      </section>

      <section className="px-6 py-16 sm:py-24">
        <div className="mx-auto max-w-6xl space-y-8">
          {selectedProjects.map((project) => (
            <article key={project.id} className="rounded-2xl border border-slate-800 bg-slate-900 p-7 sm:p-10">
              <p className="text-sm font-semibold uppercase tracking-wider text-cyan-400">{project.industry}</p>
              <h2 className="mt-3 text-3xl font-bold">{project.title}</h2>
              <p className="mt-4 max-w-3xl leading-7 text-slate-300">{project.description}</p>

              <div className="mt-8 grid gap-8 md:grid-cols-2">
                <section>
                  <h3 className="text-lg font-bold">{isCaseStudies ? "Solution focus" : "Impact for the client"}</h3>
                  <p className="mt-3 leading-7 text-slate-300">
                    {isCaseStudies
                      ? `MetroBlue combined ${project.technologies.join(", ")} to create a solution aligned with the project's operational needs.`
                      : "The engagement delivered clearer processes, stronger visibility, and a digital foundation for continued growth."}
                  </p>
                </section>
                <section>
                  <h3 className="text-lg font-bold">Measured outcomes</h3>
                  <ul className="mt-3 space-y-2 text-slate-300">
                    {project.results.map((result) => <li key={result}>✓ {result}</li>)}
                  </ul>
                </section>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

export default ProjectCollection;
