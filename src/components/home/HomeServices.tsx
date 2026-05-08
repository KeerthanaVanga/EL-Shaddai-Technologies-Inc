import { Link } from "react-router-dom";
import { company } from "../../config/company";
import SectionHeader from "../ui/SectionHeader";

export default function HomeServices() {
  // show only first 4 on home
  const preview = company.services.slice(0, 4);

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          tagline="What We Do"
          headline="Our Core Services"
          description="Comprehensive IT talent solutions tailored to your business needs."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
          {preview.map((svc, i) => (
            <ServiceCard key={svc.id} service={svc} delay={i * 0.07} />
          ))}
        </div>
        <div className="text-center mt-12">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 px-8 py-3.5 text-sm font-bold rounded-md border-2 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md"
            style={{ borderColor: company.colors.dark, color: company.colors.dark }}
          >
            View All Services →
          </Link>
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ service, delay }: { service: typeof company.services[0]; delay: number }) {
  return (
    <div
      className="group bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 cursor-pointer animate-fade-in-up"
      style={{ animationDelay: `${delay}s` }}
    >
      <div
        className="w-11 h-11 rounded-xl flex items-center justify-center text-xl mb-4 transition-transform duration-300 group-hover:scale-110"
        style={{ backgroundColor: `${company.colors.primary}18` }}
      >
        {service.icon}
      </div>
      <h3 className="text-base font-bold mb-2 text-gray-900">{service.title}</h3>
      <p className="text-sm text-gray-500 leading-relaxed">{service.description}</p>
      <div
        className="mt-4 w-0 h-0.5 group-hover:w-10 transition-all duration-300 rounded-full"
        style={{ backgroundColor: company.colors.primary }}
      />
    </div>
  );
}
