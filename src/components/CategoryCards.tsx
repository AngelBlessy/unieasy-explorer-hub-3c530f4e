import { Utensils, Home, MapPin, MoreHorizontal, BookOpen } from "lucide-react";

const categories = [
  {
    id: 1,
    name: "Food & Eating Places",
    description: "Discover cafes, restaurants, and street food near campus",
    icon: Utensils,
    color: "from-accent to-coral-light",
    count: "150+ Places",
  },
  {
    id: 2,
    name: "Accommodation / PG / Hostel",
    description: "Find verified hostels, PGs, and rental rooms",
    icon: Home,
    color: "from-teal to-success",
    count: "80+ Options",
  },
  {
    id: 3,
    name: "Nearby Places to Explore",
    description: "Parks, hangouts, and weekend getaway spots",
    icon: MapPin,
    color: "from-navy to-primary",
    count: "60+ Spots",
  },
  {
    id: 4,
    name: "Study Zones",
    description: "Libraries, cafes, and quiet study spaces",
    icon: BookOpen,
    color: "from-gold to-accent",
    count: "40+ Places",
  },
  {
    id: 5,
    name: "Other Essentials",
    description: "Gyms, laundry, medical stores, and more",
    icon: MoreHorizontal,
    color: "from-primary to-navy-dark",
    count: "100+ Services",
  },
];

const CategoryCards = () => {
  return (
    <section className="py-16 px-6">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-foreground mb-2 animate-fade-up">
          Explore Categories
        </h2>
        <p className="text-muted-foreground mb-8 animate-fade-up stagger-1">
          Find everything you need around your campus
        </p>

        {/* Vertical scrollable container */}
        <div className="max-h-[500px] overflow-y-auto pr-4 space-y-4 scrollbar-thin">
          {categories.map((category, index) => (
            <div
              key={category.id}
              className={`group relative overflow-hidden rounded-2xl bg-card p-6 shadow-md card-hover cursor-pointer animate-fade-up`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center gap-6">
                {/* Icon */}
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                  <category.icon className="w-8 h-8 text-primary-foreground" />
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <h3 className="text-xl font-semibold text-foreground mb-1 group-hover:text-accent transition-colors">
                    {category.name}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {category.description}
                  </p>
                </div>

                {/* Count Badge */}
                <div className="hidden sm:block">
                  <span className="px-4 py-2 rounded-full bg-secondary text-secondary-foreground text-sm font-medium">
                    {category.count}
                  </span>
                </div>
              </div>

              {/* Hover gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryCards;
