import React from 'react';
import { 
  Factory, 
  Car, 
  Plane, 
  Cpu, 
  Landmark, 
  Beaker, 
  Zap, 
  UtensilsCrossed,
  Microscope, 
  Pickaxe 
} from 'lucide-react';

const IndustryExperienceSection = () => {
  const industries = [
    {
      icon: Factory,
      name: "MANUFACTURING",
      color: "bg-orange-500"
    },
    {
      icon: Car,
      name: "AUTOMOTIVE",
      color: "bg-red-600"
    },
    {
      icon: Plane,
      name: "AEROSPACE",
      color: "bg-blue-400"
    },
    {
      icon: Cpu,
      name: "ELECTRONICS",
      color: "bg-purple-500"
    },
    {
      icon: Landmark,
      name: "GOVERNMENT & DEFENSE",
      color: "bg-green-600"
    },
    {
      icon: Beaker,
      name: "CHEMICALS",
      color: "bg-black"
    },
    {
      icon: Zap,
      name: "ENERGY & UTILITIES",
      color: "bg-green-700"
    },
    {
      icon: UtensilsCrossed,
      name: "FOOD BEVERAGE",
      color: "bg-yellow-500"
    },
    {
      icon: Microscope,
      name: "LIFE SCIENCES",
      color: "bg-blue-600"
    },
    {
      icon: Pickaxe,
      name: "METALS & MINING",
      color: "bg-purple-700"
    }
  ];

  return (
    <section className="bg-gray-900 py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-white text-center mb-16">
          INDUSTRY EXPERIENCE
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {industries.map((industry, index) => (
            <div key={index} className="flex flex-col items-center">
              <div 
                className={`${industry.color} rounded-full p-6 mb-4 w-24 h-24 flex items-center 
                  justify-center transition-transform duration-300 hover:scale-110`}
              >
                {React.createElement(industry.icon, { 
                  size: 40, 
                  className: "text-white" 
                })}
              </div>
              <p className="text-white text-center font-medium text-sm">
                {industry.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustryExperienceSection;