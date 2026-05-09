import { Link } from "react-router-dom";
import { company } from "../../config/company";
import FadeIn from "../ui/FadeIn";
import SectionHeader from "../ui/SectionHeader";

export default function WeAreHiring() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <SectionHeader tagline="OPPORTUNITIES AWAIT" headline="We Are Hiring!" />
        </FadeIn>
        
        <FadeIn delay={100} className="mt-12">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl group w-full h-[300px] md:h-[450px]">
            <img 
              src="/Career/CareerHiringImage.jpeg"
              alt="Busy office" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            
            {/* Gradient overlay for text */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <h3 className="text-xl md:text-2xl font-bold text-white max-w-2xl">
                Join {company.name} — where your career takes off.
              </h3>
              
              <Link
                to="#open-positions"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('open-positions')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="shrink-0 inline-flex items-center gap-2 px-8 py-3.5 text-sm font-bold text-slate-900 rounded-md transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                style={{ backgroundColor: company.colors.accent }}
              >
                Apply Today <span className="text-lg leading-none">→</span>
              </Link>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
