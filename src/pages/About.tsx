function About() {
  const values = [
    {
      title: "Innovation",
      description:
        "We use practical technology and fresh thinking to solve meaningful business problems and create better digital experiences.",
    },
    {
      title: "Excellence",
      description:
        "We maintain high standards in design, engineering, delivery, and support to provide dependable technology solutions.",
    },
    {
      title: "Partnership",
      description:
        "We work closely with our clients to understand their goals, challenges, and opportunities and build solutions that create lasting value.",
    },
    {
      title: "Integrity",
      description:
        "We build trusted relationships through transparency, accountability, and responsible technology practices.",
    },
  ];

  const reasons = [
    "Business-focused technology solutions",
    "Scalable and secure digital platforms",
    "Experienced technical expertise",
    "Practical solutions designed around client needs",
    "Long-term partnership and continuous support",
    "Commitment to quality and innovation",
  ];

  return (
    <main className="bg-white text-slate-900">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-white via-white to-white px-6 py-20 sm:py-24">
        <div className="mx-auto max-w-6xl text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
            About MetroBlue
          </p>

          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Building technology that creates lasting business value
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            MetroBlue is a technology company focused on helping organisations
            solve complex business challenges through intelligent, secure, and
            scalable digital solutions.
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="px-6 py-16 sm:py-24">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
              Our Story
            </p>

            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              Technology built around real business needs
            </h2>

            <p className="mt-6 leading-8 text-slate-600">
              MetroBlue was established with a simple purpose: to help
              organisations use technology more effectively to solve real
              business problems. We combine technical expertise, strategic
              thinking, and practical delivery to create digital solutions that
              are useful, reliable, and built to last.
            </p>

            <p className="mt-5 leading-8 text-slate-600">
              From software engineering and cloud architecture to data
              analytics and intelligent technology solutions, our work focuses
              on helping organisations improve operations, serve their
              customers better, and prepare for sustainable growth.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-xl">
            <h3 className="text-2xl font-bold">Our Approach</h3>

            <p className="mt-4 leading-7 text-slate-600">
              We believe successful technology projects begin with
              understanding the problem before choosing the technology. Our
              approach is collaborative, practical, and focused on delivering
              solutions that can evolve with an organisation.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              <div className="rounded-xl border border-slate-200 bg-white p-4">
                <p className="text-2xl font-bold text-cyan-400">01</p>
                <p className="mt-2 text-sm font-medium">Understand</p>
              </div>

              <div className="rounded-xl border border-slate-200 bg-white p-4">
                <p className="text-2xl font-bold text-cyan-400">02</p>
                <p className="mt-2 text-sm font-medium">Build</p>
              </div>

              <div className="rounded-xl border border-slate-200 bg-white p-4">
                <p className="text-2xl font-bold text-cyan-400">03</p>
                <p className="mt-2 text-sm font-medium">Grow</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission and Vision */}
      <section className="border-y border-slate-200 bg-white px-6 py-16 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-6 md:grid-cols-2">
            <article className="rounded-2xl border border-slate-200 bg-white p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
                Our Mission
              </p>

              <h2 className="mt-3 text-3xl font-bold">
                Make technology practical and impactful
              </h2>

              <p className="mt-5 leading-8 text-slate-600">
                Our mission is to deliver secure, intelligent, and scalable
                technology solutions that help organisations improve
                performance, solve meaningful challenges, and create better
                experiences for their customers and teams.
              </p>
            </article>

            <article className="rounded-2xl border border-slate-200 bg-white p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
                Our Vision
              </p>

              <h2 className="mt-3 text-3xl font-bold">
                A future powered by better technology
              </h2>

              <p className="mt-5 leading-8 text-slate-600">
                Our vision is to become a trusted technology partner for
                organisations seeking to use digital innovation to build more
                efficient, connected, and sustainable businesses.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* Company Values */}
      <section className="px-6 py-16 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
              Our Values
            </p>

            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              Principles that guide our work
            </h2>

            <p className="mt-5 leading-8 text-slate-600">
              Our values influence how we work with clients, how we build
              technology, and how we measure the quality of our results.
            </p>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => (
              <article
                key={value.title}
                className="rounded-2xl border border-slate-200 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-400"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-cyan-400/10 text-lg font-bold text-cyan-400">
                  {value.title.charAt(0)}
                </div>

                <h3 className="mt-5 text-xl font-bold">{value.title}</h3>

                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {value.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Our Expertise */}
      <section className="border-y border-slate-200 bg-white px-6 py-16 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
              Our Expertise
            </p>

            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              Expertise that drives digital transformation
            </h2>

            <p className="mx-auto mt-5 max-w-3xl leading-8 text-slate-600">
              MetroBlue brings together business understanding, technical
              expertise, and modern technology practices to help organisations
              solve complex challenges and achieve sustainable growth.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <article className="rounded-2xl border border-slate-200 bg-white p-7">
              <div className="text-3xl text-cyan-400">01</div>

              <h3 className="mt-5 text-xl font-bold">
                Technology Strategy
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                We help organisations identify the right technology
                opportunities and develop practical strategies aligned with
                their business goals.
              </p>
            </article>

            <article className="rounded-2xl border border-slate-200 bg-white p-7">
              <div className="text-3xl text-cyan-400">02</div>

              <h3 className="mt-5 text-xl font-bold">
                Digital Engineering
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                Our engineering approach focuses on building secure, scalable,
                maintainable, and user-focused digital products.
              </p>
            </article>

            <article className="rounded-2xl border border-slate-200 bg-white p-7">
              <div className="text-3xl text-cyan-400">03</div>

              <h3 className="mt-5 text-xl font-bold">
                Business Transformation
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                We use technology to improve processes, strengthen
                decision-making, and create better experiences for
                organisations and their customers.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* Why Choose MetroBlue */}
      <section className="px-6 py-16 sm:py-24">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
              Why MetroBlue
            </p>

            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              A technology partner focused on your success
            </h2>

            <p className="mt-5 leading-8 text-slate-600">
              Choosing the right technology partner means more than choosing
              technical skills. It means working with a team that understands
              your goals and remains focused on delivering measurable value.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {reasons.map((reason) => (
              <div
                key={reason}
                className="flex items-start gap-3 rounded-xl border border-slate-200 bg-white p-5"
              >
                <span className="mt-0.5 text-lg font-bold text-cyan-400">
                  ✓
                </span>

                <p className="text-sm leading-6 text-slate-700">{reason}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gradient-to-r from-white to-white px-6 py-16">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">
            Ready to build something better?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl leading-7 text-slate-600">
            Let's explore how MetroBlue can help turn your technology goals
            into practical business results.
          </p>

          <a
            href="/contact"
            className="mt-8 inline-flex rounded-lg bg-cyan-400 px-6 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300"
          >
            Talk to MetroBlue
          </a>
        </div>
      </section>
    </main>
  );
}

export default About;
