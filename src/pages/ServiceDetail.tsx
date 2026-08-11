import { Link, Navigate, useParams } from "react-router-dom";

const serviceDetails = {
  "software-engineering": {
    eyebrow: "Software Engineering",
    title: "Custom software built for the way your business works.",
    overview:
      "MetroBlue designs, builds, and supports dependable software products that turn complex business requirements into intuitive digital experiences.",
    provides: [
      {
        title: "Web application development",
        description:
          "Responsive, secure web applications that streamline workflows and give customers a smooth online experience.",
      },
      {
        title: "Mobile application development",
        description:
          "Purpose-built mobile experiences that keep your teams and customers connected wherever they are.",
      },
      {
        title: "API development",
        description:
          "Well-structured APIs that connect your products, data, and third-party platforms reliably.",
      },
      {
        title: "System integration",
        description:
          "Connected systems that reduce manual work and help information move accurately across your organisation.",
      },
    ],
    benefits: [
      "Software tailored to your operational needs",
      "Improved customer and employee experiences",
      "Reliable foundations that can grow with your business",
    ],
    technologies: ["React", "TypeScript", "Node.js", "REST APIs", "PostgreSQL"],
  },
  "cloud-architecture": {
    eyebrow: "Cloud Architecture",
    title: "Cloud foundations that are secure, resilient, and ready to scale.",
    overview:
      "MetroBlue helps organisations move to and operate in the cloud with a practical architecture that supports performance, security, and sustainable growth.",
    provides: [
      {
        title: "Cloud migration",
        description:
          "A carefully planned move of applications and data that reduces risk and avoids unnecessary disruption.",
      },
      {
        title: "Infrastructure design",
        description:
          "Cloud environments designed around your applications, workload patterns, and business priorities.",
      },
      {
        title: "DevOps automation",
        description:
          "Automated delivery and infrastructure processes that make releases more consistent and efficient.",
      },
      {
        title: "Security and monitoring",
        description:
          "Practical controls, visibility, and alerts that help protect systems and respond quickly to issues.",
      },
      {
        title: "Scalability",
        description:
          "Flexible infrastructure that adapts to changing demand without compromising reliability.",
      },
    ],
    benefits: [
      "Lower operational complexity and stronger resilience",
      "Better control of performance, security, and cost",
      "Infrastructure that is ready for business growth",
    ],
    technologies: ["AWS", "Microsoft Azure", "Docker", "Kubernetes", "Terraform"],
  },
  "ai-data-analytics": {
    eyebrow: "AI & Data Analytics",
    title: "Turn your data into clearer decisions and measurable action.",
    overview:
      "MetroBlue combines data engineering, analytics, and practical AI to give teams trustworthy insight and the confidence to act on it.",
    provides: [
      {
        title: "Business intelligence dashboards",
        description:
          "Clear, accessible dashboards that help decision-makers monitor the metrics that matter most.",
      },
      {
        title: "Data engineering",
        description:
          "Reliable data pipelines and foundations that bring fragmented information into a usable form.",
      },
      {
        title: "Predictive analytics",
        description:
          "Models and analysis that reveal patterns, anticipate outcomes, and support proactive planning.",
      },
      {
        title: "AI solution development",
        description:
          "Focused AI capabilities that automate suitable tasks and improve how teams access knowledge.",
      },
      {
        title: "Data-driven decision making",
        description:
          "A practical approach to turning insight into consistent, evidence-based business decisions.",
      },
    ],
    benefits: [
      "Faster access to trusted business insight",
      "More confident planning and performance improvement",
      "Practical automation opportunities grounded in your data",
    ],
    technologies: ["Python", "Power BI", "SQL", "TensorFlow", "Microsoft Azure"],
  },
} as const;

function ServiceDetail() {
  const { serviceId } = useParams();
  const service = serviceDetails[serviceId as keyof typeof serviceDetails];

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  return (
    <main className="bg-white text-slate-900">
      <section className="bg-gradient-to-br from-white via-white to-white px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <Link to="/services" className="text-sm font-medium text-cyan-400 hover:text-cyan-300">
            ← All Services
          </Link>
          <p className="mt-8 text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
            {service.eyebrow}
          </p>
          <h1 className="mt-3 max-w-3xl text-4xl font-bold sm:text-5xl">{service.title}</h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">{service.overview}</p>
        </div>
      </section>

      <section className="px-6 py-16 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold">What MetroBlue provides</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {service.provides.map((item) => (
              <article key={item.title} className="rounded-2xl border border-slate-200 bg-white p-7">
                <h3 className="text-xl font-bold text-cyan-400">{item.title}</h3>
                <p className="mt-3 leading-7 text-slate-600">{item.description}</p>
              </article>
            ))}
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            <section className="rounded-2xl border border-slate-200 bg-white p-7">
              <h2 className="text-2xl font-bold">Benefits to clients</h2>
              <ul className="mt-5 space-y-3 text-slate-600">
                {service.benefits.map((benefit) => <li key={benefit}>✓ {benefit}</li>)}
              </ul>
            </section>
            <section className="rounded-2xl border border-slate-200 bg-white p-7">
              <h2 className="text-2xl font-bold">Technologies used</h2>
              <div className="mt-5 flex flex-wrap gap-3">
                {service.technologies.map((technology) => (
                  <span key={technology} className="rounded-full bg-cyan-400/10 px-4 py-2 text-sm font-medium text-cyan-300">
                    {technology}
                  </span>
                ))}
              </div>
            </section>
          </div>
        </div>
      </section>
    </main>
  );
}

export default ServiceDetail;
