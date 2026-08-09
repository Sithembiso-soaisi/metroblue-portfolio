import { useState } from "react";
import { NavLink } from "react-router-dom";
import MetroBlueLogo from "./MetroBlueLogo.tsx";

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [projectsOpen, setProjectsOpen] = useState(false);

  const activeClass = "font-medium text-[#00BCD4]";
  const inactiveClass = "font-medium text-slate-700 hover:text-[#00BCD4]";

  return (
    <header className="border-b border-slate-200 bg-white">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <NavLink to="/" onClick={() => setMobileOpen(false)}>
          <MetroBlueLogo />
        </NavLink>

        <div className="hidden items-center gap-8 md:flex">
          <NavLink
            to="/"
            className={({ isActive }) => isActive ? activeClass : inactiveClass}
          >
            Home
          </NavLink>

          <div className="relative">
            <button
              type="button"
              onClick={() => {
                setServicesOpen(!servicesOpen);
                setProjectsOpen(false);
              }}
              className={servicesOpen ? "font-medium text-[#00BCD4]" : "font-medium text-slate-700 hover:text-[#00BCD4]"}
            >
              Services ▾
            </button>

            {servicesOpen && (
              <div className="absolute left-0 top-full z-50 mt-2 w-56 rounded-lg border bg-white p-2 shadow-lg">
                <NavLink
                  to="/services"
                  className={({ isActive }) => `block rounded-md px-4 py-3 text-sm ${isActive ? 'bg-[#E6F7FB] text-[#00BCD4]' : 'hover:bg-[#E6F7FB]'}`}
                  onClick={() => setServicesOpen(false)}
                >
                  All Services
                </NavLink>

                <NavLink
                  to="/services/software-engineering"
                  className={({ isActive }) => `block rounded-md px-4 py-3 text-sm ${isActive ? 'bg-[#E6F7FB] text-[#00BCD4]' : 'hover:bg-[#E6F7FB]'}`}
                  onClick={() => setServicesOpen(false)}
                >
                  Software Engineering
                </NavLink>

                <NavLink
                  to="/services/cloud-architecture"
                  className={({ isActive }) => `block rounded-md px-4 py-3 text-sm ${isActive ? 'bg-[#E6F7FB] text-[#00BCD4]' : 'hover:bg-[#E6F7FB]'}`}
                  onClick={() => setServicesOpen(false)}
                >
                  Cloud Architecture
                </NavLink>

                <NavLink
                  to="/services/ai-data-analytics"
                  className={({ isActive }) => `block rounded-md px-4 py-3 text-sm ${isActive ? 'bg-[#E6F7FB] text-[#00BCD4]' : 'hover:bg-[#E6F7FB]'}`}
                  onClick={() => setServicesOpen(false)}
                >
                  AI & Data Analytics
                </NavLink>
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
              className={projectsOpen ? "font-medium text-[#00BCD4]" : "font-medium text-slate-700 hover:text-[#00BCD4]"}
            >
              Projects ▾
            </button>

            {projectsOpen && (
              <div className="absolute left-0 top-full z-50 mt-2 w-56 rounded-lg border bg-white p-2 shadow-lg">
                <NavLink
                  to="/projects"
                  className={({ isActive }) => `block rounded-md px-4 py-3 text-sm ${isActive ? 'bg-[#E6F7FB] text-[#00BCD4]' : 'hover:bg-[#E6F7FB]'}`}
                  onClick={() => setProjectsOpen(false)}
                >
                  All Projects
                </NavLink>

                <NavLink
                  to="/case-studies"
                  className={({ isActive }) => `block rounded-md px-4 py-3 text-sm ${isActive ? 'bg-[#E6F7FB] text-[#00BCD4]' : 'hover:bg-[#E6F7FB]'}`}
                  onClick={() => setProjectsOpen(false)}
                >
                  Case Studies
                </NavLink>

                <NavLink
                  to="/client-success-stories"
                  className={({ isActive }) => `block rounded-md px-4 py-3 text-sm ${isActive ? 'bg-[#E6F7FB] text-[#00BCD4]' : 'hover:bg-[#E6F7FB]'}`}
                  onClick={() => setProjectsOpen(false)}
                >
                  Client Success Stories
                </NavLink>
              </div>
            )}
          </div>

          <NavLink
            to="/about"
            className={({ isActive }) => isActive ? activeClass : inactiveClass}
          >
            About
          </NavLink>

          <NavLink
            to="/careers"
            className={({ isActive }) => isActive ? activeClass : inactiveClass}
          >
            Careers
          </NavLink>

          <NavLink
            to="/contact"
            className={({ isActive }) => isActive 
              ? "rounded-lg bg-[#0F4C81] px-5 py-2.5 font-medium text-white hover:bg-[#0B1F3A]" 
              : "rounded-lg bg-[#0F4C81] px-5 py-2.5 font-medium text-white hover:bg-[#0B1F3A]"}
          >
            Contact
          </NavLink>
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
            <NavLink
              to="/"
              className={({ isActive }) => `rounded-md px-4 py-3 ${isActive ? 'bg-[#E6F7FB] text-[#00BCD4]' : 'hover:bg-[#E6F7FB]'}`}
              onClick={() => setMobileOpen(false)}
            >
              Home
            </NavLink>

            <NavLink
              to="/services"
              className={({ isActive }) => `rounded-md px-4 py-3 ${isActive ? 'bg-[#E6F7FB] text-[#00BCD4]' : 'hover:bg-[#E6F7FB]'}`}
              onClick={() => setMobileOpen(false)}
            >
              Services
            </NavLink>

            <NavLink
              to="/projects"
              className={({ isActive }) => `rounded-md px-4 py-3 ${isActive ? 'bg-[#E6F7FB] text-[#00BCD4]' : 'hover:bg-[#E6F7FB]'}`}
              onClick={() => setMobileOpen(false)}
            >
              Projects
            </NavLink>

            <NavLink
              to="/about"
              className={({ isActive }) => `rounded-md px-4 py-3 ${isActive ? 'bg-[#E6F7FB] text-[#00BCD4]' : 'hover:bg-[#E6F7FB]'}`}
              onClick={() => setMobileOpen(false)}
            >
              About
            </NavLink>

            <NavLink
              to="/careers"
              className={({ isActive }) => `rounded-md px-4 py-3 ${isActive ? 'bg-[#E6F7FB] text-[#00BCD4]' : 'hover:bg-[#E6F7FB]'}`}
              onClick={() => setMobileOpen(false)}
            >
              Careers
            </NavLink>

            <NavLink
              to="/contact"
              className={({ isActive }) => `rounded-md px-4 py-3 text-center font-medium ${isActive ? 'bg-[#0F4C81] text-white' : 'bg-[#0F4C81] text-white hover:bg-[#0B1F3A]'}`}
              onClick={() => setMobileOpen(false)}
            >
              Contact
            </NavLink>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;