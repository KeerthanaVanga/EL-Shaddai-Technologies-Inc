import { Link } from "react-router-dom";
import { company } from "../../config/company";

export default function HomeHero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img src={company.heroImage} alt="Hero background" className="w-full h-full object-cover" />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(135deg, rgba(13,17,23,0.88) 0%, rgba(13,17,23,0.65) 55%, rgba(139,26,26,0.3) 100%)" }}
        />
        <div className="absolute inset-0 opacity-[0.04]"
          style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)", backgroundSize: "60px 60px" }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-20 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-xs font-bold tracking-[0.3em] uppercase mb-5 animate-fade-in-up" style={{ color: company.colors.accent }}>
              {company.tagline}
            </p>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-[1.05] mb-6 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
              {company.headline.split("\n").map((l, i) => <span key={i} className="block">{l}</span>)}
            </h1>
            <p className="text-lg text-gray-300 mb-10 leading-relaxed animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              {company.description}
            </p>
            <div className="flex flex-wrap gap-4 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
              <Link
                to="/services"
                className="group inline-flex items-center gap-2 px-7 py-3.5 text-sm font-bold text-white rounded-md transition-all duration-200 hover:shadow-2xl hover:-translate-y-0.5"
                style={{ backgroundColor: company.colors.primary }}
              >
                Our Services <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-bold text-white rounded-md border border-white/40 backdrop-blur-sm hover:bg-white/10 transition-all duration-200 hover:-translate-y-0.5"
              >
                Contact Us
              </Link>
            </div>
          </div>

          {/* Stats cards */}
          <div className="flex flex-row lg:flex-col gap-4 justify-center lg:items-end">
            {company.stats.map((stat, i) => (
              <div
                key={stat.label}
                className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl px-6 py-5 flex-1 lg:flex-none lg:w-52 animate-fade-in-right hover:bg-white/15 transition-colors duration-200"
                style={{ animationDelay: `${0.3 + i * 0.1}s` }}
              >
                <div className="text-3xl lg:text-4xl font-black" style={{ color: company.colors.accent }}>{stat.value}</div>
                <div className="text-sm text-gray-300 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
