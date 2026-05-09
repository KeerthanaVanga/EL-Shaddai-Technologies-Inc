import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { company } from "../../config/company";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-white/96 backdrop-blur-md shadow-lg" : "bg-white shadow-sm"}`}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-20 md:h-24">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 shrink-0" onClick={() => setMenuOpen(false)}>
          {company.logoUrl ? (
            <img src={company.logoUrl} alt={company.name} className="h-12 md:h-16 w-auto object-contain" />
          ) : (
            <div className="flex items-center gap-2">
              <div className="relative w-8 h-8">
                <div className="absolute inset-0 rotate-45 rounded-sm" style={{ backgroundColor: company.colors.primary }} />
                <div className="absolute inset-1.5 rotate-45 rounded-sm" style={{ backgroundColor: company.colors.accent }} />
              </div>
              <span className="text-xs font-black tracking-[0.15em] uppercase" style={{ color: company.colors.dark }}>
                {company.logoFallback}
              </span>
            </div>
          )}
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden lg:flex items-center gap-2 xl:gap-6">
          {company.navLinks.map((link) => (
            <li key={link.href}>
              <NavLink
                to={link.href}
                end={link.href === "/"}
                className={({ isActive }) =>
                  `relative px-3 py-2 text-[15px] font-semibold transition-colors duration-150 ${
                    isActive ? "text-[#E11D48]" : "text-gray-900 hover:text-[#E11D48]"
                  }`
                }
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Admin CTA */}
        <div className="hidden lg:block ml-2">
          <Link
            to="/admin"
            className="px-6 py-2.5 text-sm font-bold text-white rounded-md transition-all duration-200 hover:opacity-90 hover:shadow-md"
            style={{ backgroundColor: company.colors.dark }}
          >
            Admin
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="lg:hidden relative w-8 h-8 flex flex-col justify-center gap-1.5 p-1"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block h-0.5 bg-gray-700 rounded-full transition-all duration-300 origin-center ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block h-0.5 bg-gray-700 rounded-full transition-all duration-300 ${menuOpen ? "opacity-0 scale-x-0" : ""}`} />
          <span className={`block h-0.5 bg-gray-700 rounded-full transition-all duration-300 origin-center ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </nav>

      {/* Mobile Drawer */}
      <div className={`lg:hidden overflow-hidden transition-all duration-300 ${menuOpen ? "max-h-[32rem]" : "max-h-0"} bg-white border-t border-gray-100`}>
        <ul className="px-4 py-3 space-y-0.5">
          {company.navLinks.map((link) => (
            <li key={link.href}>
              <NavLink
                to={link.href}
                end={link.href === "/"}
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) =>
                  `flex items-center gap-2 px-3 py-2.5 text-sm font-medium rounded-lg transition-colors ${
                    isActive ? "text-[#8B1A1A] bg-red-50 font-semibold" : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                  }`
                }
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>
        <div className="px-4 pb-4">
          <Link
            to="/admin"
            onClick={() => setMenuOpen(false)}
            className="flex items-center justify-center w-full py-2.5 text-sm font-bold text-white rounded-lg"
            style={{ backgroundColor: company.colors.dark }}
          >
            Admin
          </Link>
        </div>
      </div>
    </header>
  );
}
