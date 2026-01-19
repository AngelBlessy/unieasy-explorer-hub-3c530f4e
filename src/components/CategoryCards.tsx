import { Utensils, Home, MapPin, MoreHorizontal, BookOpen, ArrowRight } from "lucide-react";

const categories = [
  {
    id: 1,
    name: "Food & Eating",
    description: "Cafes, restaurants & street food",
    icon: Utensils,
    gradient: "from-emerald-500 to-teal-400",
    video: "https://videos.pexels.com/video-files/3298432/3298432-sd_640_360_30fps.mp4",
    count: "150+",
  },
  {
    id: 2,
    name: "Accommodation",
    description: "Hostels, PGs & rentals",
    icon: Home,
    gradient: "from-violet-500 to-purple-400",
    video: "https://videos.pexels.com/video-files/5998210/5998210-sd_640_360_25fps.mp4",
    count: "80+",
  },
  {
    id: 3,
    name: "Explore Nearby",
    description: "Parks & hangout spots",
    icon: MapPin,
    gradient: "from-orange-500 to-amber-400",
    video: "https://videos.pexels.com/video-files/3571264/3571264-sd_640_360_30fps.mp4",
    count: "60+",
  },
  {
    id: 4,
    name: "Study Zones",
    description: "Libraries & quiet spaces",
    icon: BookOpen,
    gradient: "from-blue-500 to-cyan-400",
    video: "https://videos.pexels.com/video-files/5676102/5676102-sd_640_360_25fps.mp4",
    count: "40+",
  },
  {
    id: 5,
    name: "Essentials",
    description: "Gyms, laundry & more",
    icon: MoreHorizontal,
    gradient: "from-rose-500 to-pink-400",
    video: "https://videos.pexels.com/video-files/3195394/3195394-sd_640_360_25fps.mp4",
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
              className="group relative flex-shrink-0 w-80 cursor-pointer snap-start animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Card with video background */}
              <div className="relative h-96 rounded-3xl overflow-hidden transition-all duration-500 group-hover:scale-[1.02] group-hover:shadow-2xl">
                {/* Video Background */}
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                >
                  <source src={category.video} type="video/mp4" />
                </video>
                
                {/* Gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-t ${category.gradient} opacity-60 mix-blend-multiply`} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                
                {/* Animated border glow */}
                <div className="absolute inset-0 rounded-3xl border-2 border-white/0 group-hover:border-white/30 transition-all duration-500" />
                
                {/* Floating particles animation */}
                <div className="absolute inset-0 overflow-hidden">
                  <div className="absolute w-2 h-2 bg-white/30 rounded-full top-1/4 left-1/4 animate-float-slow" />
                  <div className="absolute w-3 h-3 bg-white/20 rounded-full top-1/2 right-1/4 animate-float-medium" />
                  <div className="absolute w-1.5 h-1.5 bg-white/40 rounded-full bottom-1/3 left-1/3 animate-float-fast" />
                </div>

                {/* Content */}
                <div className="relative z-10 h-full flex flex-col justify-between p-6">
                  {/* Icon with bounce animation on hover */}
                  <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg">
                    <category.icon className="w-8 h-8 text-white drop-shadow-lg" />
                  </div>

                  {/* Text with slide up animation */}
                  <div className="transform transition-all duration-500 group-hover:translate-y-[-8px]">
                    <span className="inline-block px-4 py-1.5 rounded-full bg-white/20 backdrop-blur-sm text-white text-xs font-semibold mb-3 shadow-lg">
                      {category.count} Places
                    </span>
                    <h3 className="text-2xl font-bold text-white mb-2 drop-shadow-lg">
                      {category.name}
                    </h3>
                    <p className="text-white/90 text-sm drop-shadow-md">
                      {category.description}
                    </p>
                    
                    {/* Explore button that appears on hover */}
                    <div className="mt-4 flex items-center gap-2 text-white font-medium opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                      <span>Explore</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
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
