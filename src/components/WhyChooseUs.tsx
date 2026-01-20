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
  },
  {
    icon: Shield,
    title: "Quality Controlled",
  },
  {
    icon: Truck,
    title: "Pan-India Delivery",
  },
  {
    icon: Building,
    title: "R&D Capability",
  },
  {
    icon: Headphones,
    title: "Expert Support",
  },
  {
    icon: Wrench,
    title: "Manufacturing Excellence",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-10 sm:py-14 lg:py-16 bg-white border-y border-gray-200">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 sm:mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
            Why Choose Unitech
          </h2>
          <p className="text-sm sm:text-base text-gray-600">
            Quality audio solutions since 1999
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 sm:gap-8 lg:gap-10">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="flex flex-col items-center gap-3 p-4 hover:bg-gray-50 rounded-xl transition-all duration-200 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-12 h-12 flex items-center justify-center bg-blue-50 rounded-xl">
                <feature.icon className="w-6 h-6 text-primary" strokeWidth={1.5} />
              </div>
              <span className="text-xs sm:text-sm text-gray-700 font-medium text-center leading-tight">
                {feature.title}
              </span>
            </div>
          ))}
        </div>

        <div className="text-center mt-8 sm:mt-10">
          <a 
            href="mailto:unitechindia@gmail.com"
            className="inline-flex items-center gap-2 bg-white border-2 border-gray-200 text-gray-700 hover:border-primary hover:text-primary font-semibold px-6 sm:px-8 py-3 rounded-xl transition-all text-sm sm:text-base shadow-sm hover:shadow-md min-h-[48px]"
          >
            <Headphones className="w-5 h-5" strokeWidth={1.5} />
            Connect to Expert
          </a>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
