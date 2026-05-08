import { company } from "../../config/company";
import SectionHeader from "../ui/SectionHeader";
import FadeIn from "../ui/FadeIn";

export default function ReasonsGrid() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <SectionHeader
            headline="6 Reasons to Partner With Us"
            description={`From first call to successful placement, here's what sets ${company.shortName} apart.`}
          />
        </FadeIn>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {company.whyUs.reasons.map((r, i) => (
            <FadeIn key={r.title} delay={i * 80} direction="up">
              <div className="group p-7 rounded-2xl border border-gray-100 bg-gray-50 hover:bg-white hover:shadow-xl hover:border-transparent transition-all duration-300 hover:-translate-y-1 h-full">
                <div className="w-11 h-11 rounded-xl flex items-center justify-center text-xl mb-4 transition-transform duration-300 group-hover:scale-110" style={{ backgroundColor: `${company.colors.primary}12` }}>
                  {r.icon}
                </div>
                <h3 className="text-base font-black text-gray-900 mb-2">{r.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{r.description}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
