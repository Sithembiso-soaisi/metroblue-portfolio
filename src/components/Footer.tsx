import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-[#0B1F3A] text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-12 md:grid-cols-3">
        {/* Company */}
        <div>
          <Link to="/" className="text-2xl font-bold">
            Metro<span className="text-[#00BCD4]">Blue</span>
          </Link>

          <p className="mt-4 max-w-sm text-sm leading-6 text-slate-300">
            Building modern technology solutions that help businesses grow,
            innovate, and operate smarter.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="mb-4 text-lg font-semibold">Quick Links</h3>

          <div className="flex flex-col gap-3 text-sm text-slate-300">
            <Link to="/" className="hover:text-[#00BCD4]">
              Home
            </Link>

            <Link to="/services" className="hover:text-[#00BCD4]">
              Services
            </Link>

            <Link to="/projects" className="hover:text-[#00BCD4]">
              Projects
            </Link>

            <Link to="/about" className="hover:text-[#00BCD4]">
              About Us
            </Link>

            <Link to="/careers" className="hover:text-[#00BCD4]">
              Careers
            </Link>

            <Link to="/contact" className="hover:text-[#00BCD4]">
              Contact
            </Link>
          </div>
        </div>

        {/* Contact */}
        <div>
          <h3 className="mb-4 text-lg font-semibold">Get In Touch</h3>

          <div className="space-y-3 text-sm text-slate-300">
            <p>Technology solutions for modern businesses.</p>
            <p>info@metroblue.com</p>
            <p>+266 0000 0000</p>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-slate-700">
        <div className="mx-auto max-w-7xl px-6 py-5 text-center text-sm text-slate-400">
          © {new Date().getFullYear()} MetroBlue. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;