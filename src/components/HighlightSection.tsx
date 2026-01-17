import { useState, useEffect } from "react";
import highlightFood from "@/assets/highlight-food.jpg";
import highlightHostel from "@/assets/highlight-hostel.jpg";
import highlightExplore from "@/assets/highlight-explore.jpg";
import highlightStudy from "@/assets/highlight-study.jpg";

const images = [
  {
    src: highlightFood,
    alt: "Food court with delicious cuisines",
    title: "Discover Amazing Food",
    category: "Food & Dining",
  },
  {
    src: highlightHostel,
    alt: "Cozy student hostel room",
    title: "Find Your Perfect Stay",
    category: "Accommodation",
  },
  {
    src: highlightExplore,
    alt: "Students exploring scenic viewpoint",
    title: "Explore New Places",
    category: "Adventure",
  },
  {
    src: highlightStudy,
    alt: "Students studying together",
    title: "Perfect Study Spots",
    category: "Study Zones",
  },
];

const HighlightSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % images.length);
        setIsTransitioning(false);
      }, 500);
    }, 7000);

    return () => clearInterval(interval);
  }, []);

  const currentImage = images[currentIndex];

  return (
    <section className="py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 animate-fade-up">
            Featured <span className="text-accent">Highlights</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto animate-fade-up stagger-1">
            See what other students are discovering around their campus
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Main Image */}
          <div className="relative aspect-video rounded-3xl overflow-hidden shadow-lg">
            <img
              src={currentImage.src}
              alt={currentImage.alt}
              className={`w-full h-full object-cover transition-all duration-500 ${
                isTransitioning ? "opacity-0 scale-105" : "opacity-100 scale-100"
              }`}
            />
            
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-transparent to-transparent" />
            
            {/* Content */}
            <div className={`absolute bottom-0 left-0 right-0 p-8 transition-all duration-500 ${
              isTransitioning ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"
            }`}>
              <span className="inline-block px-3 py-1 rounded-full bg-accent text-accent-foreground text-sm font-medium mb-3">
                {currentImage.category}
              </span>
              <h3 className="text-2xl md:text-3xl font-bold text-primary-foreground">
                {currentImage.title}
              </h3>
            </div>
          </div>

          {/* Indicators */}
          <div className="flex justify-center gap-2 mt-6">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setIsTransitioning(true);
                  setTimeout(() => {
                    setCurrentIndex(index);
                    setIsTransitioning(false);
                  }, 300);
                }}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-accent w-8"
                    : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                }`}
              />
            ))}
          </div>

          {/* Thumbnail Preview */}
          <div className="hidden md:flex justify-center gap-4 mt-8">
            {images.map((image, index) => (
              <button
                key={index}
                onClick={() => {
                  setIsTransitioning(true);
                  setTimeout(() => {
                    setCurrentIndex(index);
                    setIsTransitioning(false);
                  }, 300);
                }}
                className={`relative w-20 h-20 rounded-xl overflow-hidden transition-all duration-300 ${
                  index === currentIndex
                    ? "ring-2 ring-accent ring-offset-2 ring-offset-background scale-110"
                    : "opacity-60 hover:opacity-100"
                }`}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HighlightSection;
