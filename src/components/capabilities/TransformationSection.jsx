import React from 'react';
import { Map, LineChart, Settings, Database } from 'lucide-react';

const TransformationSection = () => {
  const capabilities = [
    {
      icon: Map,
      title: "Mapping Digital Transformation",
      items: [
        "Digital Strategy",
        "Digital Benchmarking",
        "Data Cleanup & Governance"
      ],
      color: "text-c5"
    },
    {
      icon: LineChart,
      title: "Leverage Data as an Asset",
      items: [
        "Data & Analytics",
        "Actionable Reporting",
        "Self-Service Visualization",
        "Interactive Dashboards"
      ],
      color: "text-c5"
    },
    {
      icon: Settings,
      title: "Rethink Operations",
      items: [
        "Operating Models",
        "Compliance & Governance",
        "Cybersecurity",
        "Client Experience"
      ],
      color: "text-c5"
    },
    {
      icon: Database,
      title: "Modernize Technology",
      items: [
        "Enterprise Architecture",
        "Artificial Intelligence (AI)",
        "Robotics Process Automation",
        "Virtual Assistants"
      ],
      color: "text-c5"
    }
  ];

  return (
    <section id="transformation" className="bg-white py-20 bg-c3 py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header Section */}
          <div className="mb-16">
            <h3 className="text-c5 font-bold tracking-widest mb-4">
              EVOLVE OR LAG BEHIND
            </h3>
            <h2 className="text-c2 text-4xl md:text-5xl font-Suse mb-8">
              Integration fo Digital Technology Into Every
              <br />
              Aspects of Your Business
            </h2>
            <p className="text-c6 text-xl text-gray-600 leading-relaxed max-w-4xl">
              Digital transformation is a necessity for every businesses today, from the small to large enterprise.
              That message comes through loud and clear from every keynote, panel
              discussion, whitepaper article, or strategic study related to how businesses can remain competitive and
              relevant as the world becomes increasingly digital.
            </p>
          </div>

          {/* Framework Section */}
          <div className="mb-16">
            <h3 className="text-c5 font-bold tracking-widest mb-4">
              BUILDING A FRAMEWORK
            </h3>
            <h2 className="text-c2 text-4xl font-Suse mb-6">
              Begin Your Transformation
            </h2>
            <p className="text-c6 text-xl text-gray-600 mb-12">
              Regardless of your current situation, digital transformation will vary based on demands, there are a few
              constants and common themes in which businesses should consider how to approach the enevitable.
            </p>
          </div>

          {/* Capabilities Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            {capabilities.map((capability, index) => (
              <div key={index} className="space-y-4">
                <capability.icon 
                  className={`w-12 h-12 ${capability.color} stroke-[1.5]`}
                />
                <h3 className="text-c2 text-2xl font-suse">{capability.title}</h3>
                <ul className="space-y-2 text-c6">
                  {capability.items.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TransformationSection;