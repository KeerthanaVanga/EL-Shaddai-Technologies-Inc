import { company } from "../../config/company";
import SectionHeader from "../ui/SectionHeader";
import FadeIn from "../ui/FadeIn";

export default function FounderSpotlight() {
  const f = company.about.founder;
  return (
    <section className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <SectionHeader tagline="Leadership" headline="Founder Spotlight" />
        </FadeIn>
        
        <FadeIn delay={100} className="mt-12">
          <div className="bg-white overflow-hidden flex flex-col md:flex-row gap-12">
            
            {/* Left dark card */}
            <div
              className="md:w-64 shrink-0 flex flex-col items-center justify-center p-8 text-center rounded-xl shadow-lg relative"
              style={{ background: `linear-gradient(180deg, ${company.colors.darkSecondary} 0%, ${company.colors.dark} 100%)` }}
            >
              <div
                className="w-28 h-28 rounded-full border-[3px] overflow-hidden mb-6"
                style={{ borderColor: company.colors.accent }}
              >
                <img src={f.imageUrl} alt={f.name} className="w-full h-full object-cover" />
              </div>
              <p className="text-white font-bold text-lg leading-tight mb-1">{f.name}</p>
              <p className="text-sm font-medium mb-8" style={{ color: company.colors.accent }}>{f.title}</p>
              
              <div className="mt-auto pt-4 border-t border-white/10 w-full">
                 <p className="text-xs text-gray-400">❖ elshaddai.com</p>
              </div>
            </div>

            {/* Right bio */}
            <div className="flex flex-col justify-center">
              <p className="text-slate-600 leading-relaxed mb-8">{f.bio}</p>
              <div className="flex flex-col gap-4">
                <a
                  href={`tel:${f.phone}`}
                  className="flex items-center gap-3 text-sm font-semibold text-slate-800 hover:text-[#8B1A1A] transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={company.colors.primary} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                  {f.phone}
                </a>
                <a
                  href={`mailto:${f.email}`}
                  className="flex items-center gap-3 text-sm font-semibold text-slate-800 hover:text-[#8B1A1A] transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={company.colors.primary} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                  {f.email}
                </a>
              </div>
            </div>

          </div>
        </FadeIn>
      </div>
    </section>
  );
}
