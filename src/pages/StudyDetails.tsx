import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Star, MapPin, Clock, Wifi, Volume2, VolumeX, SlidersHorizontal, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const mockStudySpots = [
  { id: 1, name: "Central Library", type: "Library", rating: 4.8, reviews: 456, distance: "0.2 km", timing: "8 AM - 10 PM", noise: "Silent", hasWifi: true, image: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?w=400", comment: "Best study spot on campus" },
  { id: 2, name: "Study Cafe", type: "Cafe", rating: 4.5, reviews: 234, distance: "0.8 km", timing: "7 AM - 11 PM", noise: "Low", hasWifi: true, image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=400", comment: "Great coffee while studying" },
  { id: 3, name: "Reading Room", type: "Library", rating: 4.7, reviews: 178, distance: "0.5 km", timing: "9 AM - 9 PM", noise: "Silent", hasWifi: true, image: "https://images.unsplash.com/photo-1568667256549-094345857637?w=400", comment: "Peaceful atmosphere" },
  { id: 4, name: "Co-working Hub", type: "Coworking", rating: 4.4, reviews: 89, distance: "1.5 km", timing: "24/7", noise: "Medium", hasWifi: true, image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=400", comment: "Modern facilities" },
  { id: 5, name: "Garden Study Area", type: "Outdoor", rating: 4.3, reviews: 67, distance: "0.3 km", timing: "6 AM - 8 PM", noise: "Low", hasWifi: false, image: "https://images.unsplash.com/photo-1588072432836-e10032774350?w=400", comment: "Fresh air while studying" },
  { id: 6, name: "Department Lab", type: "Lab", rating: 4.6, reviews: 145, distance: "0.1 km", timing: "9 AM - 6 PM", noise: "Low", hasWifi: true, image: "https://images.unsplash.com/photo-1562774053-701939374585?w=400", comment: "Access to resources" },
];

type TypeFilter = "all" | "Library" | "Cafe" | "Coworking" | "Outdoor" | "Lab";

const StudyCard = ({ item, index }: { item: typeof mockStudySpots[0]; index: number }) => {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => { if (entry.isIntersecting) setIsVisible(true); }, { threshold: 0.1 });
    if (cardRef.current) observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, []);

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
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1 text-sm">
              {item.noise === "Silent" ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
              <span className="text-muted-foreground">{item.noise}</span>
            </div>
            {item.hasWifi && (
              <div className="flex items-center gap-1 text-sm text-green-500"><Wifi className="w-4 h-4" /><span>WiFi</span></div>
            )}
          </div>
        </div>
        <p className="text-muted-foreground text-xs italic">"{item.comment}"</p>
      </div>
    </div>
  );
};

const StudyDetails = () => {
  const [filter, setFilter] = useState<TypeFilter>("all");
  const [showFilters, setShowFilters] = useState(false);

  const filteredItems = mockStudySpots.filter((item) => filter === "all" || item.type === filter);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20 pb-8">
        <div className="relative h-56 md:h-72 overflow-hidden">
          <img src="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=1200" alt="Study Banner" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 via-indigo-800/60 to-cyan-700/50" />
          <div className="absolute inset-0 flex items-end pb-8">
            <div className="container mx-auto px-4">
              <Link to="/home" className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-4 transition-colors group">
                <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" /><span className="text-sm font-medium">Back to Home</span>
              </Link>
              <h1 className="text-3xl md:text-5xl font-bold text-white tracking-tight">Study Zones</h1>
              <p className="text-white/80 mt-2 text-lg">Find the perfect spot to focus and learn</p>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
            <span className="text-muted-foreground text-sm">{filteredItems.length} spots found</span>
            <Button variant="outline" size="sm" onClick={() => setShowFilters(!showFilters)} className="md:hidden">
              <SlidersHorizontal className="w-4 h-4 mr-2" />Filters
            </Button>
            <div className="hidden md:flex flex-wrap gap-2">
              {(["all", "Library", "Cafe", "Coworking", "Outdoor", "Lab"] as TypeFilter[]).map((f) => (
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
                {(["all", "Library", "Cafe", "Coworking", "Outdoor", "Lab"] as TypeFilter[]).map((f) => (
                  <Button key={f} variant={filter === f ? "default" : "outline"} size="sm" onClick={() => setFilter(f)}>{f === "all" ? "All" : f}</Button>
                ))}
              </div>
            </div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item, index) => (
              <StudyCard key={item.id} item={item} index={index} />
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default StudyDetails;
