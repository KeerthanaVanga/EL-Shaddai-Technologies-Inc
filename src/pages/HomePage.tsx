import HomeHero from "../components/home/HomeHero";
import HomeStats from "../components/home/HomeStats";
import HiringBanner from "../components/home/HiringBanner";
import HomeServices from "../components/home/HomeServices";
import HomeWhyUs from "../components/home/HomeWhyUs";
import HomeCTA from "../components/home/HomeCTA";

export default function HomePage() {
  return (
    <main>
      <HomeHero />
      <HomeStats />
      <HomeServices />
      <HiringBanner />
      <HomeWhyUs />
      <HomeCTA />
    </main>
  );
}
