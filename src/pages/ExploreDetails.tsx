import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Star, MapPin, Clock, Users, SlidersHorizontal, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const mockPlaces = [
  { id: 1, name: "Sunset Park", type: "Park", rating: 4.6, reviews: 234, distance: "1.2 km", timing: "6 AM - 9 PM", crowd: "Medium", image: "https://images.unsplash.com/photo-1568515387631-8b650bbcdb90?w=400", comment: "Perfect for evening walks" },
  { id: 2, name: "Coffee Corner", type: "Cafe", rating: 4.8, reviews: 456, distance: "0.5 km", timing: "8 AM - 11 PM", crowd: "High", image: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=400", comment: "Best coffee in town!" },
  { id: 3, name: "City Mall", type: "Mall", rating: 4.4, reviews: 789, distance: "2.5 km", timing: "10 AM - 10 PM", crowd: "High", image: "https://images.unsplash.com/photo-1519567241046-7f570eee3ce6?w=400", comment: "Everything under one roof" },
  { id: 4, name: "Lake View Point", type: "Scenic", rating: 4.9, reviews: 123, distance: "4.0 km", timing: "24/7", crowd: "Low", image: "https://images.unsplash.com/photo-1439066615861-d1af74d74000?w=400", comment: "Breathtaking sunsets" },
  { id: 5, name: "Sports Complex", type: "Sports", rating: 4.5, reviews: 345, distance: "1.8 km", timing: "5 AM - 10 PM", crowd: "Medium", image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=400", comment: "Great facilities" },
  { id: 6, name: "Art Gallery", type: "Culture", rating: 4.7, reviews: 89, distance: "3.2 km", timing: "10 AM - 6 PM", crowd: "Low", image: "https://images.unsplash.com/photo-1531243269054-5ebf6f34081e?w=400", comment: "Inspiring exhibitions" },
];

type TypeFilter = "all" | "Park" | "Cafe" | "Mall" | "Scenic" | "Sports" | "Culture";

const PlaceCard = ({ item, index }: { item: typeof mockPlaces[0]; index: number }) => {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => { if (entry.isIntersecting) setIsVisible(true); }, { threshold: 0.1 });
    if (cardRef.current) observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, []);

  const getCrowdColor = (crowd: string) => {
    switch (crowd) {
      case "Low": return "bg-green-500";
      case "Medium": return "bg-yellow-500";
      case "High": return "bg-red-500";
      default: return "bg-gray-500";
    }
  };

  return (
    <div
      ref={cardRef}
      className={`group bg-card rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 border border-border hover:border-primary/30 hover:-translate-y-1 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay: `${index * 50}ms` }}
    >
      <div className="relative h-48 overflow-hidden">
        <img src={item.image} alt={item.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        <Badge className="absolute top-3 left-3 bg-primary">{item.type}</Badge>
        <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-full flex items-center gap-1">
          <Star className="w-3.5 h-3.5 text-yellow-400 fill-yellow-400" />
          <span className="text-white text-sm font-semibold">{item.rating}</span>
        </div>
      </div>
      
      <div className="p-4">
        <h3 className="font-bold text-lg text-foreground mb-2 group-hover:text-primary transition-colors">{item.name}</h3>
        <div className="space-y-2 mb-3">
          <div className="flex items-center gap-2 text-muted-foreground text-sm"><MapPin className="w-3 h-3" /><span>{item.distance}</span></div>
          <div className="flex items-center gap-2 text-muted-foreground text-sm"><Clock className="w-3 h-3" /><span>{item.timing}</span></div>
          <div className="flex items-center gap-2 text-sm">
            <Users className="w-3 h-3 text-muted-foreground" />
            <Badge className={`${getCrowdColor(item.crowd)} text-white text-xs`}>{item.crowd} Crowd</Badge>
          </div>
        </div>
        <p className="text-muted-foreground text-xs italic">"{item.comment}"</p>
      </div>
    </div>
  );
};

const ExploreDetails = () => {
  const [filter, setFilter] = useState<TypeFilter>("all");
  const [showFilters, setShowFilters] = useState(false);

  const filteredItems = mockPlaces.filter((item) => filter === "all" || item.type === filter);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20 pb-8">
        <div className="relative h-56 md:h-72 overflow-hidden">
          <img src="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=1200" alt="Explore Banner" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/80 via-teal-800/60 to-green-700/50" />
          <div className="absolute inset-0 flex items-end pb-8">
            <div className="container mx-auto px-4">
              <Link to="/home" className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-4 transition-colors group">
                <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" /><span className="text-sm font-medium">Back to Home</span>
              </Link>
              <h1 className="text-3xl md:text-5xl font-bold text-white tracking-tight">Explore Nearby</h1>
              <p className="text-white/80 mt-2 text-lg">Discover amazing places around your campus</p>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
            <span className="text-muted-foreground text-sm">{filteredItems.length} places found</span>
            <Button variant="outline" size="sm" onClick={() => setShowFilters(!showFilters)} className="md:hidden">
              <SlidersHorizontal className="w-4 h-4 mr-2" />Filters
            </Button>
            <div className="hidden md:flex flex-wrap gap-2">
              {(["all", "Park", "Cafe", "Mall", "Scenic", "Sports", "Culture"] as TypeFilter[]).map((f) => (
                <Button key={f} variant={filter === f ? "default" : "outline"} size="sm" onClick={() => setFilter(f)}>{f === "all" ? "All" : f}</Button>
              ))}
            </div>
          </div>

          {showFilters && (
            <div className="md:hidden bg-card rounded-xl p-4 mb-6 border border-border animate-fade-in">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold">Filters</h3>
                <Button variant="ghost" size="icon" onClick={() => setShowFilters(false)}><X className="w-4 h-4" /></Button>
              </div>
              <div className="flex flex-wrap gap-2">
                {(["all", "Park", "Cafe", "Mall", "Scenic", "Sports", "Culture"] as TypeFilter[]).map((f) => (
                  <Button key={f} variant={filter === f ? "default" : "outline"} size="sm" onClick={() => setFilter(f)}>{f === "all" ? "All" : f}</Button>
                ))}
              </div>
            </div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item, index) => (
              <PlaceCard key={item.id} item={item} index={index} />
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ExploreDetails;
