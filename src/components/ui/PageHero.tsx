import { company } from "../../config/company";

interface PageHeroProps {
  tagline: string;
  headline: string;
  description: string;
  bgImage?: string;
}

export default function PageHero({ tagline, headline, description, bgImage }: PageHeroProps) {
  return (
    <section className="relative pt-32 pb-24 overflow-hidden" style={{ backgroundColor: company.colors.dark }}>
      {bgImage && (
        <div className="absolute inset-0">
          <img src={bgImage} alt="" className="w-full h-full object-cover opacity-20" />
          <div className="absolute inset-0" style={{ background: `linear-gradient(135deg, ${company.colors.dark}EE 0%, ${company.colors.dark}CC 100%)` }} />
        </div>
      )}
      {/* Subtle grid */}
      <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)", backgroundSize: "48px 48px" }} />
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-xs font-bold tracking-[0.3em] uppercase mb-4 animate-fade-in-up" style={{ color: company.colors.accent }}>
          {tagline}
        </p>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight mb-6 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
          {headline.split("\n").map((line, i) => <span key={i} className="block">{line}</span>)}
        </h1>
        <p className="text-gray-300 text-lg leading-relaxed max-w-2xl animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
          {description}
        </p>
      </div>
    </section>
  );
}
