import { Link } from "react-router-dom";
import { company } from "../../config/company";

export default function HomeCTA() {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background Gradient */}
      <div 
        className="absolute inset-0"
        style={{
          background: `linear-gradient(to right, ${company.colors.dark} 0%, ${company.colors.darkSecondary} 35%, #e2e8f0 100%)`
        }}
      />
      
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-fade-in-up">
        <p className="text-xs font-bold tracking-[0.25em] uppercase mb-3 text-white/50">AI — Talent Intelligence</p>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4">
          Ready to Build Your Dream IT Team?
        </h2>
        <p className="text-gray-300 md:text-lg mb-8 max-w-2xl mx-auto">
          Let's discuss how {company.name} and our AI — Talent Intelligence platform can help you find the right talent at the right time.
        </p>
        
        <Link
          to="/contact"
          className="inline-flex items-center gap-2 px-8 py-4 text-sm font-bold text-white rounded-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
          style={{ backgroundColor: company.colors.primary }}
        >
          Get Started Today <span className="text-lg leading-none">→</span>
        </Link>
      </div>
    </section>
  );
}
