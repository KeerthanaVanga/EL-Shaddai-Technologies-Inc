import { company } from "../config/company";
import PageHero from "../components/ui/PageHero";
import MissionVision from "../components/about/MissionVision";
import FounderSpotlight from "../components/about/FounderSpotlight";
import CoreValues from "../components/about/CoreValues";

export default function AboutPage() {
  const a = company.about;
  return (
    <main>
      <PageHero tagline={a.tagline} headline={a.headline} description={a.description} bgImage={company.aboutHeroImage} />
      <MissionVision />
      <FounderSpotlight />
      <CoreValues />
    </main>
  );
}
