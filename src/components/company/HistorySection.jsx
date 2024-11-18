import React from 'react';

const HistorySection = () => {
  const pillars = [
    {
      title: "Expertise",
      subtitle: "Problem-Solving Skills",
      color: "bg-c5",
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
      color: "bg-c5",
      points: [
        "Deep domain knowledge",
        "Current industry trends",
        "Best practices",
        "Relevant methodologies and frameworks"
      ]
    },
    {
      title: "Execution",
      subtitle: "Project Management",
      color: "bg-c5",
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
    <section id="our-history" className="bg-gray-50 py-20">
 <div className="container mx-auto px-4">
        <h2 className="text-5xl text-c3 mb-6">
          Our History
        </h2>
        
        <p className="text-c3 text-2xl mb-16">
          Founded in 2024, PA2OM was started based on a need to provide regional Manufacturing and Supply Chain experiences
          that would enable your vision with resources that undestood the transforming business needs in our local industries. 
          
          Our object is to provide trustworthy experts that put you the customer first.
        </p>


        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pillars.map((pillar, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="mb-6">
                <h3 className="text-2xl text-c1 mb-2">
                  {pillar.title}
                </h3>
                <h4 className="text-xl text-c5">
                  {pillar.subtitle}
                </h4>
              </div>

              <ul className="space-y-3">
                {pillar.points.map((point, i) => (
                  <li key={i} className="flex items-start">
                    <span className="text-c1 mr-2 text-xl">•</span>
                    <span className="text-c1 text-lg">{point}</span>
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

export default HistorySection;