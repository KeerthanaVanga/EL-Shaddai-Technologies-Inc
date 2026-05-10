import { Link } from "react-router-dom";
import { company } from "../../config/company";
import SectionHeader from "../ui/SectionHeader";
import FadeIn from "../ui/FadeIn";
import { useGetAllJobsForCareers } from "../../hooks/useCareers";

export default function OpenPositions() {
  const { data: jobs = [], isLoading, error } = useGetAllJobsForCareers();
  const positions = jobs;

  return (
    <section id="open-positions" className="py-24 bg-slate-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <SectionHeader
            tagline="Open Positions"
            headline="Current Opportunities"
            description={`Explore our open roles and find your next career move with ${company.name}.`}
          />
        </FadeIn>

        {isLoading ? (
          <FadeIn delay={100} className="mt-12">
            <div className="bg-white rounded-2xl border border-slate-100 p-16 text-center shadow-sm">
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl mx-auto mb-5 animate-spin">
                ⏳
              </div>
              <h3 className="text-xl font-black text-slate-900 mb-2">Loading Positions...</h3>
              <p className="text-slate-500 max-w-sm mx-auto text-sm leading-relaxed font-medium">
                Fetching current job openings...
              </p>
            </div>
          </FadeIn>
        ) : error ? (
          <FadeIn delay={100} className="mt-12">
            <div className="bg-white rounded-2xl border border-red-100 p-16 text-center shadow-sm">
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl mx-auto mb-5">
                ⚠️
              </div>
              <h3 className="text-xl font-black text-slate-900 mb-2">Error Loading Positions</h3>
              <p className="text-slate-500 mb-8 max-w-sm mx-auto text-sm leading-relaxed font-medium">
                Unable to load job openings at this time. Please try again later.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-bold text-white rounded-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                style={{ backgroundColor: company.colors.primary }}
              >
                Contact Our Recruiting Team
              </Link>
            </div>
          </FadeIn>
        ) : positions.length === 0 ? (
          <FadeIn delay={100} className="mt-12">
            <div className="bg-white rounded-2xl border border-slate-100 p-16 text-center shadow-sm">
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl mx-auto mb-5"
                style={{ backgroundColor: `${company.colors.primary}10` }}
              >
                💼
              </div>
              <h3 className="text-xl font-black text-slate-900 mb-2">No Open Positions</h3>
              <p className="text-slate-500 mb-8 max-w-sm mx-auto text-sm leading-relaxed font-medium">
                {company.careers.noPositionsMessage}
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-bold text-white rounded-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                style={{ backgroundColor: company.colors.primary }}
              >
                Contact Our Recruiting Team
              </Link>
            </div>
          </FadeIn>
        ) : (
          <div className="space-y-6 mt-12">
            {positions.map((p, i) => (
              <FadeIn key={p.id} delay={i * 100}>
                <div className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col gap-5">

                  {/* Header Row */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <h3 className="text-xl font-black text-slate-900">{p.title}</h3>
                    <span className="self-start sm:self-auto text-[10px] font-bold px-3 py-1.5 rounded-full uppercase tracking-wider text-slate-700 bg-slate-100 border border-slate-200">
                      {p.type}
                    </span>
                  </div>

                  {/* Meta Details Row */}
                  <div className="flex flex-wrap items-center gap-6">
                    <div className="flex items-center gap-2 text-sm text-slate-600 font-medium">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: company.colors.primary }}><rect width="20" height="14" x="2" y="7" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>
                      {p.department}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-slate-600 font-medium">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: company.colors.primary }}><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
                      {p.location}
                    </div>
                  </div>

                  {/* Description + Requirements */}
                  {p.description && (
                    <p className="text-sm text-slate-600 leading-relaxed">{p.description}</p>
                  )}
                  {p.requirements && (
                    <p className="text-sm text-slate-500 font-medium">
                      <span className="font-bold text-slate-700">Skills:</span> {p.requirements}
                    </p>
                  )}

                  {/* Action Button */}
                  <div>
                    <Link
                      to="/contact"
                      className="inline-flex items-center justify-center text-sm font-bold px-6 py-2.5 rounded-md text-white transition-all duration-300 hover:shadow-md hover:-translate-y-0.5"
                      style={{ backgroundColor: company.colors.primary }}
                    >
                      Apply Now
                    </Link>
                  </div>

                </div>
              </FadeIn>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
