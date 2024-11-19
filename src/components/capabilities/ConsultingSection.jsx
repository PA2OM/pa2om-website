import React from 'react';

const ConsultingSection = () => {
  const pillars = [
    {
      title: "Expertise",
      subtitle: "Problem-Solving Skills",
      color: "bg-c1",
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
      color: "bg-c1",
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
      color: "bg-c1",
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
      color: "bg-c1",
      points: [
        "Structured approach to deliverables",
        "Timeline and resource management",
        "Risk mitigation",
        "Quality control",
        "Team coordination"
      ]
    }
  ];

const handleConsultationClick = () => {
  window.location.hash = 'contact';
};

  return (
    <section id="consulting" className="bg-gray-50 py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl text-c5 text-center mb-6">
          Business Advisory
        </h2>

        <p className="text-c5 text-2xl mb-16 text-center">
          Our teams leverage industry business advsiory best practices that we delivery and adopt for your initiatives.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pillars.map((pillar, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="mb-6">
                <h3 className="text-2xl text-c5 mb-2">
                  {pillar.title}
                </h3>
                <h4 className="text-xl text-c1">
                  {pillar.subtitle}
                </h4>
              </div>

              <ul className="space-y-3">
                {pillar.points.map((point, i) => (
                  <li key={i} className="flex items-start">
                    <span className="text-c5 mr-2 text-xl">•</span>
                    <span className="text-c5 text-lg">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
        <button 
             onClick={handleConsultationClick}
             className="bg-c5 text-white px-8 py-3 rounded-lg hover:bg-c2 transition-colors duration-300">
              Learn More About Our Approach
            </button>
        </div>
      </div>
    </section>
  );
};

export default ConsultingSection;