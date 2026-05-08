import { company } from "../config/company";
import PageHero from "../components/ui/PageHero";
import ProductPortfolio from "../components/products/ProductPortfolio";

export default function ProductsPage() {
  const p = company.products;
  return (
    <main>
      <PageHero tagline={p.tagline} headline={p.headline} description={p.description} bgImage={company.productsHeroImage} />
      <ProductPortfolio />
    </main>
  );
}
