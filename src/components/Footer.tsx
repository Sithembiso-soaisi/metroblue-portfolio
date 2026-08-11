import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white text-slate-700">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-12 md:grid-cols-3">
        {/* Company */}
        <div>
          <Link
            to="/"
            className="text-2xl font-bold tracking-tight text-[#0D84C5]"
          >
            Metro<span className="text-[#47A342]">Blue</span>
          </Link>

          <p className="mt-4 max-w-sm text-sm leading-6 text-slate-600">
            Building modern technology solutions that help businesses grow,
            innovate, and operate smarter.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="mb-4 text-lg font-semibold text-slate-900">
            Quick Links
          </h3>

          <div className="flex flex-col gap-3 text-sm">
            <Link to="/" className="text-slate-600 hover:text-[#0D84C5]">
              Home
            </Link>

            <Link
              to="/services"
              className="text-slate-600 hover:text-[#0D84C5]"
            >
              Services
            </Link>

            <Link
              to="/projects"
              className="text-slate-600 hover:text-[#0D84C5]"
            >
              Projects
            </Link>

            <Link
              to="/about"
              className="text-slate-600 hover:text-[#0D84C5]"
            >
              About Us
            </Link>

            <Link
              to="/careers"
              className="text-slate-600 hover:text-[#0D84C5]"
            >
              Careers
            </Link>

            <Link
              to="/contact"
              className="text-slate-600 hover:text-[#0D84C5]"
            >
              Contact
            </Link>
          </div>
        </div>

        {/* Contact */}
        <div>
          <h3 className="mb-4 text-lg font-semibold text-slate-900">
            Get In Touch
          </h3>

          <div className="space-y-3 text-sm text-slate-600">
            <p>Technology solutions for modern businesses.</p>
            <p>info@metroblue.com</p>
            <p>+266 0000 0000</p>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-slate-200">
        <div className="mx-auto max-w-7xl px-6 py-5 text-center text-sm text-slate-500">
          © {new Date().getFullYear()} MetroBlue. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;