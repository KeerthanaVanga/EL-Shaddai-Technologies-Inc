import { company } from "../config/company";
import PageHero from "../components/ui/PageHero";
import ReasonsGrid from "../components/whyus/ReasonsGrid";
import WhyUsCTA from "../components/whyus/WhyUsCTA";

export default function WhyUsPage() {
  const w = company.whyUs;
  return (
    <main>
      <PageHero tagline={w.tagline} headline={w.headline} description={w.description} bgImage={company.whyUsHeroImage} />
      <ReasonsGrid />
      <WhyUsCTA />
    </main>
  );
}
