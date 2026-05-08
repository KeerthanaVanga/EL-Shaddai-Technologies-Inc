import { company } from "../../config/company";
import FadeIn from "../ui/FadeIn";

export default function ContactInfo() {
  const f = company.about.founder;
  const c = company.contact;

  return (
    <div className="space-y-6">
      <FadeIn direction="left">
        <div>
          <p className="text-xs font-bold tracking-[0.25em] uppercase mb-1" style={{ color: company.colors.primary }}>
            Contact Information
          </p>
          <h2 className="text-2xl font-black text-gray-900">Reach Out to Us</h2>
        </div>
      </FadeIn>

      {/* Founder contact card */}
      <FadeIn direction="left" delay={80}>
        <div className="rounded-2xl p-6" style={{ backgroundColor: company.colors.dark }}>
          <div className="flex items-center gap-4 mb-5">
            <div
              className="w-12 h-12 rounded-full border-2 flex items-center justify-center text-sm font-black shrink-0"
              style={{ borderColor: company.colors.accent, color: company.colors.accent }}
            >
              {f.initials}
            </div>
            <div>
              <p className="text-white font-bold">{f.name}</p>
              <p className="text-xs font-medium mt-0.5" style={{ color: company.colors.accent }}>{f.title}</p>
            </div>
          </div>
          <div className="space-y-3">
            <a href={`tel:${company.phone}`} className="flex items-center gap-3 text-sm text-gray-300 hover:text-white transition-colors group">
              <span className="w-8 h-8 rounded-lg bg-white/5 group-hover:bg-white/10 flex items-center justify-center transition-colors">📞</span>
              {company.phone}
            </a>
            <a href={`mailto:${company.email}`} className="flex items-center gap-3 text-sm text-gray-300 hover:text-white transition-colors group">
              <span className="w-8 h-8 rounded-lg bg-white/5 group-hover:bg-white/10 flex items-center justify-center transition-colors">✉️</span>
              {company.email}
            </a>
            <div className="flex items-center gap-3 text-sm text-gray-300">
              <span className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center">🏢</span>
              {company.name}
            </div>
          </div>
        </div>
      </FadeIn>

      {/* Office hours */}
      <FadeIn direction="left" delay={160}>
        <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
          <h4 className="font-bold text-gray-900 mb-4 text-sm">Office Hours</h4>
          <div className="space-y-3">
            {c.officeHours.map((row) => (
              <div key={row.day} className="flex items-center justify-between text-sm">
                <span className="text-gray-500">{row.day}</span>
                <span className={`font-semibold ${row.hours === "Closed" ? "text-red-400" : "text-gray-900"}`}>
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
