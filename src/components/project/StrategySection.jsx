import React from 'react';

const StrategySection = () => {
  const services = [
    {
      title: "Project Feasibility Studies",
      description: "What are the internal factors that can make or break your project? Does your project have strategic alignment, departmental support, and subject matter expertise? Our Project Feasibility Studies help you determine your readiness to take on a particular project.",
      talkPoints: [
        "You are unsure how complex your project really is.",
        "Your project faces push-back.",
        "Project resource talent/capability is suspect."
      ]
    },
    {
      title: "Business Cases & Financials",
      description: "Business Cases & Financials are the seeds of project portfolios. We can help you coordinate a cross-departmental business case exercise; work with leaders to write the cases; and help you prioritize the projects that come from them.",
      talkPoints: [
        "You have limited insight into departmental priorities.",
        "Strategic goals and departmental needs are not in sync.",
        "There are more project requisitions than budget."
      ]
    },
    {
      title: "Technology & Digital Analysis",
      description: "We've all fallen in love with a piece of tech. But from a project perspective, can you successfully deliver and integrate it? Will it work with existing tech? Will it be viable long term? Good project portfolio planning incorporates Technical & Digital Analysis.",
      talkPoints: [
        "Your strategic goals require tech investments.",
        "You're being oversold on a \"silver bullet\" technology.",
        "New technology faces risky constraints and dependencies."
      ]
    },
    {
      title: "PMO Business Advisory & Development",
      description: "A PMO can empower project managers while mitigating risks with right-sized governance. Yet many organizations still struggle to build or use them properly. Using PMI and PMO Global Alliance standards for assessment and development, we can get your PMO onto the right, value-added footing.",
      talkPoints: [
        "You struggle with project performance and consistency.",
        "You are laying groundwork for a new PMO.",
        "Your PMO isn't delivering the benefits you expected."
      ]
    },
    {
      title: "Project Road Mapping",
      description: "Will it take one, 'big-bang' project? Or many? If more than one, what is the proper project sequence? With Project Road-Mapping, we help you determine \"how to eat the elephant\" by breaking strategic goals into project bites and charting the work across a time horizon.",
      talkPoints: [
        "A program is too big and unwieldy.",
        "Critical dependencies (e.g., regulatory) squeeze your timeline.",
        "Hard dependencies on resources or other projects are a concern."
      ]
    }
  ];

  return (
    <section id="strategy" className="bg-c4 py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl text-c3 mb-6">
          Strategy
        </h2>
        
        <p className="text-c3 text-2xl mb-16">
          Through our Strategic services, we help you gauge the strategy, business adoption, project plan, or technical
          feasibility of your vision. We then help you break down the strategic vision into programs and projects, and
          plot a roadmap for how to navigate them.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-c6 rounded-lg shadow-lg overflow-hidden transition-shadow duration-300 hover:scale-105"
            >
              <div className="p-6">
                <div className="inline-block bg-c4 text-c3 text-xs px-3 py-1 rounded-full mb-4">
                  Strategic Service
                </div>
                
                <h3 className="text-2xl text-c3 mb-4">
                  {service.title}
                </h3>
                
                <p className="text-c3 mb-6">
                  {service.description}
                </p>

                <div className="border-t pt-4">
                  <h4 className="font-semibold text-c2 mb-3">
                    Let's Talk If:
                  </h4>
                  <ul className="space-y-2">
                    {service.talkPoints.map((point, i) => (
                      <li key={i} className="flex items-start text-sm">
                        <span className="text-c2 mr-2">→</span>
                        <span className="text-c3">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StrategySection;