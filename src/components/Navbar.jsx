import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

const base =
  "px-3 py-2 rounded-md text-sm font-medium transition hover:bg-white/10";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  // Close the menu on route change
  useEffect(() => {
    setOpen(false);
  }, [location.pathname, location.hash]);

  // Prevent background scrolling when menu is open (mobile)
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 bg-sabriGray/80 backdrop-blur border-b border-white/10">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <NavLink to="/" className="text-sabriBlue font-title text-lg">
          Sabri
        </NavLink>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-2 text-sabriLight">
          <NavLink to="/" end className={({ isActive }) => `${base} ${isActive ? "bg-white/10" : ""}`}>
            Home
          </NavLink>
          <NavLink to="/about-sabri-abounozha" className={({ isActive }) => `${base} ${isActive ? "bg-white/10" : ""}`}>
            About
          </NavLink>
          <NavLink to="/philosophy" className={({ isActive }) => `${base} ${isActive ? "bg-white/10" : ""}`}>
            Philosophy
          </NavLink>
          <NavLink to="/resume" className={({ isActive }) => `${base} ${isActive ? "bg-white/10" : ""}`}>
            Resume
          </NavLink>
          <NavLink to="/projects" className={({ isActive }) => `${base} ${isActive ? "bg-white/10" : ""}`}>
            Projects
          </NavLink>
          <NavLink to="/blog" className={({ isActive }) => `${base} ${isActive ? "bg-white/10" : ""}`}>
            Blog
          </NavLink>
          <NavLink to="/contact" className={({ isActive }) => `${base} ${isActive ? "bg-white/10" : ""}`}>
            Contact
          </NavLink>
        </nav>

        {/* Mobile hamburger */}
        <button
          type="button"
          className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition"
          onClick={() => setOpen((v) => !v)}
          aria-label="Open menu"
          aria-expanded={open}
        >
          <div className="space-y-1.5">
            <span className={`block h-0.5 w-5 bg-white transition ${open ? "translate-y-2 rotate-45" : ""}`} />
            <span className={`block h-0.5 w-5 bg-white transition ${open ? "opacity-0" : ""}`} />
            <span className={`block h-0.5 w-5 bg-white transition ${open ? "-translate-y-2 -rotate-45" : ""}`} />
          </div>
        </button>
      </div>

      {/* Mobile menu panel */}
      {open && (
        <div className="md:hidden border-t border-white/10 bg-sabriGray/95 backdrop-blur">
          <div className="max-w-6xl mx-auto px-4 py-3 flex flex-col gap-2">
            <NavLink to="/" end className={({ isActive }) => `${base} ${isActive ? "bg-white/10" : ""}`}>
              Home
            </NavLink>
            <NavLink to="/about-sabri-abounozha" className={({ isActive }) => `${base} ${isActive ? "bg-white/10" : ""}`}>
              About
            </NavLink>
            <NavLink to="/philosophy" className={({ isActive }) => `${base} ${isActive ? "bg-white/10" : ""}`}>
              Philosophy
            </NavLink>
            <NavLink to="/resume" className={({ isActive }) => `${base} ${isActive ? "bg-white/10" : ""}`}>
              Resume
            </NavLink>
            <NavLink to="/projects" className={({ isActive }) => `${base} ${isActive ? "bg-white/10" : ""}`}>
              Projects
            </NavLink>
            <NavLink to="/blog" className={({ isActive }) => `${base} ${isActive ? "bg-white/10" : ""}`}>
            Blog
          </NavLink>
            <NavLink to="/contact" className={({ isActive }) => `${base} ${isActive ? "bg-white/10" : ""}`}>
              Contact
            </NavLink>
          </div>
        </div>
      )}
    </header>
  );
}
