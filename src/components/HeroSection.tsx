import { Search, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const scrollToCards = () => {
    const cardsSection = document.getElementById("category-cards");
    if (cardsSection) {
      cardsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden -mt-16">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
          alt="University Campus"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 md:px-6 text-center pt-16">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 md:mb-6 animate-fade-up drop-shadow-lg">
          Discover Your Campus,{" "}
          <span className="text-mint">Your Way</span>
        </h1>
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 mb-8 md:mb-10 max-w-3xl mx-auto animate-fade-up stagger-1 drop-shadow-md">
          Find the best food spots, accommodation, and hidden gems around your university
        </p>

        {/* Search Bar */}
        <div className="max-w-2xl mx-auto animate-fade-up stagger-2">
          <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-2 flex flex-col sm:flex-row items-center gap-2 shadow-2xl border border-white/20">
            <div className="flex-1 flex items-center gap-3 px-4 w-full">
              <Search className="w-5 h-5 text-white/70 flex-shrink-0" />
              <input
                type="text"
                placeholder="Search for food, hostels, places..."
                className="flex-1 bg-transparent border-none outline-none text-white placeholder:text-white/60 py-3 w-full"
              />
            </div>
            <Button size="lg" className="rounded-xl w-full sm:w-auto">
              Search
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator - positioned below center */}
      <button 
        onClick={scrollToCards}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer group transition-all duration-300 hover:translate-y-1"
      >
        <span className="text-white/70 text-sm font-medium group-hover:text-white transition-colors">
          Scroll to explore
        </span>
        <div className="w-10 h-14 rounded-full border-2 border-white/40 flex items-center justify-center group-hover:border-white/70 transition-colors">
          <ChevronDown className="w-6 h-6 text-white/70 animate-bounce group-hover:text-white" />
        </div>
      </button>
    </section>
  );
};

export default HeroSection;
