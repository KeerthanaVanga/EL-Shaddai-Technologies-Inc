import { Link } from "react-router-dom";
import { company } from "../../config/company";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="pt-16 pb-6" style={{ backgroundColor: company.colors.dark }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pb-12 border-b border-white/10">
          <div>
            <Link to="/" className="inline-flex items-center gap-2 mb-4">
              <img
    src="/elsaddai.jpeg"
    alt={company.name}
    className="h-10 w-auto object-contain"
  />
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">{company.footerDescription}</p>
            <div className="space-y-2.5">
              <a href={`tel:${company.phone}`} className="flex items-center gap-2.5 text-sm text-gray-400 hover:text-white transition-colors group">
                <span className="w-8 h-8 rounded-lg flex items-center justify-center text-sm bg-white/5 group-hover:bg-white/10 transition-colors">📞</span>
                {company.phone}
              </a>
              <a href={`mailto:${company.email}`} className="flex items-center gap-2.5 text-sm text-gray-400 hover:text-white transition-colors group">
                <span className="w-8 h-8 rounded-lg flex items-center justify-center text-sm bg-white/5 group-hover:bg-white/10 transition-colors">✉️</span>
                {company.email}
              </a>
            </div>
          </div>
          <div>
            <h4 className="text-xs font-bold tracking-[0.2em] uppercase text-gray-500 mb-5">Quick Links</h4>
            <ul className="space-y-3">
              {company.footerLinks.quickLinks.map((link) => (
                <li key={link.href}>
                  <Link to={link.href} className="text-sm text-gray-400 hover:text-white transition-colors flex items-center gap-1.5 group">
                    <span className="w-0 group-hover:w-3 overflow-hidden transition-all duration-200 text-[#8B1A1A]">›</span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-xs font-bold tracking-[0.2em] uppercase text-gray-500 mb-5">Our Services</h4>
            <ul className="space-y-3">
              {company.footerLinks.services.map((link) => (
                <li key={link.href}>
                  <Link to={link.href} className="text-sm text-gray-400 hover:text-white transition-colors flex items-center gap-1.5 group">
                    <span className="w-0 group-hover:w-3 overflow-hidden transition-all duration-200 text-[#8B1A1A]">›</span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-gray-600">© {year} {company.name}. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Link to="/privacy" className="text-xs text-gray-600 hover:text-gray-400 transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="text-xs text-gray-600 hover:text-gray-400 transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
