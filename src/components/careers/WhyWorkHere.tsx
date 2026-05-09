import { company } from "../../config/company";
import FadeIn from "../ui/FadeIn";

const icons: Record<string, React.ReactNode> = {
  "career-growth": <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 22h20"/><path d="M12 18V6"/><path d="M16 10l-4-4-4 4"/></svg>,
  "great-culture": <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>,
  "competitive-pay": <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"/><path d="M12 18V6"/></svg>,
  "expert-team": <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>,
};

export default function WhyWorkHere() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Text & Features Side */}
          <FadeIn direction="left">
            <div>
              <p className="text-xs font-bold tracking-[0.25em] uppercase mb-4" style={{ color: company.colors.primary }}>
                WHY EL-SHADDAI
              </p>
              <h2 className="text-4xl sm:text-5xl font-black text-slate-900 mb-6">Why Work With Us?</h2>
              <p className="text-slate-600 leading-relaxed mb-12 text-lg">
                At {company.name}, we believe our people are our greatest asset. We invest in your growth, celebrate your wins, and create an environment where exceptional work thrives.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {company.careers.whyWorkHere.map((w, i) => (
                  <div key={w.title} className="flex items-start gap-4">
                    <div className="shrink-0 mt-1" style={{ color: company.colors.primary }}>
                      {icons[w.icon as string] || icons["expert-team"]}
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 text-sm mb-1">{w.title}</h4>
                      <p className="text-xs text-slate-500 leading-relaxed font-medium">{w.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>

          {/* Right Image Side */}
          <FadeIn direction="right" delay={100}>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl h-[400px] lg:h-[500px]">
              <img
                src={company.servicesHeroImage} 
                alt="IT professionals"
                className="w-full h-full object-cover"
              />
            </div>
          </FadeIn>
          
        </div>
      </div>
    </section>
  );
}
