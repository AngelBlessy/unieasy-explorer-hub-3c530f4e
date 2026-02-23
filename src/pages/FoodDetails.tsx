import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Star, MapPin, Leaf, Drumstick, Clock, SlidersHorizontal, X, Utensils } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const mockRestaurants = [
  { id: 1, name: "Spice Garden", cuisine: "North Indian", price: 200, rating: 4.8, reviews: 256, distance: "0.5 km", timing: "11 AM - 11 PM", isVeg: false, image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400", comment: "Authentic flavors, must try butter chicken!", speciality: "Butter Chicken" },
  { id: 2, name: "Annapurna Bhavan", cuisine: "South Indian", price: 120, rating: 4.5, reviews: 312, distance: "0.3 km", timing: "7 AM - 10 PM", isVeg: true, image: "https://images.unsplash.com/photo-1552566626-52f8b828add9?w=400", comment: "Best dosa in the area!", speciality: "Masala Dosa" },
  { id: 3, name: "Wok & Roll", cuisine: "Chinese", price: 250, rating: 4.3, reviews: 145, distance: "1.2 km", timing: "12 PM - 11 PM", isVeg: false, image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=400", comment: "Great noodles and fried rice", speciality: "Hakka Noodles" },
  { id: 4, name: "Pizza Paradise", cuisine: "Italian", price: 300, rating: 4.6, reviews: 198, distance: "0.8 km", timing: "11 AM - 12 AM", isVeg: true, image: "https://images.unsplash.com/photo-1537047902294-62a40c20a6ae?w=400", comment: "Wood-fired pizzas, student combos!", speciality: "Margherita Pizza" },
  { id: 5, name: "Punjab Dhaba", cuisine: "Punjabi", price: 150, rating: 4.7, reviews: 423, distance: "0.4 km", timing: "8 AM - 11 PM", isVeg: false, image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400", comment: "Pocket-friendly and delicious thalis", speciality: "Chole Bhature" },
  { id: 6, name: "Green Leaf Cafe", cuisine: "Healthy", price: 180, rating: 4.4, reviews: 89, distance: "0.6 km", timing: "8 AM - 9 PM", isVeg: true, image: "https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?w=400", comment: "Fresh salads and smoothie bowls", speciality: "Smoothie Bowl" },
  { id: 7, name: "Biryani House", cuisine: "Hyderabadi", price: 220, rating: 4.9, reviews: 534, distance: "1.0 km", timing: "11 AM - 11 PM", isVeg: false, image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=400", comment: "Authentic dum biryani, worth every penny", speciality: "Chicken Biryani" },
  { id: 8, name: "Chai Point", cuisine: "Snacks", price: 80, rating: 4.2, reviews: 678, distance: "0.2 km", timing: "6 AM - 12 AM", isVeg: true, image: "https://images.unsplash.com/photo-1559925393-8be0ec4767c8?w=400", comment: "Perfect tea and maggi combo for late nights", speciality: "Masala Chai" },
];

type FilterType = "all" | "veg" | "nonveg";
type SortType = "default" | "price-low" | "price-high" | "rating";

const RestaurantCard = ({ item, index }: { item: typeof mockRestaurants[0]; index: number }) => {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.1 }
    );
    if (cardRef.current) observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={cardRef}
      className={`group bg-card rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 border border-border hover:border-primary/30 hover:-translate-y-1 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay: `${index * 60}ms` }}
    >
      <div className="relative h-52 overflow-hidden">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
        <Badge 
          className={`absolute top-3 left-3 ${item.isVeg ? "bg-green-500" : "bg-red-500"} text-white border-0 shadow-lg`}
        >
          {item.isVeg ? <Leaf className="w-3 h-3 mr-1" /> : <Drumstick className="w-3 h-3 mr-1" />}
          {item.isVeg ? "Pure Veg" : "Non-Veg"}
        </Badge>
        <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-full flex items-center gap-1">
          <Star className="w-3.5 h-3.5 text-yellow-400 fill-yellow-400" />
          <span className="text-white text-sm font-semibold">{item.rating}</span>
        </div>
        <div className="absolute bottom-3 left-3 right-3">
          <h3 className="font-bold text-xl text-white mb-0.5 drop-shadow-lg">{item.name}</h3>
          <div className="flex items-center gap-2 text-white/80 text-sm">
            <Utensils className="w-3 h-3" />
            <span>{item.cuisine}</span>
            <span className="text-white/50">•</span>
            <span>Known for {item.speciality}</span>
          </div>
        </div>
      </div>
      
      <div className="p-4">
        <div className="flex items-center gap-4 text-muted-foreground text-sm mb-3">
          <div className="flex items-center gap-1">
            <MapPin className="w-3.5 h-3.5" />
            <span>{item.distance}</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock className="w-3.5 h-3.5" />
            <span>{item.timing}</span>
          </div>
        </div>
        
        <p className="text-muted-foreground text-sm italic mb-3">"{item.comment}"</p>
        
        <div className="flex items-center justify-between pt-2 border-t border-border/50">
          <div>
            <span className="text-lg font-bold text-primary">₹{item.price}</span>
            <span className="text-muted-foreground text-xs ml-1">avg/person</span>
          </div>
          <span className="text-xs text-muted-foreground">{item.reviews} reviews</span>
        </div>
      </div>
    </div>
  );
};

const FoodDetails = () => {
  const [filter, setFilter] = useState<FilterType>("all");
  const [sort, setSort] = useState<SortType>("default");
  const [showFilters, setShowFilters] = useState(false);

  const filteredItems = mockRestaurants
    .filter((item) => {
      if (filter === "veg") return item.isVeg;
      if (filter === "nonveg") return !item.isVeg;
      return true;
    })
    .sort((a, b) => {
      if (sort === "price-low") return a.price - b.price;
      if (sort === "price-high") return b.price - a.price;
      if (sort === "rating") return b.rating - a.rating;
      return 0;
    });

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20 pb-8">
        {/* Banner */}
        <div className="relative h-56 md:h-72 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1200"
            alt="Food Banner"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-orange-900/80 via-red-800/60 to-amber-700/50" />
          <div className="absolute inset-0 flex items-end pb-8">
            <div className="container mx-auto px-4">
              <Link to="/home" className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-4 transition-colors group">
                <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                <span className="text-sm font-medium">Back to Home</span>
              </Link>
              <h1 className="text-3xl md:text-5xl font-bold text-white tracking-tight">Food & Restaurants</h1>
              <p className="text-white/80 mt-2 text-lg">Discover the best restaurants & eateries near campus</p>
            </div>
          </div>
        </div>

        {/* Filters */}
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
            <span className="text-muted-foreground text-sm font-medium">{filteredItems.length} restaurants found</span>
            
            <Button variant="outline" size="sm" onClick={() => setShowFilters(!showFilters)} className="md:hidden">
              <SlidersHorizontal className="w-4 h-4 mr-2" />Filters
            </Button>

            <div className="hidden md:flex items-center gap-4">
              <div className="flex items-center gap-2">
                <span className="text-sm text-muted-foreground">Type:</span>
                {(["all", "veg", "nonveg"] as FilterType[]).map((f) => (
                  <Button key={f} variant={filter === f ? "default" : "outline"} size="sm" onClick={() => setFilter(f)}>
                    {f === "nonveg" ? "Non-Veg" : f === "all" ? "All" : "Veg"}
                  </Button>
                ))}
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm text-muted-foreground">Sort:</span>
                <Button variant={sort === "price-low" ? "default" : "outline"} size="sm" onClick={() => setSort("price-low")}>Price ↑</Button>
                <Button variant={sort === "price-high" ? "default" : "outline"} size="sm" onClick={() => setSort("price-high")}>Price ↓</Button>
                <Button variant={sort === "rating" ? "default" : "outline"} size="sm" onClick={() => setSort("rating")}>Top Rated</Button>
              </div>
            </div>
          </div>

          {showFilters && (
            <div className="md:hidden bg-card rounded-xl p-4 mb-6 border border-border animate-fade-in">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold text-foreground">Filters</h3>
                <Button variant="ghost" size="icon" onClick={() => setShowFilters(false)}><X className="w-4 h-4" /></Button>
              </div>
              <div className="space-y-4">
                <div>
                  <span className="text-sm text-muted-foreground mb-2 block">Type</span>
                  <div className="flex flex-wrap gap-2">
                    {(["all", "veg", "nonveg"] as FilterType[]).map((f) => (
                      <Button key={f} variant={filter === f ? "default" : "outline"} size="sm" onClick={() => setFilter(f)}>
                        {f === "nonveg" ? "Non-Veg" : f === "all" ? "All" : "Veg"}
                      </Button>
                    ))}
                  </div>
                </div>
                <div>
                  <span className="text-sm text-muted-foreground mb-2 block">Sort by</span>
                  <div className="flex flex-wrap gap-2">
                    <Button variant={sort === "price-low" ? "default" : "outline"} size="sm" onClick={() => setSort("price-low")}>Price ↑</Button>
                    <Button variant={sort === "price-high" ? "default" : "outline"} size="sm" onClick={() => setSort("price-high")}>Price ↓</Button>
                    <Button variant={sort === "rating" ? "default" : "outline"} size="sm" onClick={() => setSort("rating")}>Rating</Button>
                  </div>
                </div>
              </div>
            </div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredItems.map((item, index) => (
              <RestaurantCard key={item.id} item={item} index={index} />
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default FoodDetails;
