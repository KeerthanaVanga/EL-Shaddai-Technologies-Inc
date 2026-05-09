import { Link } from "react-router-dom";
import { company } from "../../config/company";

export default function HomeWhyUs() {
  const points = [
    "AI — Talent Intelligence for smarter, faster candidate matching",
    "Deep technical expertise across all IT domains",
    "Pre-vetted talent pool of 10,000+ candidates",
    "Average placement time of 72 hours",
    "Dedicated account management team",
    "Nationwide reach across all major US markets",
  ];

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Side: Content */}
          <div className="max-w-xl animate-fade-in-right">
            <p className="text-sm font-bold tracking-widest uppercase mb-4" style={{ color: company.colors.primary }}>
              WHY US
            </p>
            <h2 className="text-4xl sm:text-5xl font-black mb-6" style={{ color: company.colors.dark }}>
              Your Strategic Talent Partner
            </h2>
            <p className="text-gray-600 mb-8 leading-relaxed">
              {company.name} has built a reputation for delivering exceptional IT talent solutions with speed, precision, and care. We understand your business challenges and deliver results.
            </p>
            
            <ul className="space-y-4 mb-10">
              {points.map((point, index) => (
                <li key={index} className="flex items-start gap-3">
                  <svg className="flex-shrink-0 w-6 h-6 mt-0.5" viewBox="0 0 24 24" fill="none" style={{ color: company.colors.primary }}>
                    <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M7.5 12L10.5 15L16.5 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span className="text-gray-700 font-medium">{point}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap items-center gap-6">
              <Link
                to="/about"
                className="inline-flex items-center justify-center px-8 py-3.5 text-sm font-bold text-white rounded-md transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5"
                style={{ backgroundColor: company.colors.dark }}
              >
                About Us
              </Link>
              <Link
                to="/careers"
                className="inline-flex items-center gap-2 text-sm font-bold transition-colors hover:opacity-80"
                style={{ color: company.colors.primary }}
              >
                Join Our Team <span className="text-lg leading-none">→</span>
              </Link>
            </div>
          </div>

          {/* Right Side: Images */}
          <div className="relative animate-fade-in-left" style={{ animationDelay: "0.2s" }}>
            <div className="flex flex-col gap-6">
              <img 
                src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=800&q=80" 
                alt="Team meeting" 
                className="w-full h-64 object-cover rounded-xl shadow-lg"
              />
              <img 
                src="/Home/HeroSectionImage.jpeg" 
                alt="IT professionals in server room" 
                className="w-full h-64 object-cover rounded-xl shadow-lg"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
