import { company } from "../../config/company";
import SectionHeader from "../ui/SectionHeader";
import FadeIn from "../ui/FadeIn";

export default function CoreValues() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <SectionHeader tagline="What We Stand For" headline="Our Core Values" />
        </FadeIn>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {company.about.values.map((v, i) => (
            <FadeIn key={v.title} delay={i * 120} direction="up">
              <div className="group p-8 rounded-2xl border border-gray-100 hover:border-transparent hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-full">
                <span className="text-3xl mb-4 block">{v.icon}</span>
                <h3 className="text-lg font-black text-gray-900 mb-2">{v.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{v.description}</p>
                <div className="mt-4 w-0 h-0.5 group-hover:w-10 transition-all duration-300 rounded-full" style={{ backgroundColor: company.colors.primary }} />
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
