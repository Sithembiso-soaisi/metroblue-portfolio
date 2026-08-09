import React from "react";

const CaseStudies: React.FC = () => {
  const caseStudies = [
    {
      title: "Digital Transformation Platform",
      category: "Digital Transformation",
      description:
        "A modern digital platform designed to streamline business operations, improve customer experiences, and provide teams with better access to critical information.",
      results: [
        "Improved operational efficiency",
        "Simplified customer interactions",
        "Centralized business information",
      ],
    },
    {
      title: "Cloud Infrastructure Modernization",
      category: "Cloud Architecture",
      description:
        "A scalable cloud solution designed to help an organization modernize its infrastructure while improving reliability, flexibility, and long-term performance.",
      results: [
        "Scalable cloud infrastructure",
        "Improved system reliability",
        "Reduced infrastructure complexity",
      ],
    },
    {
      title: "Data & Analytics Solution",
      category: "AI & Data Analytics",
      description:
        "A data-driven solution that transforms complex information into meaningful insights, helping decision-makers understand trends and make informed choices.",
      results: [
        "Faster access to insights",
        "Improved decision-making",
        "Better visibility into performance",
      ],
    },
  ];

  return (
    <main className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <section className="bg-[#0B1F3A] px-6 py-20 text-white">
        <div className="mx-auto max-w-6xl">
          <p className="mb-4 font-semibold uppercase tracking-wider text-[#00BCD4]">
            Our Work
          </p>

          <h1 className="max-w-3xl text-4xl font-bold md:text-5xl">
            Case Studies
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            Explore how MetroBlue combines technology, strategy, and
            innovation to solve complex business challenges and deliver
            meaningful results.
          </p>
        </div>
      </section>

      {/* Case Studies */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-[#0B1F3A]">
              Featured Case Studies
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-slate-600">
              Take a closer look at the challenges, solutions, and outcomes
              behind some of the work delivered by MetroBlue.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {caseStudies.map((study) => (
              <article
                key={study.title}
                className="flex flex-col overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="h-2 bg-[#00BCD4]" />

                <div className="flex flex-1 flex-col p-8">
                  <span className="mb-4 w-fit rounded-full bg-[#E6F7FB] px-3 py-1 text-sm font-semibold text-[#0F4C81]">
                    {study.category}
                  </span>

                  <h3 className="text-2xl font-bold text-[#0B1F3A]">
                    {study.title}
                  </h3>

                  <p className="mt-4 leading-7 text-slate-600">
                    {study.description}
                  </p>

                  <div className="mt-6">
                    <h4 className="font-semibold text-[#0F4C81]">
                      Key Outcomes
                    </h4>

                    <ul className="mt-3 space-y-2">
                      {study.results.map((result) => (
                        <li
                          key={result}
                          className="flex items-start gap-2 text-sm text-slate-600"
                        >
                          <span className="mt-1 text-[#00BCD4]">✓</span>
                          <span>{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#E6F7FB] px-6 py-16">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-[#0B1F3A]">
            Have a challenge we can solve?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-slate-600">
            Let's discuss how MetroBlue can help turn your technology
            challenges into opportunities.
          </p>

          <a
            href="/contact"
            className="mt-8 inline-block rounded-lg bg-[#0F4C81] px-6 py-3 font-semibold text-white transition hover:bg-[#0B1F3A]"
          >
            Start a Conversation
          </a>
        </div>
      </section>
    </main>
  );
};

export default CaseStudies;