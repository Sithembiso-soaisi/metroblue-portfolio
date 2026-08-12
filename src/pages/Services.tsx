import { Link } from "react-router-dom";
import { services } from "../data/portfolioData";

function Services() {
  return (
    <main>
      {/* Hero Section */}
      <section className="bg-white px-6 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl text-center">
          <p className="font-semibold uppercase tracking-[0.2em] text-[#00BCD4]">
            Our Solutions
          </p>

          <h1 className="mx-auto mt-4 max-w-4xl text-4xl font-bold leading-tight text-slate-900 md:text-6xl">
            Technology that moves your business forward.
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            MetroBlue designs intelligent, secure, and scalable digital
            solutions for ambitious organisations.
          </p>
        </div>
      </section>

      {/* Services Overview */}
      <section className="bg-white px-6 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <p className="font-semibold uppercase tracking-[0.2em] text-[#0F4C81]">
              What We Offer
            </p>

            <h2 className="mt-3 text-3xl font-bold text-[#0B1F3A] md:text-4xl">
              Solutions built around your business.
            </h2>

            <p className="mt-4 leading-7 text-slate-600">
              From software engineering to cloud architecture and data
              intelligence, MetroBlue delivers practical technology solutions
              designed around real business challenges.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <Link
                key={service.id}
                to={`/services/${service.id}`}
                className="group rounded-2xl border border-slate-200 bg-white p-8 transition duration-300 hover:-translate-y-2 hover:border-[#00BCD4] hover:shadow-xl"
              >
                <div
                  className="text-4xl text-[#00BCD4]"
                  aria-hidden="true"
                >
                  {service.icon}
                </div>

                <h3 className="mt-6 text-2xl font-bold text-[#0B1F3A] group-hover:text-[#0F4C81]">
                  {service.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  {service.description}
                </p>

                <ul className="mt-6 space-y-3 border-t border-slate-200 pt-6">
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-3 text-sm text-slate-600"
                    >
                      <span className="mt-0.5 font-bold text-[#00BCD4]">
                        ✓
                      </span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-7 font-semibold text-[#0F4C81] transition group-hover:text-[#00BCD4]">
                  Explore service →
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Call To Action */}
      <section className="bg-slate-50 px-6 py-16">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 text-center md:flex-row md:text-left">
          <div>
            <h2 className="text-3xl font-bold text-[#0B1F3A]">
              Ready to build something better?
            </h2>

            <p className="mt-2 text-slate-600">
              Let's turn your next idea into a technology solution.
            </p>
          </div>

          <Link
            to="/contact"
            className="rounded-lg bg-[#0F4C81] px-7 py-3 font-semibold text-slate-900 transition hover:bg-white"
          >
            Start a Conversation
          </Link>
        </div>
      </section>
    </main>
  );
}

export default Services;