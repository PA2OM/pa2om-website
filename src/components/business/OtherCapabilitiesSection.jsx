import React from 'react';

const OtherCapabilitiesSection = () => {
  const capabilities = [
    {
      title: "Fractional to Emergency Coverage",
      description: "Projects can be situational, time sensitive, or urgent. Do you need experienced help, but not the burden of full-time and/or fixed-cost labor? Have you lost a project leader at an inopportune time? We can bring versatility to your project with fractional to emergency coverage.",
      talkPoints: [
        "You are open to creative, part-time resource strategies.",
        "You have lost a resource and need a hit-the-ground-running substitute.",
        "You could use targeted, deliverable-specific support."
      ]
    },
    {
      title: "Vendor Analysis & Selection",
      description: "Are you overwhelmed by the vendor selection process? Are you worried about making the wrong choice? Vendor Analysis & Selection is a formal, neutral service for evaluating vendors. We provide requirements-based screening; RFP management; and proposal evaluations.",
      talkPoints: [
        "You have limited bandwidth to run an extensive search.",
        "Your product decision is of strategic importance.",
        "You need alternatives to pricey, premium products."
      ]
    },
    {
      title: "Traditional Or Agile Project Delivery",
      description: "Does the topic of delivery methodology make your head spin (e.g., Waterfall, Agile, Six Sigma DMAIC, etc.)? We will work with your team to determine the optimal methodology to deliver your project and bring either Traditional or Agile Project Delivery options to the table.",
      talkPoints: [
        "Your internal team has no formal, methodological experience.",
        "You need a methodology recommendation for your project.",
        "You prefer specialists in a particular methodology."
      ]
    },
    {
      title: "Communications, SOPs, And Training",
      description: "Do end-users truly understand the 'Who, What, When Where, and Why' of your project? Our Communications, SOPs, & Training service can be utilized for ad-hoc, deliverable-specific needs, or as formal, project-wide initiatives.",
      talkPoints: [
        "The project has no formal communications and messaging campaign.",
        "You need to document new Standard Operating Procedures (SOPs).",
        "You need to create and/or coordinate a project-driven training program."
      ]
    }
  ];

  const ProjectRecoverySection = () => (
    <div className="bg-c6 text-c3 rounded-lg p-8 mt-12">
      <h3 className="text-c4 text-2xl mb-4">
        Project Recovery / Expedited Project Delivery
      </h3>
      
      <div className="space-y-6">
        <p>
          Has your project spiked in executive priority? Is there no way that you're going to meet executive
          expectations? Is your project compromised? Have internal or external circumstances forced you to
          deliver a project sooner than expected? Is delivery success now non-negotiable?
        </p>
        
        <p>
          Our Expedited/Recovery Project Delivery is comprised of project leaders skilled at fast-tracking
          projects. Our Project Recovery helps you to overcome project failure. Recovery takes far more than
          traditional project management. It's an emergency service to get you back on mission.
        </p>

        <div className="border-t border-c3 pt-4">
          <h4 className="text-c2 font-semibold mb-3">Let's Talk If:</h4>
          <ul className="space-y-2">
            <li className="flex items-start">
              <span className="text-c2 mr-2">•</span>
              <span>You face an unexpected, time-sensitive mandate, widespread requirements or defect concern.</span>
            </li>
            <li className="flex items-start">
              <span className="text-c2 mr-2">•</span>
              <span>The project faces significant stakeholder resistance, and you need to work outside of internal bureaucracies to get what you need done.</span>
            </li>
            <li className="flex items-start">
              <span className="text-c2 mr-2">•</span>
              <span>You have lost key resources, or they are simply out of their depth and need creative, tactical ways to increase project speed and efficacy.</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );

  return (
    <section id="other-capabilities" className="bg-c2 py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl text-c3 mb-6">
          Other Business Capabilities Offered
        </h2>

        <div className="">
          <p className="text-2xl text-c3 mb-4">
            For projects that are too vital to risk on conventional project management players.
          </p>
          <p className="text-2xl text-c3 mb-8">
            Is a project facing increased market pressure and executive urgency? Is your professional reputation
            tied to a project outcome? Has a project gone off the rails? Have you lost key leaders at the worst
            possible time? Project & Change Delivery offers specialized project managers who have the capability
            and flexibility to bring projects over the finish line.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {capabilities.map((capability, index) => (
            <div
              key={index}
              className="bg-c6 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
            >
              <h3 className="text-2xl text-c4 mb-4">
                {capability.title}
              </h3>
              <p className="text-c3 mb-6">
                {capability.description}
              </p>

              <div className="border-t pt-4">
                <h4 className="font-semibold text-c2 mb-3">Let's Talk If:</h4>
                <ul className="space-y-2">
                  {capability.talkPoints.map((point, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-c2 mr-2">•</span>
                      <span className="text-c3 text-sm">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <ProjectRecoverySection />
      </div>
    </section>
  );
};

export default OtherCapabilitiesSection;