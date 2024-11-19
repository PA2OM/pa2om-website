import React from 'react';

const WhyUsSection = () => {
  const features = [
    {
      title: "SENIOR PROFESSIONALS",
      description: "Our clients choose PA2OM because it's the preferred destination for senior-level project leaders who are experienced, knowledgeable, and at the top of their game."
    },
    {
      title: "COMPREHENSIVE PROJECT EXPERTISE",
      description: "Together, PA2OM's independent professionals comprise a team with comprehensive project expertise, from portfolio and PMO development, to program and project management across business strategy transformation."
    },
    {
      title: "FLEXIBLE INDEPENDENT WORKFORCE",
      description: "We understand the value that independent professionals bring to the table, and we're dedicated to ensuring that your organization can seamlessly tap into this growing pool of expertise."
    }
  ];
  
  const handleConsultationClick = () => {
    window.location.hash = 'contact';
  };
  
  return (
    <section id="our-team" className="bg-gradient-to-b from-c6 to-c3 py-20 bg-gradient-to-b from-c4 to-white py-20">
      <div className="container mx-auto px-4">
        {/* Main Title and Introduction */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-5xl md:text-5xl text-c3 mb-8">
            About Us
          </h2>
          
          <div className="bg-white p-8 rounded-lg shadow-lg mb-12">
            <p className="text-2xl text-c1 mb-4">
              PA2OM is a welcome resource alternative to hiring, traditional strategic business advisory, and staffing. 
            </p>
            <p className="text-2xl text-c1 mb-4">
              Our unique "TEAM" provides varied flexible skills and expertise.
            </p>
            <p className="text-c1">
              Many organizations do not have a formal talent strategy that accounts for the growing base
              of independent professionals. PA2OM gives clients preferred access to the power, prestige,
              and future of the American independent economy including our vast network of professional
              leaders globally both nearshore and offshore to maximize program cost management.
            </p>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-c3 rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <h3 className="text-2xl text-c1 mb-4">
                {feature.title}
              </h3>
              <p className="text-c1">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Background Image Section */}
        <div className="mt-16 relative">
          <div className="rounded-xl overflow-hidden">
            <img
              src="/4247797.svg"
              alt="Professional team collaboration"
              className="w-full h-[400px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-transparent flex items-center">
              <div className="max-w-2xl p-8 text-c3">
                <h3 className="text-4xl mb-4">
                  Experience the PA2OM Difference
                </h3>
                <p className="text-xl mb-6">
                  Partner with us to access top-tier talent and comprehensive project expertise
                  that drives real business transformation.
                </p>
                <button 
                  onClick={handleConsultationClick}
                  className="bg-c4 text-white px-8 py-3 rounded-lg hover:bg-c2 transition-colors">
                  Start Your Journey
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;