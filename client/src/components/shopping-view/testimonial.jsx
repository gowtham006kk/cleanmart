import { ShieldCheckIcon, TruckIcon, StarIcon } from "lucide-react";

function KeyFeatures() {
  const features = [
    {
      id: 1,
      title: "Better Products",
      description:
        "We offer only top-quality products from trusted brands, ensuring a seamless shopping experience.",
      icon: <StarIcon className="w-12 h-12 text-primary" />,
      backgroundColor: "bg-blue-50",
    },
    {
      id: 2,
      title: "100% Secure Payment",
      description:
        "Our payment gateway uses advanced encryption to ensure your transactions are safe and secure.",
      icon: <ShieldCheckIcon className="w-12 h-12 text-green-500" />,
      backgroundColor: "bg-green-50",
    },
    {
      id: 3,
      title: "Fast Delivery",
      description:
        "We ensure swift delivery of your orders with reliable tracking, so you know exactly when to expect your package.",
      icon: <TruckIcon className="w-12 h-12 text-orange-500" />,
      backgroundColor: "bg-yellow-50",
    },
  ];

  return (
    <div className="py-16 bg-gray-100">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-semibold text-primary mb-8">Why Choose Us?</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div
              key={feature.id}
              className={`p-6 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 ${feature.backgroundColor}`}
            >
              <div className="flex justify-center mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{feature.title}</h3>
              <p className="text-lg text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default KeyFeatures;
