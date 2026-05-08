import { Link } from "react-router-dom";
import { company } from "../../config/company";
import SectionHeader from "../ui/SectionHeader";
import FadeIn from "../ui/FadeIn";

interface Position {
  title: string;
  department: string;
  location: string;
  type: string;
}

export default function OpenPositions() {
  const positions = company.careers.openPositions as Position[];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <SectionHeader
            tagline="Open Positions"
            headline="Current Opportunities"
            description="Explore our open roles and find your next career move."
          />
        </FadeIn>

        {positions.length === 0 ? (
          <FadeIn delay={100}>
            <div className="bg-white rounded-2xl border border-gray-100 p-16 text-center shadow-sm">
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl mx-auto mb-5"
                style={{ backgroundColor: `${company.colors.primary}10` }}
              >
                💼
              </div>
              <h3 className="text-xl font-black text-gray-900 mb-2">No Open Positions</h3>
              <p className="text-gray-500 mb-8 max-w-sm mx-auto text-sm leading-relaxed">
                {company.careers.noPositionsMessage}
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-bold text-white rounded-lg transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg"
                style={{ backgroundColor: company.colors.primary }}
              >
                Contact Our Recruiting Team
              </Link>
            </div>
          </FadeIn>
        ) : (
          <div className="space-y-4">
            {positions.map((p, i) => (
              <FadeIn key={p.title} delay={i * 60}>
                <div className="bg-white rounded-xl px-6 py-5 border border-gray-100 hover:shadow-md transition-all duration-200 flex items-center justify-between gap-4">
                  <div>
                    <h3 className="font-bold text-gray-900">{p.title}</h3>
                    <p className="text-sm text-gray-400 mt-1">
                      {p.department}
                      <span className="mx-2 text-gray-200">·</span>
                      {p.location}
                      <span className="mx-2 text-gray-200">·</span>
                      <span className="font-medium" style={{ color: company.colors.accent }}>{p.type}</span>
                    </p>
                  </div>
                  <Link
                    to="/contact"
                    className="shrink-0 text-sm font-bold px-5 py-2.5 rounded-lg text-white transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md"
                    style={{ backgroundColor: company.colors.primary }}
                  >
                    Apply →
                  </Link>
                </div>
              </FadeIn>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
