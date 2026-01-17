import { Shield, Clock, ThumbsUp, Users, Sparkles, MapPin } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Verified Listings",
    description: "Every listing is verified by our team for authenticity and quality",
  },
  {
    icon: Clock,
    title: "Real-time Updates",
    description: "Get live updates on availability, prices, and reviews",
  },
  {
    icon: ThumbsUp,
    title: "Student Reviews",
    description: "Honest reviews from fellow students who've been there",
  },
  {
    icon: Users,
    title: "Community Driven",
    description: "Built by students, for students - we understand your needs",
  },
  {
    icon: Sparkles,
    title: "Curated Recommendations",
    description: "AI-powered suggestions based on your preferences",
  },
  {
    icon: MapPin,
    title: "Nearby Discovery",
    description: "Find hidden gems within walking distance from campus",
  },
];

const WhyUsSection = () => {
  return (
    <section className="py-20 bg-secondary/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 animate-fade-up">
            Why Choose <span className="text-accent">UniEasy</span>?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto animate-fade-up stagger-1">
            We're not just another listing platform. We're your campus companion that understands student life.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-card rounded-2xl p-6 shadow-sm card-hover animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent group-hover:scale-110 transition-all duration-300">
                <feature.icon className="w-6 h-6 text-accent group-hover:text-accent-foreground transition-colors" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
