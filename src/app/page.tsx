import Brands from "@/components/Brands";
import Hero from "@/components/Hero";
import InfoSec from "@/components/InfoSec";
import TrendingNfts from "@/components/TrendingNfts";

export default function Home() {
  return (
    <main className="md:px-6 md:py-4 lg:px-32 lg:py-6">
      <Hero />
      <Brands />
      <TrendingNfts/>
      <InfoSec/>
    </main>
  );
}
