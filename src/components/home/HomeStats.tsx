import { company } from "../../config/company";

export default function HomeStats() {
  return (
    <>
      {/* Banner */}
      <section className="py-7" style={{ backgroundColor: company.colors.primary }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-white font-black text-xl mb-1">Empowering Businesses with Top-Tier IT Talent</p>
          <p className="text-white/80 text-sm max-w-lg mx-auto">From startups to Fortune 500s, we match exceptional technology professionals with companies that need them most.</p>
        </div>
      </section>
      {/* Stats row */}
      <section style={{ backgroundColor: company.colors.dark }} className="py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-3 divide-x divide-white/10">
            {company.stats.map((stat) => (
              <div key={stat.label} className="text-center px-4 sm:px-10 group">
                <div className="text-4xl sm:text-5xl font-black mb-1 transition-transform duration-300 group-hover:scale-105" style={{ color: company.colors.accent }}>{stat.value}</div>
                <div className="text-xs sm:text-sm text-gray-400 tracking-wide">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
