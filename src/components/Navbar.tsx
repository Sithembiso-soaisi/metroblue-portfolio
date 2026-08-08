import { useState } from "react";
import { Link } from "react-router-dom";
import MetroBlueLogo from "./MetroBlueLogo";

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [projectsOpen, setProjectsOpen] = useState(false);

  return (
    <header className="border-b border-slate-200 bg-white">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <MetroBlueLogo />

        <div className="hidden items-center gap-8 md:flex">
          <Link
            to="/"
            className="font-medium text-slate-700 hover:text-[#00BCD4]"
          >
            Home
          </Link>

          <div className="relative">
            <button
              type="button"
              onClick={() => {
                setServicesOpen(!servicesOpen);
                setProjectsOpen(false);
              }}
              className="font-medium text-slate-700 hover:text-[#00BCD4]"
            >
              Services ▾
            </button>

            {servicesOpen && (
              <div className="absolute left-0 top-full z-50 mt-2 w-56 rounded-lg border bg-white p-2 shadow-lg">
                <Link
                  to="/services"
                  className="block rounded-md px-4 py-3 text-sm hover:bg-[#E6F7FB]"
                  onClick={() => setServicesOpen(false)}
                >
                  All Services
                </Link>

                <Link
                  to="/services"
                  className="block rounded-md px-4 py-3 text-sm hover:bg-[#E6F7FB]"
                  onClick={() => setServicesOpen(false)}
                >
                  Software Engineering
                </Link>

                <Link
                  to="/services"
                  className="block rounded-md px-4 py-3 text-sm hover:bg-[#E6F7FB]"
                  onClick={() => setServicesOpen(false)}
                >
                  Cloud Architecture
                </Link>

                <Link
                  to="/services"
                  className="block rounded-md px-4 py-3 text-sm hover:bg-[#E6F7FB]"
                  onClick={() => setServicesOpen(false)}
                >
                  AI & Data Analytics
                </Link>
              </div>
            )}
          </div>

          <div className="relative">
            <button
              type="button"
              onClick={() => {
                setProjectsOpen(!projectsOpen);
                setServicesOpen(false);
              }}
              className="font-medium text-slate-700 hover:text-[#00BCD4]"
            >
              Projects ▾
            </button>

            {projectsOpen && (
              <div className="absolute left-0 top-full z-50 mt-2 w-56 rounded-lg border bg-white p-2 shadow-lg">
                <Link
                  to="/projects"
                  className="block rounded-md px-4 py-3 text-sm hover:bg-[#E6F7FB]"
                  onClick={() => setProjectsOpen(false)}
                >
                  All Projects
                </Link>

                <Link
                  to="/projects"
                  className="block rounded-md px-4 py-3 text-sm hover:bg-[#E6F7FB]"
                  onClick={() => setProjectsOpen(false)}
                >
                  Case Studies
                </Link>

                <Link
                  to="/projects"
                  className="block rounded-md px-4 py-3 text-sm hover:bg-[#E6F7FB]"
                  onClick={() => setProjectsOpen(false)}
                >
                  Client Success Stories
                </Link>
              </div>
            )}
          </div>

          <Link
            to="/about"
            className="font-medium text-slate-700 hover:text-[#00BCD4]"
          >
            About
          </Link>

          <Link
            to="/careers"
            className="font-medium text-slate-700 hover:text-[#00BCD4]"
          >
            Careers
          </Link>

          <Link
            to="/contact"
            className="rounded-lg bg-[#0F4C81] px-5 py-2.5 font-medium text-white hover:bg-[#0B1F3A]"
          >
            Contact
          </Link>
        </div>

        <button
          type="button"
          className="rounded-md p-2 text-slate-700 md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle navigation menu"
        >
          {mobileOpen ? "✕" : "☰"}
        </button>
      </nav>

      {mobileOpen && (
        <div className="border-t border-slate-200 px-6 py-4 md:hidden">
          <div className="flex flex-col gap-2">
            <Link
              to="/"
              className="rounded-md px-4 py-3 hover:bg-[#E6F7FB]"
              onClick={() => setMobileOpen(false)}
            >
              Home
            </Link>

            <Link
              to="/services"
              className="rounded-md px-4 py-3 hover:bg-[#E6F7FB]"
              onClick={() => setMobileOpen(false)}
            >
              Services
            </Link>

            <Link
              to="/projects"
              className="rounded-md px-4 py-3 hover:bg-[#E6F7FB]"
              onClick={() => setMobileOpen(false)}
            >
              Projects
            </Link>

            <Link
              to="/about"
              className="rounded-md px-4 py-3 hover:bg-[#E6F7FB]"
              onClick={() => setMobileOpen(false)}
            >
              About
            </Link>

            <Link
              to="/careers"
              className="rounded-md px-4 py-3 hover:bg-[#E6F7FB]"
              onClick={() => setMobileOpen(false)}
            >
              Careers
            </Link>

            <Link
              to="/contact"
              className="rounded-md bg-[#0F4C81] px-4 py-3 text-center font-medium text-white"
              onClick={() => setMobileOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;