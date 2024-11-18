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
  Hammer
} from 'lucide-react';

const IndustryExperienceSection = () => {
  const industries = [
    {
      icon: Factory,
      name: "MANUFACTURING",
      color: "bg-c1"
    },
    {
      icon: Car,
      name: "AUTOMOTIVE",
      color: "bg-c2"
    },
    {
      icon: Plane,
      name: "AEROSPACE",
      color: "bg-c4"
    },
    {
      icon: Cpu,
      name: "ELECTRONICS",
      color: "bg-c5"
    },
    {
      icon: Landmark,
      name: "GOVERNMENT & DEFENSE",
      color: "bg-c8"
    },
    {
      icon: Beaker,
      name: "CHEMICALS",
      color: "bg-c13"
    },
    {
      icon: Zap,
      name: "ENERGY & UTILITIES",
      color: "bg-c11"
    },
    {
      icon: UtensilsCrossed,
      name: "FOOD BEVERAGE",
      color: "bg-purple-700"
    },
    {
      icon: Microscope,
      name: "LIFE SCIENCES",
      color: "bg-blue-400"
    },
    {
      icon: Hammer,
      name: "METALS & MINING",
      color: "bg-yellow-500"
    }
  ];

  return (
    <section id="industries" className="bg-gray-900 py-20 bg-c6 py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl text-white text-center mb-16">
          Our Industry Experience & Expertise
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
              <p className="text-white text-center text-lg">
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