import { company } from "../../config/company";

export default function AboutHero() {
  const a = company.about;

  return (
    <section
      className="relative overflow-hidden bg-gray-900"
      style={{ backgroundColor: company.colors.dark }}
    >
      {/* Background Image Setup */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-y-0 right-0 w-full lg:w-[60%]">
          <img
            src="/el-sheddai_images/17.png"
            alt="About EL-Shaddai"
            className="w-full h-full object-cover opacity-40 mix-blend-luminosity"
          />
          {/* Gradient overlay to smoothly blend the image into the dark background on the left */}
          <div
            className="absolute inset-0"
            style={{
              background: `linear-gradient(to right, ${company.colors.dark} 0%, transparent 100%)`,
            }}
          ></div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center pt-32 pb-20 lg:pt-40 lg:pb-28 min-h-125 lg:min-h-150">
          <div className="relative animate-fade-in-right">
            <p
              className="text-xs font-bold tracking-[0.3em] uppercase mb-5"
              style={{ color: company.colors.accent }}
            >
              {a.tagline}
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-[1.1] mb-6">
              {a.headline.split("\n").map((line, i) => (
                <span key={i} className="block">
                  {line}
                </span>
              ))}
            </h1>
            <p className="text-gray-300 text-lg leading-relaxed max-w-xl">
              {a.description}
            </p>
          </div>
        </div>
      </div>

      {/* Background decorations - left side only so it doesn't overlap image too much */}
      <div
        className="absolute top-0 left-0 w-1/2 h-full opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />
    </section>
  );
}
