import { Link } from "react-router-dom";
import { company } from "../../config/company";

export default function HiringBanner() {
  return (
    <section className="relative h-64 sm:h-80 w-full overflow-hidden flex items-center justify-center">
      <div className="absolute inset-0 z-0">
        <img 
          src="/el-sheddai_images/View_Open_Positions.png" 
          alt="Office space with plants" 
          className="w-full h-full object-cover" 
        />
        <div className="absolute inset-0 bg-white/10" />
      </div>
      
      <div className="relative z-10 animate-fade-in-up">
        <Link
          to="/careers"
          className="inline-flex items-center gap-2 px-8 py-3.5 text-sm font-bold text-white rounded-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
          style={{ backgroundColor: company.colors.primary }}
        >
          View Open Positions <span className="text-lg leading-none">→</span>
        </Link>
      </div>
    </section>
  );
}
