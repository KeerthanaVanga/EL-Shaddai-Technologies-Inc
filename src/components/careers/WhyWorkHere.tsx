import { company } from "../../config/company";
import FadeIn from "../ui/FadeIn";

export default function WhyWorkHere() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text side */}
          <FadeIn direction="left">
            <div>
              <p className="text-xs font-bold tracking-[0.25em] uppercase mb-3" style={{ color: company.colors.primary }}>
                Why {company.shortName}
              </p>
              <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-4">Why Work With Us?</h2>
              <p className="text-gray-500 leading-relaxed mb-10">
                At {company.name}, we believe our people are our greatest asset. We invest in your growth, celebrate your wins, and create an environment where exceptional work thrives.
              </p>
              <div className="grid grid-cols-2 gap-6">
                {company.careers.whyWorkHere.map((w, i) => (
                  <FadeIn key={w.title} delay={i * 80} direction="up">
                    <div className="group">
                      <span className="text-2xl block mb-2">{w.icon}</span>
                      <h4 className="font-bold text-gray-900 text-sm mb-1">{w.title}</h4>
                      <p className="text-xs text-gray-500 leading-relaxed">{w.description}</p>
                    </div>
                  </FadeIn>
                ))}
              </div>
            </div>
          </FadeIn>

          {/* Image side */}
          <FadeIn direction="right">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={company.hiringImage}
                alt="Our team"
                className="w-full h-72 lg:h-[420px] object-cover"
              />
              {/* Overlay badge */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl px-5 py-4 inline-flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center text-lg" style={{ backgroundColor: company.colors.primary }}>
                    🚀
                  </div>
                  <div>
                    <p className="text-white font-bold text-sm">Join {company.shortName}</p>
                    <p className="text-white/70 text-xs">Where your career takes off</p>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
