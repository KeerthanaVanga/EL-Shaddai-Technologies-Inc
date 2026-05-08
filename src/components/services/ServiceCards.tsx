import { company } from "../../config/company";
import SectionHeader from "../ui/SectionHeader";
import FadeIn from "../ui/FadeIn";

export default function ServiceCards() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <SectionHeader
            headline="Our Service Portfolio"
            description="Every service is designed to solve real talent challenges and deliver measurable business impact."
          />
        </FadeIn>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {company.services.map((s, i) => (
            <FadeIn key={s.id} delay={i * 80} direction="up">
              <div
                id={s.id}
                className="group bg-white rounded-2xl p-7 border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 scroll-mt-24 h-full flex flex-col"
              >
                <div className="flex items-start justify-between mb-5">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center text-xl transition-transform duration-300 group-hover:scale-110" style={{ backgroundColor: `${company.colors.primary}12` }}>
                    {s.icon}
                  </div>
                  {s.badge && (
                    <span className="text-xs font-bold px-2.5 py-1 rounded-full" style={{ backgroundColor: `${company.colors.accent}25`, color: company.colors.accent }}>
                      {s.badge}
                    </span>
                  )}
                </div>
                <h3 className="text-lg font-black text-gray-900 mb-2">{s.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed mb-5 flex-1">{s.description}</p>
                {s.features && (
                  <ul className="space-y-2 mt-auto">
                    {s.features.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-sm text-gray-600">
                        <span className="text-emerald-500 font-bold mt-0.5 shrink-0">✓</span>
                        {f}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
