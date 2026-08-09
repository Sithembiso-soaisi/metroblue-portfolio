import React from "react";

const ClientSuccessStories: React.FC = () => {
  const successStories = [
    {
      client: "Growing Enterprise",
      industry: "Business Services",
      title: "Building a More Connected Business",
      description:
        "MetroBlue helped modernize the client's digital operations, creating a more connected experience for employees and customers.",
      impact: "More efficient digital operations",
    },
    {
      client: "Financial Services Partner",
      industry: "Financial Services",
      title: "Turning Data Into Better Decisions",
      description:
        "A data and analytics solution gave the client clearer visibility into performance and enabled teams to make faster, more informed decisions.",
      impact: "Faster, data-driven decision making",
    },
    {
      client: "Technology Organization",
      industry: "Technology",
      title: "Preparing for Scalable Growth",
      description:
        "MetroBlue designed a scalable cloud architecture that provided the flexibility and reliability needed to support the client's future growth.",
      impact: "A stronger foundation for growth",
    },
  ];

  return (
    <main className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <section className="bg-[#0B1F3A] px-6 py-20 text-white">
        <div className="mx-auto max-w-6xl">
          <p className="mb-4 font-semibold uppercase tracking-wider text-[#00BCD4]">
            Client Impact
          </p>

          <h1 className="max-w-3xl text-4xl font-bold md:text-5xl">
            Client Success Stories
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            Our partnerships are built around real outcomes. Discover how
            MetroBlue helps organizations use technology to improve,
            transform, and grow.
          </p>
        </div>
      </section>

      {/* Success Stories */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-[#0B1F3A]">
              Stories of Impact
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-slate-600">
              From digital transformation to cloud and data solutions, our
              work is focused on creating lasting value for our clients.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            {successStories.map((story) => (
              <article
                key={story.title}
                className="group flex flex-col overflow-hidden rounded-xl bg-white shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="flex h-32 items-center bg-[#0F4C81] px-8">
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-wide text-[#00BCD4]">
                      {story.industry}
                    </p>

                    <h3 className="mt-2 text-xl font-bold text-white">
                      {story.client}
                    </h3>
                  </div>
                </div>

                <div className="flex flex-1 flex-col p-8">
                  <h4 className="text-xl font-bold text-[#0B1F3A]">
                    {story.title}
                  </h4>

                  <p className="mt-4 flex-1 leading-7 text-slate-600">
                    {story.description}
                  </p>

                  <div className="mt-6 border-t border-slate-200 pt-5">
                    <p className="text-sm font-semibold uppercase tracking-wide text-[#00BCD4]">
                      Impact
                    </p>

                    <p className="mt-2 font-semibold text-[#0F4C81]">
                      {story.impact}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-white px-6 py-16">
        <div className="mx-auto max-w-5xl">
          <div className="grid gap-8 text-center sm:grid-cols-3">
            <div>
              <p className="text-4xl font-bold text-[#0F4C81]">3+</p>
              <p className="mt-2 text-slate-600">Solution Areas</p>
            </div>

            <div>
              <p className="text-4xl font-bold text-[#0F4C81]">100%</p>
              <p className="mt-2 text-slate-600">Client Focused</p>
            </div>

            <div>
              <p className="text-4xl font-bold text-[#0F4C81]">1</p>
              <p className="mt-2 text-slate-600">Shared Goal: Impact</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#E6F7FB] px-6 py-16">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-[#0B1F3A]">
            Let's create your success story
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-slate-600">
            Whether you're modernizing your systems, moving to the cloud, or
            looking for better insights, MetroBlue is ready to help.
          </p>

          <a
            href="/contact"
            className="mt-8 inline-block rounded-lg bg-[#0F4C81] px-6 py-3 font-semibold text-white transition hover:bg-[#0B1F3A]"
          >
            Talk to MetroBlue
          </a>
        </div>
      </section>
    </main>
  );
};

export default ClientSuccessStories;