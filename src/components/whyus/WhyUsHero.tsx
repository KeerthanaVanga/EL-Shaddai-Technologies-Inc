import { company } from "../../config/company";
import FadeIn from "../ui/FadeIn";

export default function WhyUsHero() {
  const w = company.whyUs;

  return (
    <section className="relative overflow-hidden flex items-center justify-center pt-32 pb-20 lg:pt-40 lg:pb-28 min-h-[500px] lg:min-h-[600px]" style={{ backgroundColor: company.colors.dark }}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 w-full">
        <FadeIn direction="up">
          <p className="text-xs font-bold tracking-[0.3em] uppercase mb-6" style={{ color: company.colors.accent }}>
            {w.tagline}
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-[1.15] mb-8">
            Why Choose <span style={{ color: company.colors.primary }}>{company.shortName}</span>
            <br />Technologies Inc?
          </h1>
          <p className="text-gray-300 text-lg sm:text-xl leading-relaxed max-w-3xl mx-auto font-medium">
            {w.description}
          </p>
        </FadeIn>
      </div>

      {/* Subtle background decoration */}
      <div className="absolute inset-0 opacity-[0.02]"
        style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)", backgroundSize: "64px 64px" }}
      />
    </section>
  );
}
