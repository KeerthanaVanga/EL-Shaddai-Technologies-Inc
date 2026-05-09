import { company } from "../../config/company";
import FadeIn from "../ui/FadeIn";

export default function ContactHero() {
  const c = company.contact;

  return (
    <section className="relative overflow-hidden flex items-center pt-32 pb-20 lg:pt-40 lg:pb-28 min-h-[500px] lg:min-h-[600px]" style={{ backgroundColor: company.colors.dark }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <FadeIn direction="right">
          <p className="text-xs font-bold tracking-[0.3em] uppercase mb-5" style={{ color: company.colors.accent }}>
            {c.tagline}
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-[1.1] mb-6">
            {c.headline.split("\n").map((line, i) => <span key={i} className="block">{line}</span>)}
          </h1>
          <p className="text-gray-300 text-lg leading-relaxed max-w-xl font-medium">
            {c.description}
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
