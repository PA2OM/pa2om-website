import React from 'react';

const CaseStudiesSection = () => {
  const caseStudies = [
    {
      category: "Automotive Manufacturing",
      title: "Digital Transformation for Global Auto Manufacturer",
      challenge: "Legacy systems causing production delays and quality issues across multiple plants",
      solution: "Implemented Industry 4.0 solutions including IoT sensors, real-time analytics, and cognitive manufacturing processes",
      results: [
        "30% reduction in downtime",
        "25% improvement in quality metrics",
        "$15M annual cost savings",
        "ROI achieved in 18 months"
      ],
      duration: "12 months",
      status: "Completed"
    },
    {
      category: "Discrete Manufacturer",
      title: "Supply Chain Optimization",
      challenge: "Fragmented supply chain visibility and inefficient inventory management",
      solution: "Deployed end-to-end supply chain visibility platform with predictive analytics",
      results: [
        "40% reduction in inventory holding costs",
        "20% improvement in forecast accuracy",
        "15% reduction in logistics costs",
        "Real-time visibility across 12 facilities"
      ],
      duration: "9 months",
      status: "Completed"
    },
    {
      category: "Aerospace",
      title: "Smart Manufacturing Implementation",
      challenge: "Inefficient asset utilization and high maintenance costs",
      solution: "Implemented predictive maintenance system with cognitive capabilities",
      results: [
        "45% reduction in unplanned downtime",
        "35% decrease in maintenance costs",
        "20% increase in asset utilization",
        "Predictive accuracy rate of 92%"
      ],
      duration: "15 months",
      status: "Completed"
    }
  ];

  const handleConsultationClick = () => {
    window.location.hash = 'contact';
  };

  return (
    <section id="case-studies" className="py-20 bg-c1 py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-c3 text-5xl text-center mb-4">
          Case Studies From Our Experiences
        </h2>
        <p className="text-2xl text-c3 text-center mb-16">
          Delivering measurable results through strategic transformation and execution
        </p>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {caseStudies.map((study, index) => (
            <div
              key={index}
              className="bg-c3 rounded-lg shadow-lg p-8"
            >
              <div className="flex justify-between items-start mb-4">
                <span className="bg-c1 text-c3 text-sm px-3 py-1 rounded-full">
                  {study.category}
                </span>
                <span 
                  className={`text-sm px-3 py-1 rounded-full ${
                    study.status === 'Active' 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-gray-100 text-gray-800'
                  }`}
                >
                  {study.status}
                </span>
              </div>

              <h3 className="text-c1 text-xl font-bold mb-6">
                {study.title}
              </h3>

              <div className="space-y-6">
                <div>
                  <h4 className="text-c5 font-bold mb-2">Challenge:</h4>
                  <p className="text-c1">
                    {study.challenge}
                  </p>
                </div>

                <div>
                  <h4 className="text-c4 font-bold mb-2">Solution:</h4>
                  <p className="text-c1">
                    {study.solution}
                  </p>
                </div>

                <div>
                  <h4 className="text-c2 font-bold mb-2">Key Results:</h4>
                  <ul className="space-y-2">
                    {study.results.map((result, i) => (
                      <li key={i} className="flex items-center text-c1">
                        <span className="text-c2 mr-2">→</span>
                        {result}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-6 flex items-center text-gray-500 text-sm">
                <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 6v6l4 2" />
                </svg>
                Project Duration: {study.duration}
              </div>
            </div>
          ))}
        </div>

        <div onClick={handleConsultationClick} 
        className="text-center mt-12" href="#contact">
          <button className="bg-c4 text-c3 px-8 py-3 rounded-lg hover:bg-c2 transition-colors">
            Discuss Your Project
          </button>
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;