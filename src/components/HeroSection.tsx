import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden -mt-16">
      {/* Background Video - Full Screen */}
      <div className="absolute inset-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source
            src="https://videos.pexels.com/video-files/3769790/3769790-uhd_2560_1440_25fps.mp4"
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-0 bg-black/50" />
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
          <div className="bg-card/95 backdrop-blur-lg rounded-2xl p-2 flex flex-col sm:flex-row items-center gap-2 shadow-lg border border-border/50">
            <div className="flex-1 flex items-center gap-3 px-4 w-full">
              <Search className="w-5 h-5 text-muted-foreground flex-shrink-0" />
              <input
                type="text"
                placeholder="Search for food, hostels, places..."
                className="flex-1 bg-transparent border-none outline-none text-foreground placeholder:text-muted-foreground py-3 w-full"
              />
            </div>
            <Button size="lg" className="rounded-xl w-full sm:w-auto">
              Search
            </Button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce hidden md:block">
          <div className="w-6 h-10 rounded-full border-2 border-white/50 flex items-start justify-center p-2">
            <div className="w-1.5 h-3 bg-white/70 rounded-full animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
