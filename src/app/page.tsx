import Brands from "@/components/Brands";
import { Carousel } from "@/components/Carousel";
import Hero from "@/components/Hero";
import InfoSec from "@/components/InfoSec";

export default function Home() {
  return (
    <main className="px-2 md:px-6 md:py-4 lg:px-32 lg:py-6">
      <Hero />
      <Brands />
      <Carousel />
      <InfoSec />
    </main>
  );
}
