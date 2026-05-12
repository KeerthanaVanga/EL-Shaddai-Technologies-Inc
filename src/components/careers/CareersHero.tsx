import { company } from "../../config/company";

export default function CareersHero() {
  const c = company.careers;

  return (
    <section className="relative pt-48 pb-32 lg:pt-64 lg:pb-48 overflow-hidden">
      <div className="absolute inset-0">
        <img src="/ai4.png" alt="Careers" className="w-full h-full" />
        {/* Gradient overlay to make text readable on the left */}
        <div className="absolute inset-0" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center">
        <div className="max-w-xl animate-fade-in-right">
          <p
            className="text-xs font-bold tracking-[0.3em] uppercase mb-4"
            style={{ color: company.colors.accent }}
          >
            {c.tagline}
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-[1.1] mb-6">
            {c.headline.split("\n").map((line, i) => (
              <span key={i} className="block">
                {line}
              </span>
            ))}
          </h1>
          <p className="text-gray-200 text-lg leading-relaxed">
            {c.description}
          </p>
        </div>
      </div>
    </section>
  );
}
