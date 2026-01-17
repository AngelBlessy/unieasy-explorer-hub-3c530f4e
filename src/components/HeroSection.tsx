import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-image.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Students exploring campus"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy/60 via-navy/40 to-background" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-4 animate-fade-up">
          Discover Your Campus,{" "}
          <span className="text-accent">Your Way</span>
        </h1>
        <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto animate-fade-up stagger-1">
          Find the best food spots, accommodation, and hidden gems around your university
        </p>

        {/* Search Bar */}
        <div className="max-w-2xl mx-auto animate-fade-up stagger-2">
          <div className="glass-card rounded-2xl p-2 flex items-center gap-2">
            <div className="flex-1 flex items-center gap-3 px-4">
              <Search className="w-5 h-5 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search for food, hostels, places..."
                className="flex-1 bg-transparent border-none outline-none text-foreground placeholder:text-muted-foreground py-3"
              />
            </div>
            <Button variant="hero" size="lg">
              Search
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
