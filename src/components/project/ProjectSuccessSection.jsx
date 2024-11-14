import React from 'react';

const ProjectSuccessSection = () => {
  const phases = [
    {
      title: "Purpose & Strategy",
      badge: "Phase 1",
      points: [
        "Clear vision and objectives for the change",
        "Compelling business case that justifies the need",
        "Alignment with organizational goals and values"
      ]
    },
    {
      title: "Leadership & Sponsorship",
      badge: "Phase 2",
      points: [
        "Active and visible executive sponsorship",
        "Engaged leadership coalition across all levels",
        "Consistent communication from leadership"
      ]
    },
    {
      title: "Stakeholder Engagement & Communication",
      badge: "Phase 3",
      points: [
        "Comprehensive stakeholder analysis and mapping",
        "Two-way communication channels and feedback loops",
        "Targeted messaging for different stakeholder groups"
      ]
    },
    {
      title: "Implementation & Sustainability",
      badge: "Phase 4",
      points: [
        "Detailed implementation roadmap and timeline",
        "Training and support systems for affected employees",
        "Metrics and monitoring to track progress and success"
      ]
    }
  ];

  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 text-center mb-4">
            Achieving Project Success Driven Through Performance, Improvement & Satisfaction Requires a Solid
          </h2>
          <h3 className="text-2xl font-bold text-blue-600 text-center mb-16">
            Change Management Engagement
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {phases.map((phase, index) => (
              <div 
                key={index} 
                className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <h4 className="text-lg font-semibold text-blue-900">
                    {phase.title}
                  </h4>
                  <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                    {phase.badge}
                  </span>
                </div>

                <ul className="space-y-3">
                  {phase.points.map((point, i) => (
                    <li key={i} className="flex items-start text-sm">
                      <span className="text-blue-500 mr-2">→</span>
                      <span className="text-gray-600">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Optional CTA */}
          <div className="mt-12 text-center">
            <button className="bg-blue-900 text-white px-8 py-3 rounded-lg hover:bg-blue-800 transition-colors">
              Start Your Project Success Journey
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectSuccessSection;