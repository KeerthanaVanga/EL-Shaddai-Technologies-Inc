import { company } from "../../config/company";
import SectionHeader from "../ui/SectionHeader";
import FadeIn from "../ui/FadeIn";

export default function FounderSpotlight() {
  const f = company.about.founder;
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <SectionHeader tagline="Leadership" headline="Founder Spotlight" />
        </FadeIn>
        <FadeIn delay={100}>
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden flex flex-col md:flex-row">
            {/* Left dark card */}
            <div
              className="md:w-56 shrink-0 flex flex-col items-center justify-center p-10 text-center"
              style={{ backgroundColor: company.colors.dark }}
            >
              <div
                className="w-20 h-20 rounded-full border-2 flex items-center justify-center text-2xl font-black mb-4"
                style={{ borderColor: company.colors.accent, color: company.colors.accent }}
              >
                {f.initials}
              </div>
              <p className="text-white font-bold text-lg leading-tight">{f.name}</p>
              <p className="text-sm mt-1.5 font-medium" style={{ color: company.colors.accent }}>{f.title}</p>
            </div>

            {/* Right bio */}
            <div className="p-8 md:p-10 flex flex-col justify-center">
              <p className="text-gray-600 leading-relaxed mb-6">{f.bio}</p>
              <div className="flex flex-wrap gap-5">
                <a
                  href={`tel:${f.phone}`}
                  className="flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-[#8B1A1A] transition-colors"
                >
                  <span>📞</span>{f.phone}
                </a>
                <a
                  href={`mailto:${f.email}`}
                  className="flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-[#8B1A1A] transition-colors"
                >
                  <span>✉️</span>{f.email}
                </a>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
