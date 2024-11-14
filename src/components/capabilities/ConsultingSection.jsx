import React from 'react';

const ConsultingSection = () => {
  const pillars = [
    {
      title: "Expertise",
      subtitle: "Problem-Solving Skills",
      color: "bg-blue-900",
      points: [
        "Analytical thinking",
        "Breaking down complex issues",
        "Data-driven decision making",
        "Creative solution development"
      ]
    },
    {
      title: "Experience",
      subtitle: "Technical/Industry Expertise",
      color: "bg-blue-900",
      points: [
        "Deep domain knowledge",
        "Current industry trends",
        "Best practices",
        "Relevant methodologies and frameworks"
      ]
    },
    {
      title: "Engagement",
      subtitle: "One Team",
      color: "bg-blue-900",
      points: [
        "Building trust and relationships",
        "Clear communication",
        "Managing expectations",
        "Delivering value consistently",
        "Stakeholder management"
      ]
    },
    {
      title: "Execution",
      subtitle: "Project Management",
      color: "bg-blue-900",
      points: [
        "Structured approach to deliverables",
        "Timeline and resource management",
        "Risk mitigation",
        "Quality control",
        "Team coordination"
      ]
    }
  ];

  return (
    <section className="bg-gray-50 py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-900 text-center mb-16">
          Consulting
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pillars.map((pillar, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="mb-6">
                <h3 className="text-xl font-bold text-blue-900 mb-2">
                  {pillar.title}
                </h3>
                <h4 className="text-lg font-semibold text-gray-700">
                  {pillar.subtitle}
                </h4>
              </div>

              <ul className="space-y-3">
                {pillar.points.map((point, i) => (
                  <li key={i} className="flex items-start">
                    <span className="text-blue-500 mr-2 text-lg">•</span>
                    <span className="text-gray-600">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <button className="bg-blue-900 text-white px-8 py-3 rounded-lg hover:bg-blue-800 transition-colors">
            Learn More About Our Approach
          </button>
        </div>
      </div>
    </section>
  );
};

export default ConsultingSection;