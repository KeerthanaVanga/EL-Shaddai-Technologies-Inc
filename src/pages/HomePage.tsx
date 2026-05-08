import HomeHero from "../components/home/HomeHero";
import HomeStats from "../components/home/HomeStats";
import HiringBanner from "../components/home/HiringBanner";
import HomeServices from "../components/home/HomeServices";

export default function HomePage() {
  return (
    <main>
      <HomeHero />
      <HomeStats />
      <HomeServices />
      <HiringBanner />
    </main>
  );
}
