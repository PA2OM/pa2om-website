import React from 'react';

const TransformationSection = () => {
  const services = [
    {
      title: "Consultation",
      description: "We provide expert consultations to help identify operational challenges and opportunity for improvement"
    },
    {
      title: "Strategic Planning",
      description: "Focused on consulting aspects, aligning the business strategy and vision focused on achieve the NorthStar."
    },
    {
      title: "Supply Chain Optimization",
      description: "Enabling the understanding of how supply chains work, how to maximize via tools and tech to streamline operations focused on cost and execution"
    },
    {
      title: "Manufacturing Operations",
      description: "From manufacturing operation, sensors, controllers, operations software, maintenance, quality, production, planning etc..."
    },
    {
      title: "Change Management",
      description: "Project success is derived from the ability of the \"people\" being capable of integrating and leveraging the changes necessary for growth with results. We believe this is imperative for a win-win."
    },
    {
      title: "Enterprise Integration",
      description: "Connecting all applications in this complex network solutions from shopfloor up through your enterprise systems"
    },
    {
      title: "Data & AI",
      description: "Leveraging the value of data to drive valuable insights with the power of AI in the operational context (ie for mfg, for supply chain, for business, etc.)"
    },
    {
      title: "Digital Transformation",
      description: "Targeting operation and leveraging technology to convert information into digital insights. Including connecting, collection, visualizing, analyze and optimize."
    },
    {
      title: "Product Integration",
      description: "Selecting solutions that will enable the accelerators, our team along with our collaboration network bring the skills & knowledge to deliver and implement solutions."
    },
    {
      title: "Infrastructure",
      description: "Understanding the business needs to meet the operational requirements, how to connect and move data across the organization"
    }
  ];

  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-900 text-center mb-4">
          How we will Delivering Digital Business Transformation in Manufacturing & Supply Chain
        </h2>

        <p className="text-gray-600 text-center mb-16">
          Comprehensive solutions for manufacturing excellence and digital transformation
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300 bg-white"
            >
              <h3 className="text-lg font-semibold text-blue-900 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 text-sm">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TransformationSection;