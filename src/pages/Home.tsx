function Home() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-white">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 md:grid-cols-2 md:py-28">
          {/* Hero Content */}
          <div>
            <p className="mb-4 font-semibold uppercase tracking-[0.2em] text-[#0D84C5]">
              Technology • Innovation • Growth
            </p>

            <h1 className="text-4xl font-bold leading-tight text-[#12304A] md:text-6xl">
              Technology solutions built for the future.
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
              MetroBlue helps businesses transform ideas into reliable,
              scalable, and modern digital solutions.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href="/services"
                className="rounded-lg bg-[#0D84C5] px-6 py-3 text-center font-semibold text-slate-900 transition hover:bg-[#47A342]"
              >
                Explore Our Services
              </a>

              <a
                href="/contact"
                className="rounded-lg border border-[#0D84C5] px-6 py-3 text-center font-semibold text-[#0D84C5] transition hover:bg-[#0D84C5] hover:text-slate-900"
              >
                Talk to Us
              </a>
            </div>
          </div>

          {/* Hero Visual */}
          <div className="relative">
            <div className="mx-auto flex aspect-square max-w-md items-center justify-center rounded-3xl border border-[#0D84C5]/20 bg-slate-50 p-8 shadow-xl">
              <div className="grid w-full grid-cols-2 gap-4">
                <div className="rounded-2xl border border-[#0D84C5]/20 bg-white p-6 shadow-sm">
                  <div className="mb-4 text-3xl font-bold text-[#0D84C5]">
                    01
                  </div>

                  <h2 className="text-lg font-semibold text-[#12304A]">
                    Software
                  </h2>

                  <p className="mt-2 text-sm text-slate-500">
                    Modern digital products.
                  </p>
                </div>

                <div className="mt-8 rounded-2xl border border-[#47A342]/20 bg-white p-6 shadow-sm">
                  <div className="mb-4 text-3xl font-bold text-[#47A342]">
                    02
                  </div>

                  <h2 className="text-lg font-semibold text-[#12304A]">
                    Cloud
                  </h2>

                  <p className="mt-2 text-sm text-slate-500">
                    Scalable infrastructure.
                  </p>
                </div>

                <div className="-mt-4 rounded-2xl border border-[#47A342]/20 bg-white p-6 shadow-sm">
                  <div className="mb-4 text-3xl font-bold text-[#47A342]">
                    03
                  </div>

                  <h2 className="text-lg font-semibold text-[#12304A]">
                    AI & Data
                  </h2>

                  <p className="mt-2 text-sm text-slate-500">
                    Smarter business decisions.
                  </p>
                </div>

                <div className="rounded-2xl border border-[#0D84C5]/20 bg-white p-6 shadow-sm">
                  <div className="mb-4 text-3xl font-bold text-[#0D84C5]">
                    04
                  </div>

                  <h2 className="text-lg font-semibold text-[#12304A]">
                    Innovation
                  </h2>

                  <p className="mt-2 text-sm text-slate-500">
                    Technology that moves you forward.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="bg-white px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <p className="font-semibold uppercase tracking-[0.2em] text-[#0D84C5]">
              What We Do
            </p>

            <h2 className="mt-3 text-3xl font-bold text-[#12304A] md:text-4xl">
              Technology built around your business.
            </h2>

            <p className="mt-4 leading-7 text-slate-600">
              From software engineering to cloud architecture and data
              intelligence, MetroBlue delivers solutions designed for real
              business challenges.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-slate-200 bg-white p-8 transition hover:-translate-y-1 hover:border-[#0D84C5]/40 hover:shadow-lg">
              <div className="text-3xl text-[#0D84C5]">⚙</div>

              <h3 className="mt-5 text-xl font-bold text-[#12304A]">
                Software Engineering
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                Build robust web and software products with modern
                technologies and scalable architecture.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-8 transition hover:-translate-y-1 hover:border-[#47A342]/40 hover:shadow-lg">
              <div className="text-3xl text-[#47A342]">☁</div>

              <h3 className="mt-5 text-xl font-bold text-[#12304A]">
                Cloud Architecture
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                Create secure, flexible, and scalable cloud infrastructure
                that grows with your organization.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-8 transition hover:-translate-y-1 hover:border-[#0D84C5]/40 hover:shadow-lg">
              <div className="text-3xl text-[#0D84C5]">◉</div>

              <h3 className="mt-5 text-xl font-bold text-[#12304A]">
                AI & Data Analytics
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                Turn business data into useful insights and smarter
                technology-driven decisions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call To Action */}
      <section className="bg-slate-50 px-6 py-16">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 text-center md:flex-row md:text-left">
          <div>
            <h2 className="text-3xl font-bold text-[#12304A]">
              Ready to build something better?
            </h2>

            <p className="mt-2 text-slate-600">
              Let's turn your next idea into a technology solution.
            </p>
          </div>

          <a
            href="/contact"
            className="rounded-lg bg-[#0D84C5] px-7 py-3 font-semibold text-slate-900 transition hover:bg-[#47A342]"
          >
            Start a Conversation
          </a>
        </div>
      </section>
    </div>
  );
}

export default Home;