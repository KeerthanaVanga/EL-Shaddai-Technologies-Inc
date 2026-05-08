import { company } from "../../config/company";
import FadeIn from "../ui/FadeIn";

export default function MissionVision() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {[
            { label: "Our Mission", text: company.about.mission, color: company.colors.primary },
            { label: "Our Vision",  text: company.about.vision,  color: company.colors.accent },
          ].map(({ label, text, color }, i) => (
            <FadeIn key={label} direction={i === 0 ? "left" : "right"} delay={i * 100}>
              <div className="group">
                <div className="w-12 h-1 rounded-full mb-5 transition-all duration-500 group-hover:w-24" style={{ backgroundColor: color }} />
                <h3 className="text-xl font-black text-gray-900 mb-3">{label}</h3>
                <p className="text-gray-600 leading-relaxed">{text}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
