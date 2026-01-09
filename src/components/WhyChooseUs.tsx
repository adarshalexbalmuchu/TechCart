import { 
  Award,
  Shield, 
  Truck, 
  Headphones, 
  Building, 
  Wrench 
} from "lucide-react";

const features = [
  {
    icon: Award,
    title: "Trusted Since 1999",
    description: "Over 25 years of quality audio manufacturing excellence",
  },
  {
    icon: Shield,
    title: "Quality Controlled",
    description: "Every product undergoes rigorous testing and quality checks",
  },
  {
    icon: Truck,
    title: "Pan-India Availability",
    description: "Competitive pricing for dealers and customers nationwide",
  },
  {
    icon: Building,
    title: "R&D Capability",
    description: "Custom product development and design solutions",
  },
  {
    icon: Headphones,
    title: "Expert Support",
    description: "Dedicated help for product selection and setup guidance",
  },
  {
    icon: Wrench,
    title: "Manufacturing Excellence",
    description: "State-of-the-art production facilities",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-12 sm:py-16 bg-card border-y border-border">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10 sm:mb-12">
          <h2 className="font-display text-xl sm:text-2xl lg:text-3xl font-bold text-foreground mb-3">
            Why Choose Unitech
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base">
            Your trusted destination for quality electronics and home appliances
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="text-center p-4 sm:p-6 rounded-xl hover:bg-muted transition-all duration-300 group animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 rounded-xl bg-secondary/10 flex items-center justify-center group-hover:bg-secondary/20 transition-colors">
                <feature.icon className="w-6 h-6 sm:w-8 sm:h-8 text-secondary" />
              </div>
              <h3 className="font-semibold text-foreground text-sm sm:text-base mb-1 sm:mb-2">
                {feature.title}
              </h3>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-8 sm:mt-10">
          <button className="inline-flex items-center gap-2 bg-muted hover:bg-muted/80 text-foreground font-medium px-6 py-2.5 rounded-full transition-colors">
            <Headphones className="w-4 h-4" />
            Connect to Expert
          </button>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
