import { Link } from "react-router-dom";
import { company } from "../../config/company";

export default function HiringBanner() {
  return (
    <section className="relative w-full overflow-hidden flex items-center justify-center">
      <div className="w-full">
        <img 
          src="/el-sheddai_images/View_Open_Positions.png" 
          alt="We're Hiring - Join Our Team" 
          className="w-full h-auto object-contain block"
        />
      </div>
      
      <div className="absolute inset-0 flex items-center justify-center z-10">
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