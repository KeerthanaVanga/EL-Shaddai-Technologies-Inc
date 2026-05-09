import { Link } from "react-router-dom";
import { company } from "../../config/company";

export default function ServicesCTA() {
  return (
    <section className="py-24" style={{ backgroundColor: company.colors.darkSecondary }}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-fade-in-up">
        <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">
          Find the Right Service for Your Needs
        </h2>
        <p className="text-gray-400 mb-10 text-lg">
          Not sure which service is best? Our consultants will guide you to the perfect talent solution.
        </p>
        <Link
          to="/contact"
          className="inline-flex items-center justify-center px-10 py-4 text-sm font-bold text-white transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 shadow-lg"
          style={{ 
            background: `linear-gradient(90deg, ${company.colors.primary} 0%, ${company.colors.primaryLight || '#e11d48'} 100%)`,
            borderRadius: '4px'
          }}
        >
          Contact Us Today
        </Link>
      </div>
    </section>
  );
}
