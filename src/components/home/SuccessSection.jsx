import React from 'react';

const SuccessSection = () => {
  const successBoxes = [
    {
      title: "Work With Our A-Team",
      bgColor: "bg-[#8B0000]", // Dark red color
      points: [
        "Who you speak to is who you work with.",
        "Our executive team is the same as our frontline team.",
        "Our people come with industry experience ranging between 15 ~ 35 years"
      ]
    },
    {
      title: "Built on a Foundation Of Trust",
      bgColor: "bg-[#808000]", // Olive color
      points: [
        "We create long-term partnerships to assist clients in reaching their goals.",
        "We keep our business purposely small and focus on relationships.",
        "Adept and experienced at efficiently scaling large implementation projects."
      ]
    },
    {
      title: "Change Management Is At The Core Of Everything We Do",
      bgColor: "bg-[#1E3B8B]", // Dark blue color (matching the header)
      points: [
        "Your business changes when your people do.",
        "Change management is woven into everything we do, it part of our program"
      ]
    }
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Left content */}
          <h2 className="text-4xl font-bold mb-8">Focused on Success</h2>
          <div className="mb-12 space-y-6">
            <p className="text-lg">
              PA2OM is a leading business consulting firm specializing in providing transformative 
              operational strategies for industrial manufacturing companies.
            </p>
            <p className="text-lg">
              With a team of experienced consultants, delivery experts, and a results-driven approach, 
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
                <h3 className="text-lg font-bold mb-4">{box.title}</h3>
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