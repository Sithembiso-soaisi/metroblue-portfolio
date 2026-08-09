import { services } from "../data/portfolioData";

function Services() {
  return (
    <main className="bg-slate-950 text-white">
      <section className="bg-gradient-to-br from-blue-950 via-slate-950 to-cyan-950 px-6 py-20">
        <div className="mx-auto max-w-6xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
            Our Solutions
          </p>

          <h1 className="text-4xl font-bold sm:text-5xl">
            Technology that moves your business forward
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            MetroBlue designs intelligent, secure, and scalable digital solutions
            for ambitious organisations.
          </p>
        </div>
      </section>

      <section className="px-6 py-16 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <article
                key={service.id}
                className="rounded-2xl border border-slate-800 bg-slate-900 p-7 transition duration-300 hover:-translate-y-2 hover:border-cyan-400 hover:shadow-xl hover:shadow-cyan-950/40"
              >
                <span className="text-4xl" aria-hidden="true">
                  {service.icon}
                </span>

                <h2 className="mt-6 text-2xl font-bold">{service.title}</h2>

                <p className="mt-4 leading-7 text-slate-300">
                  {service.description}
                </p>

                <ul className="mt-6 space-y-3 border-t border-slate-800 pt-6">
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-3 text-sm text-slate-200"
                    >
                      <span className="text-cyan-400">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

export default Services;
