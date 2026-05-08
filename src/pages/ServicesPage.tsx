import { company } from "../config/company";
import PageHero from "../components/ui/PageHero";
import ServiceCards from "../components/services/ServiceCards";
import TrustedBy from "../components/services/TrustedBy";

export default function ServicesPage() {
  return (
    <main>
      <PageHero
        tagline="What We Offer"
        headline={"Comprehensive IT\nStaffing Services"}
        description="From contract placements to executive search, we deliver tailored talent solutions that align with your business objectives."
        bgImage={company.servicesHeroImage}
      />
      <ServiceCards />
      <TrustedBy />
    </main>
  );
}
