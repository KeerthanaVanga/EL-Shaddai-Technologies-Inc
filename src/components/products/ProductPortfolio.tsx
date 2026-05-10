import { company } from "../../config/company";
import SectionHeader from "../ui/SectionHeader";
import FadeIn from "../ui/FadeIn";
import { useGetAllProducts } from "../../hooks/useProducts";

export default function ProductPortfolio() {
  const { data: productsResponse, isLoading, error } = useGetAllProducts();
  const products = productsResponse?.data || [];
  const { comingSoonMessage } = company.products;

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <SectionHeader
            headline="Our Product Portfolio"
            description="Purpose-built solutions to streamline your technology operations and talent management."
          />
        </FadeIn>

        {isLoading ? (
          <FadeIn delay={100}>
            <div className="max-w-xl mx-auto bg-white rounded-2xl border border-gray-100 p-16 text-center shadow-sm">
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl mx-auto mb-5 animate-spin"
                style={{ backgroundColor: `${company.colors.accent}20` }}
              >
                ⏳
              </div>
              <h3 className="text-xl font-black text-gray-900 mb-3">Loading Products...</h3>
              <p className="text-gray-500 leading-relaxed text-sm">Fetching our product portfolio...</p>
            </div>
          </FadeIn>
        ) : error ? (
          <FadeIn delay={100}>
            <div className="max-w-xl mx-auto bg-white rounded-2xl border border-red-100 p-16 text-center shadow-sm">
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl mx-auto mb-5"
                style={{ backgroundColor: `${company.colors.accent}20` }}
              >
                ⚠️
              </div>
              <h3 className="text-xl font-black text-gray-900 mb-3">Error Loading Products</h3>
              <p className="text-gray-500 leading-relaxed text-sm">Unable to load products at this time. Please try again later.</p>
            </div>
          </FadeIn>
        ) : products.length === 0 ? (
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
              <FadeIn key={p.id} delay={i * 80} direction="up">
                <div className="bg-white rounded-2xl p-7 border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-full">
                  <span className="text-3xl block mb-4">📦</span>
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="font-black text-gray-900">{p.name}</h3>
                    {p.tagline && (
                      <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-blue-50 text-blue-700 border border-blue-100">
                        {p.tagline}
                      </span>
                    )}
                  </div>
                  {p.features && (
                    <p className="text-xs font-semibold text-gray-400 mb-2">{p.features}</p>
                  )}
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
