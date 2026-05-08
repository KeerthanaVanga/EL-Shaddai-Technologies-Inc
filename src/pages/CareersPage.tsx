import { company } from "../config/company";
import PageHero from "../components/ui/PageHero";
import WhyWorkHere from "../components/careers/WhyWorkHere";
import OpenPositions from "../components/careers/OpenPositions";

export default function CareersPage() {
  const c = company.careers;
  return (
    <main>
      <PageHero tagline={c.tagline} headline={c.headline} description={c.description} bgImage={company.careersHeroImage} />
      <WhyWorkHere />
      <OpenPositions />
    </main>
  );
}
