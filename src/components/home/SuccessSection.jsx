import React from 'react';

const SuccessSection = () => {
  const successBoxes = [
    {
      title: "Work With Our Elite Team",
      bgColor: "bg-c4", // Using Tailwind's core red color instead of arbitrary hex
      points: [
        "Direct access to senior experts who become your dedicated partners",
        "Experience the same exceptional service whether working with leadership or implementation teams",
        "Benefit from our team's deep industry expertise, with specialists bringing 15-35 years of hands-on experience"
      ]
    },
    {
      title: "Built on a Foundation Of Trust",
      bgColor: "bg-c2", // Using Tailwind's core green color instead of arbitrary olive
      points: [
        "Drive lasting success through strategic, long-term partnerships focused on your goals",
        "Experience the advantage of our boutique approach: personalized attention and deep relationships",
        "Leverage our proven track record of scaling complex enterprise implementations with precision and efficiency"
      ]
    },
    {
      title: "Change Management Is At The Core Of Everything We Do",
      bgColor: "bg-c5", // Using Tailwind's core blue color instead of arbitrary hex
      points: [
        "Transform your organization by empowering your greatest asset - your people",
        "Integrate change management principles into every solution, creating sustainable success",
        "Experience our holistic approach where change enablement drives lasting results"
      ]
    }
  ];

  return (
    <section id="success" className="relative bg-c6 py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Left content */}
          <h2 className="text-c3 text-4xl md:text-5xl font-Suse mb-8">Focused on Success</h2>
          <div className="mb-12 space-y-6">
            <p className="text-c3 text-2xl">
              Work with a team of experienced consultants, delivery experts, and a results-driven approach, 
              we partner with clients to drive sustainable performance and foster innovation in their 
              organizations.
            </p>
          </div>

          {/* Success Boxes */}
          <div className="space-y-6">
            {successBoxes.map((box, index) => (
              <div 
                key={index} 
                className={`${box.bgColor} text-white rounded-lg p-6 shadow-lg`}
              >
                <h3 className="text-2xl mb-4">{box.title}</h3>
                <ul className="space-y-3">
                  {box.points.map((point, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>{point}</span>
                    </li>
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

export default SuccessSection;