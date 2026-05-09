import ServicesHero from "../components/services/ServicesHero";
import ServicesBannerImage from "../components/services/ServicesBannerImage";
import ServiceCards from "../components/services/ServiceCards";
import TrustedBy from "../components/services/TrustedBy";
import ServicesCTA from "../components/services/ServicesCTA";

export default function ServicesPage() {
  return (
    <main>
      <ServicesHero />
      <ServicesBannerImage />
      <ServiceCards />
      <TrustedBy />
      <ServicesCTA />
    </main>
  );
}
