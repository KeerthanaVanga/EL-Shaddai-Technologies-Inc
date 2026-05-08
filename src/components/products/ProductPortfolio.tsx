import { company } from "../../config/company";
import SectionHeader from "../ui/SectionHeader";
import FadeIn from "../ui/FadeIn";

interface Product {
  title: string;
  description: string;
  icon: string;
}

export default function ProductPortfolio() {
  const { items, comingSoonMessage } = company.products;
  const products = items as Product[];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <SectionHeader
            headline="Our Product Portfolio"
            description="Purpose-built solutions to streamline your technology operations and talent management."
          />
        </FadeIn>

        {products.length === 0 ? (
          <FadeIn delay={100}>
            <div className="max-w-xl mx-auto bg-white rounded-2xl border border-gray-100 p-16 text-center shadow-sm">
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl mx-auto mb-5"
                style={{ backgroundColor: `${company.colors.accent}20` }}
              >
                📦
              </div>
              <h3 className="text-xl font-black text-gray-900 mb-3">Products Coming Soon</h3>
              <p className="text-gray-500 leading-relaxed text-sm">{comingSoonMessage}</p>
            </div>
          </FadeIn>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((p, i) => (
              <FadeIn key={p.title} delay={i * 80} direction="up">
                <div className="bg-white rounded-2xl p-7 border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-full">
                  <span className="text-3xl block mb-4">{p.icon}</span>
                  <h3 className="font-black text-gray-900 mb-2">{p.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{p.description}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
