import React from 'react';

const ServicesSection = () => {
  const services = [
    {
      title: "Consultation",
      description: "We provide expert consultations to help identify operational challenges and opportunities for improvement.",
      image: "/DT2.svg"
    },
    {
      title: "Strategy",
      description: "Do you struggle with aligning your operations to overall business goals? Our skilled team crafts tailored strategies that drive remarkable results.",
      image: "/5198107.svg"
    },
    {
      title: "Training",
      description: "We offer training programs designed to empower your staff with the skills needed for operational excellence.",
      image: "/4188780.svg"
    },
    {
      title: "Performance",
      description: "We guarantee enhanced operational performance through our proven methodologies ensuring you achieve peak efficiency.",
      image: "/4166331.svg"
    },
    {
      title: "Improvement",
      description: "We focus on continuous improvement initiatives to cultivate a culture of innovation and agility in your organization.",
      image: "/5562736.svg"
    },
    {
      title: "Satisfaction",
      description: "Other customers rave about our services, witnessing transformative changes and sustained operational success with us.",
      image: "/Pship0.svg"
    },
    {
      title: "Technology",
      description: "We leverage cutting-edge technologies to optimize your operations, setting you apart from your competition.",
      image: "/DT7.svg"
    },
    {
      title: "Partnership",
      description: "Trust us to be your strategic partner; we prioritize your success as if it were our own, building lasting collaborations.",
      image: "/4902799.svg"
    }
  ];

  return (
    <section id="services" className="py-20 bg-c1 py-20 ">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-c3 text-5xl mb-8 font-suse">
            What We<br />Bring to the Table
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-c3 rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105"
            >
              <div className="aspect-w-4 aspect-h-3">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-48 object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-c1 text-2xl mb-3">
                  {service.title}
                </h3>
                <p className="text-c1 text-sm">
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