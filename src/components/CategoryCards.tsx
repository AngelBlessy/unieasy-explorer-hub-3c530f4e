import { Utensils, Home, MapPin, MoreHorizontal, BookOpen, ArrowRight } from "lucide-react";

const categories = [
  {
    id: 1,
    name: "Food & Eating",
    description: "Cafes, restaurants & street food",
    icon: Utensils,
    gradient: "from-emerald-500 to-teal-400",
    bgPattern: "🍕",
    count: "150+",
  },
  {
    id: 2,
    name: "Accommodation",
    description: "Hostels, PGs & rentals",
    icon: Home,
    gradient: "from-violet-500 to-purple-400",
    bgPattern: "🏠",
    count: "80+",
  },
  {
    id: 3,
    name: "Explore Nearby",
    description: "Parks & hangout spots",
    icon: MapPin,
    gradient: "from-orange-500 to-amber-400",
    bgPattern: "🗺️",
    count: "60+",
  },
  {
    id: 4,
    name: "Study Zones",
    description: "Libraries & quiet spaces",
    icon: BookOpen,
    gradient: "from-blue-500 to-cyan-400",
    bgPattern: "📚",
    count: "40+",
  },
  {
    id: 5,
    name: "Essentials",
    description: "Gyms, laundry & more",
    icon: MoreHorizontal,
    gradient: "from-rose-500 to-pink-400",
    bgPattern: "⭐",
    count: "100+",
  },
];

const CategoryCards = () => {
  return (
    <section className="py-16 px-6 overflow-hidden">
      <div className="container mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-2 animate-fade-up">
              Explore Categories
            </h2>
            <p className="text-muted-foreground animate-fade-up stagger-1">
              Everything you need around campus
            </p>
          </div>
          <div className="hidden sm:flex items-center gap-2 text-muted-foreground">
            <span className="text-sm">Scroll</span>
            <ArrowRight className="w-4 h-4 animate-pulse" />
          </div>
        </div>

        {/* Horizontal scrollable container */}
        <div className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory">
          {categories.map((category, index) => (
            <div
              key={category.id}
              className="group relative flex-shrink-0 w-72 cursor-pointer snap-start animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Card with gradient background */}
              <div className={`relative h-80 rounded-3xl bg-gradient-to-br ${category.gradient} p-6 overflow-hidden transition-all duration-500 group-hover:scale-[1.02] group-hover:shadow-xl`}>
                {/* Background pattern */}
                <div className="absolute inset-0 opacity-10 text-8xl flex items-center justify-center">
                  {category.bgPattern}
                </div>
                
                {/* Animated circles */}
                <div className="absolute -right-8 -top-8 w-32 h-32 bg-white/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700" />
                <div className="absolute -left-8 -bottom-8 w-24 h-24 bg-white/10 rounded-full blur-xl group-hover:scale-150 transition-transform duration-700" />

                {/* Content */}
                <div className="relative z-10 h-full flex flex-col justify-between">
                  {/* Icon */}
                  <div className="w-14 h-14 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <category.icon className="w-7 h-7 text-white" />
                  </div>

                  {/* Text */}
                  <div>
                    <span className="inline-block px-3 py-1 rounded-full bg-white/20 text-white text-xs font-medium mb-3">
                      {category.count} Places
                    </span>
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {category.name}
                    </h3>
                    <p className="text-white/80 text-sm">
                      {category.description}
                    </p>
                  </div>

                  {/* Arrow */}
                  <div className="absolute bottom-6 right-6 w-10 h-10 rounded-full bg-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-4 group-hover:translate-x-0">
                    <ArrowRight className="w-5 h-5 text-white" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryCards;
