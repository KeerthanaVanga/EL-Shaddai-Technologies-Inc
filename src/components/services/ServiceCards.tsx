import { company } from "../../config/company";
import FadeIn from "../ui/FadeIn";

const serviceIcons: Record<string, React.ReactNode> = {
  "it-staffing": <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>,
  "direct-hire": <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="14" x="2" y="7" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>,
  "contract-staffing": <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>,
  "executive-search": <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>,
  "workforce-solutions": <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>,
};

export default function ServiceCards() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-black text-slate-900 mb-4">Our Service Portfolio</h2>
            <p className="text-slate-500 max-w-2xl mx-auto text-lg">
              Every service is designed to solve real talent challenges and deliver measurable business impact.
            </p>
          </div>
        </FadeIn>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {company.services.map((s, i) => (
            <FadeIn key={s.id} delay={i * 100} direction="up">
              <div
                id={s.id}
                className="group bg-white rounded-2xl p-8 shadow-sm border border-slate-100 hover:shadow-lg transition-all duration-300 h-full flex flex-col relative overflow-hidden"
              >
                {/* Decorative top border */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ backgroundImage: `linear-gradient(to right, ${company.colors.primary}, ${company.colors.accent})` }} />

                <div className="flex items-start justify-between mb-6">
                  <div className="text-red-600 transition-transform duration-300 group-hover:scale-110" style={{ color: company.colors.primary }}>
                    {serviceIcons[s.id] || serviceIcons["it-staffing"]}
                  </div>
                  {s.badge && (
                    <span className="text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider" style={{ backgroundColor: `${company.colors.accent}15`, color: company.colors.dark }}>
                      {s.badge}
                    </span>
                  )}
                </div>
                
                <h3 className="text-xl font-black text-slate-900 mb-3">{s.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-8 flex-1 font-medium">{s.description}</p>
                
                {s.features && (
                  <ul className="space-y-3 mt-auto">
                    {s.features.map((f) => (
                      <li key={f} className="flex items-start gap-3 text-sm text-slate-700 font-medium">
                        <div className="mt-0.5 shrink-0 rounded-full w-4 h-4 flex items-center justify-center border border-red-600 text-red-600" style={{ borderColor: company.colors.primary, color: company.colors.primary }}>
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="w-2.5 h-2.5"><polyline points="20 6 9 17 4 12"/></svg>
                        </div>
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
