import Brands from "@/components/Brands";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main className="md:px-6 md:py-4 lg:px-32 lg:py-6">
      <Hero />
      <Brands/>
    </main>
  );
}
