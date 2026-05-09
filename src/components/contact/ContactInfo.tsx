import { company } from "../../config/company";
import FadeIn from "../ui/FadeIn";

export default function ContactInfo() {
  const f = company.about.founder;
  const c = company.contact;

  return (
    <div className="space-y-8">
      <FadeIn direction="left">
        <div>
          <p className="text-xs font-bold tracking-[0.25em] uppercase mb-2" style={{ color: company.colors.primary }}>
            Contact Information
          </p>
          <h2 className="text-3xl font-black text-slate-900">Reach Out to Us</h2>
        </div>
      </FadeIn>

      {/* Founder contact card */}
      <FadeIn direction="left" delay={80}>
        <div className="rounded-xl p-8 shadow-sm" style={{ backgroundColor: company.colors.dark }}>
          <div className="flex items-center gap-5 mb-8">
            <div
              className="w-14 h-14 rounded-full border-2 flex items-center justify-center text-sm font-black shrink-0"
              style={{ borderColor: company.colors.accent, color: company.colors.accent }}
            >
              {f.initials}
            </div>
            <div>
              <p className="text-white font-bold text-lg">{f.name}</p>
              <p className="text-sm font-medium mt-0.5" style={{ color: company.colors.accent }}>{f.title}</p>
              <p className="text-xs text-slate-400 mt-0.5">{company.name}</p>
            </div>
          </div>
          <div className="space-y-6">
            <a href={`tel:${company.phone}`} className="flex items-start gap-4 group">
              <div className="mt-1 shrink-0" style={{ color: company.colors.accent }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              </div>
              <div>
                <p className="text-[10px] uppercase font-bold tracking-wider text-slate-500 mb-0.5">Phone</p>
                <p className="text-sm font-bold text-white group-hover:text-[#C9A84C] transition-colors">{company.phone}</p>
              </div>
            </a>
            <a href={`mailto:${company.email}`} className="flex items-start gap-4 group">
              <div className="mt-1 shrink-0" style={{ color: company.colors.accent }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
              </div>
              <div>
                <p className="text-[10px] uppercase font-bold tracking-wider text-slate-500 mb-0.5">Email</p>
                <p className="text-sm font-bold text-white group-hover:text-[#C9A84C] transition-colors">{company.email}</p>
              </div>
            </a>
            <div className="flex items-start gap-4">
              <div className="mt-1 shrink-0" style={{ color: company.colors.accent }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 21h18"/><path d="M9 8h1"/><path d="M9 12h1"/><path d="M9 16h1"/><path d="M14 8h1"/><path d="M14 12h1"/><path d="M14 16h1"/><path d="M5 21V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16"/></svg>
              </div>
              <div>
                <p className="text-[10px] uppercase font-bold tracking-wider text-slate-500 mb-0.5">Company</p>
                <p className="text-sm font-bold text-white">{company.name}</p>
              </div>
            </div>
          </div>
        </div>
      </FadeIn>

      {/* Office hours */}
      <FadeIn direction="left" delay={160}>
        <div className="bg-white rounded-xl p-8 border border-slate-100 shadow-sm">
          <div className="flex items-center gap-2 mb-5">
            <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: company.colors.primary }}></span>
            <h4 className="font-bold text-slate-900 text-sm">Office Hours</h4>
          </div>
          <div className="space-y-4">
            {c.officeHours.map((row) => (
              <div key={row.day} className="flex items-center justify-between text-xs sm:text-sm">
                <span className="text-slate-500">{row.day}</span>
                <span className={`font-bold ${row.hours === "Closed" ? "text-slate-400" : "text-slate-900"}`}>
                  {row.hours}
                </span>
              </div>
            ))}
          </div>
        </div>
      </FadeIn>
    </div>
  );
}
