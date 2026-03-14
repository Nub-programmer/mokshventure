import { HeroSection } from "@/components/hero-section";
import { MenuSection } from "@/components/menu-section";
import { GallerySection } from "@/components/gallery-section";
import { LocationSection } from "@/components/location-section";
import { FloatingButtons } from "@/components/floating-buttons";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <MenuSection />
      <GallerySection />
      <LocationSection />
      <Footer />
      <FloatingButtons />
    </main>
  );
}
