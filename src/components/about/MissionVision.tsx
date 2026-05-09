import { company } from "../../config/company";
import FadeIn from "../ui/FadeIn";

export default function MissionVision() {
  const missionParagraphs = company.about.mission.split('\n\n');

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          
          {/* Mission */}
          <FadeIn direction="left">
            <div className="group">
              <div className="w-10 h-1 mb-6" style={{ backgroundColor: company.colors.primary }} />
              <h3 className="text-3xl font-black text-slate-900 mb-6">Our Mission</h3>
              <div className="text-slate-600 leading-relaxed space-y-4">
                {missionParagraphs.map((para, idx) => (
                  <p key={idx} className={idx === 1 ? "text-sm text-slate-500 font-medium" : ""}>
                    {para}
                  </p>
                ))}
              </div>
            </div>
          </FadeIn>

          {/* Vision */}
          <FadeIn direction="right" delay={100}>
            <div className="group">
              <div className="w-10 h-1 mb-6" style={{ backgroundColor: company.colors.accent }} />
              <h3 className="text-3xl font-black text-slate-900 mb-6">Our Vision</h3>
              <div className="text-slate-600 leading-relaxed space-y-4">
                <p>{company.about.vision}</p>
                <p className="text-sm text-slate-500 font-medium">
                  We envision a future where every technology company, regardless of size, has access to the specialized talent it needs to unlock its full potential and drive transformative industry success.
                </p>
              </div>
            </div>
          </FadeIn>

        </div>
      </div>
    </section>
  );
}
