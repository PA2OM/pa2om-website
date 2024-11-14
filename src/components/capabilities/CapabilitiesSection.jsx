import React from 'react';

const CapabilitiesSection = () => {
  const capabilities = [
    {
      title: "Strategic Planning",
      description: "Focused on consulting aspects, strategy, visioning",
      image: "/api/placeholder/400/300"
    },
    {
      title: "Enterprise Integration",
      description: "Focused on integration from the shop floor up through the ERP",
      image: "/api/placeholder/400/300"
    },
    {
      title: "Data & AI",
      description: "Leveraging the value of data to drive valuable insights with the power of AI in the operational context (i.e. for manufacturing, for supply chain, for business, etc.)",
      image: "/api/placeholder/400/300"
    },
    {
      title: "Supply Chain Optimization",
      description: "Enabling the understanding of how supply chains work, how to maximize via tools and tech to streamline operations focused on cost and execution",
      image: "/api/placeholder/400/300"
    },
    {
      title: "Manufacturing Operations",
      description: "Focused on everything that touches the manufacturing operation, sensors, controllers, operations software, maintenance, quality, production, planning etc...",
      image: "/api/placeholder/400/300"
    },
    {
      title: "Digital Transformation",
      description: "Targeting operation and leveraging technology to convert information into digital insights. Including connecting, collecting, visualizing, analyze and optimize",
      image: "/api/placeholder/400/300"
    },
    {
      title: "Product Integration",
      description: "We understand that need for client to select solution that will enable the accelerators they need, our team along with our collaboration network bring the skills necessary to deliver and implement solutions",
      image: "/api/placeholder/400/300"
    },
    {
      title: "Change Management & Training Services",
      description: "Project success is derived from the ability of the 'people' being capable of integrating and leveraging the changes necessary for growth with results. We believe this is imperative for a win-win.",
      image: "/api/placeholder/400/300"
    }
  ];

  return (
    <section className="bg-[#C41E3A] py-20">
      <div className="container mx-auto px-4">
        <div className="text-center text-white mb-16">
          <h2 className="text-4xl font-bold mb-4">Capabilities</h2>
          <h3 className="text-2xl mb-6">Our Consulting-based Services</h3>
          <p className="max-w-3xl mx-auto mb-12">
            Comprehensive solutions for manufacturing excellence and digital transformation
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {capabilities.map((capability, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105"
            >
              <div className="aspect-w-4 aspect-h-3">
                <img
                  src={capability.image}
                  alt={capability.title}
                  className="w-full h-48 object-cover"
                />
              </div>
              <div className="p-6">
                <h4 className="text-lg font-semibold mb-3">
                  {capability.title}
                </h4>
                <p className="text-gray-600 text-sm">
                  {capability.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CapabilitiesSection;