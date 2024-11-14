import React from 'react';

const ServicesSection = () => {
  const services = [
    {
      title: "Consultation",
      description: "We provide expert consultations to help identify operational challenges and opportunities for improvement.",
      image: "/api/placeholder/300/300"
    },
    {
      title: "Strategy",
      description: "Do you struggle with aligning your operations to overall business goals? Our skilled team crafts tailored strategies that drive remarkable results.",
      image: "/api/placeholder/300/300"
    },
    {
      title: "Training",
      description: "We offer training programs designed to empower your staff with the skills needed for operational excellence.",
      image: "/api/placeholder/300/300"
    },
    {
      title: "Performance",
      description: "We guarantee enhanced operational performance through our proven methodologies ensuring you achieve peak efficiency.",
      image: "/api/placeholder/300/300"
    },
    {
      title: "Improvement",
      description: "We focus on continuous improvement initiatives to cultivate a culture of innovation and agility in your organization.",
      image: "/api/placeholder/300/300"
    },
    {
      title: "Satisfaction",
      description: "Other customers rave about our services, witnessing transformative changes and sustained operational success with us.",
      image: "/api/placeholder/300/300"
    },
    {
      title: "Technology",
      description: "We leverage cutting-edge technologies to optimize your operations, setting you apart from your competition.",
      image: "/api/placeholder/300/300"
    },
    {
      title: "Partnership",
      description: "Trust us to be your strategic partner; we prioritize your success as if it were our own, building lasting collaborations.",
      image: "/api/placeholder/300/300"
    }
  ];

  return (
    <section className="bg-gray-50 py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            What We<br />Bring to the Table
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105"
            >
              <div className="aspect-w-4 aspect-h-3">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-48 object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;