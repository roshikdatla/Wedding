import { Navigation } from "@/components/shared/Navigation";
import { Footer } from "@/components/shared/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { AskSection } from "@/components/sections/AskSection";
import { DetailsSection } from "@/components/sections/DetailsSection";
import { GallerySection } from "@/components/sections/GallerySection";
import { ResponseSection } from "@/components/sections/ResponseSection";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <HeroSection />
        <AskSection />
        <DetailsSection />
        <GallerySection />
        <ResponseSection />
      </main>
      <Footer />
    </div>
  );
}
