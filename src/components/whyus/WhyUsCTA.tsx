import { Link } from "react-router-dom";
import { company } from "../../config/company";

export default function WhyUsCTA() {
  const w = company.whyUs;
  return (
    <section className="py-24" style={{ backgroundColor: company.colors.dark }}>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4">
          {w.ctaHeadline}{" "}
          <span style={{ color: company.colors.accent }}>{w.ctaAccent}</span>
        </h2>
        <p className="text-gray-300 mb-10 text-lg leading-relaxed">{w.ctaDescription}</p>
        <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 font-bold text-white rounded-md transition-all duration-200 hover:shadow-2xl hover:-translate-y-0.5" style={{ backgroundColor: company.colors.primary }}>
          Get in Touch Today →
        </Link>
      </div>
    </section>
  );
}
