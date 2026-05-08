import { Link } from "react-router-dom";
import { company } from "../../config/company";

export default function HiringBanner() {
  return (
    <section className="relative py-28 overflow-hidden">
      <div className="absolute inset-0">
        <img src={company.hiringImage} alt="We are hiring" className="w-full h-full object-cover" />
        <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(13,17,23,0.80) 0%, rgba(139,26,26,0.55) 100%)" }} />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-xs font-bold tracking-[0.3em] uppercase mb-3" style={{ color: company.colors.accent }}>
          Join Our Team
        </p>
        <h2 className="text-4xl sm:text-5xl font-black text-white mb-5">We're Hiring Exceptional Talent</h2>
        <p className="text-gray-300 max-w-lg mx-auto mb-10 text-base leading-relaxed">
          Join a team shaping the future of IT staffing. Explore open positions and grow your career with us.
        </p>
        <Link
          to="/careers"
          className="inline-flex items-center gap-2 px-8 py-4 text-sm font-bold text-white rounded-md transition-all duration-200 hover:shadow-2xl hover:-translate-y-0.5"
          style={{ backgroundColor: company.colors.primary }}
        >
          View Open Positions →
        </Link>
      </div>
    </section>
  );
}
