import { company } from "../../config/company";

export default function ServicesBannerImage() {
  return (
    <section className="relative h-64 md:h-80 w-full overflow-hidden">
      <img 
        src={company.servicesHeroImage} 
        alt="Expert talent matching" 
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/40" />
      <div className="absolute inset-0 flex items-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-wide max-w-2xl drop-shadow-lg animate-fade-in-up">
          Expert talent matching for every technology role
        </h2>
      </div>
    </section>
  );
}
