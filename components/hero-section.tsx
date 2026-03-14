import Image from "next/image";
import { Button } from "@/components/ui/button";
import { MapPin } from "lucide-react";

export function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-16">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-restaurant.jpg"
          alt="Moksh Venture Restaurant Interior"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-foreground/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <p className="text-secondary/90 text-lg md:text-xl mb-4 tracking-widest uppercase">
          Welcome to
        </p>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-card mb-6 text-balance">
          Moksh Venture
        </h1>
        <p className="text-secondary/90 text-lg md:text-xl mb-4 flex items-center justify-center gap-2">
          <MapPin className="h-5 w-5" />
          Dehradun, Uttarakhand
        </p>
        <p className="text-secondary/80 text-base md:text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
          Experience the authentic flavors of India in the heart of Dehradun. 
          Our culinary journey blends traditional recipes with modern elegance.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            asChild
            size="lg"
            className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-6 text-lg"
          >
            <a href="#menu">Explore Menu</a>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-card text-card bg-transparent hover:bg-card/10 px-8 py-6 text-lg"
          >
            <a href="#location">Find Us</a>
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-card/50 rounded-full flex justify-center pt-2">
          <div className="w-1 h-3 bg-card/50 rounded-full" />
        </div>
      </div>
    </section>
  );
}
