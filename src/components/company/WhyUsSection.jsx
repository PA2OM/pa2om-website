import React from 'react';

const WhyUsSection = () => {
  const features = [
    {
      title: "SENIOR PROFESSIONALS",
      description: "Our clients choose PA2OM because it's the preferred destination for senior-level project leaders who are experienced, knowledgeable, and at the top of their game.",
      emoji: "👔"
    },
    {
      title: "COMPREHENSIVE PROJECT EXPERTISE",
      description: "Together, PA2OM's independent professionals comprise a team with comprehensive project expertise, from portfolio and PMO development, to program and project management across business strategy transformation.",
      emoji: "🎯"
    },
    {
      title: "FLEXIBLE INDEPENDENT WORKFORCE",
      description: "We understand the value that independent professionals bring to the table, and we're dedicated to ensuring that your organization can seamlessly tap into this growing pool of expertise.",
      emoji: "🔄"
    }
  ];

  return (
    <section className="bg-gradient-to-b from-gray-100 to-white py-20">
      <div className="container mx-auto px-4">
        {/* Main Title and Introduction */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className="inline-block bg-orange-500 h-1 w-12 mb-4"></div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
            Why Us
          </h2>
          
          <div className="bg-white p-8 rounded-lg shadow-lg mb-12">
            <p className="text-xl font-semibold text-blue-900 mb-4">
              PA2OM is a welcome resource alternative to hiring, traditional consulting, and staffing.
            </p>
            <p className="text-gray-600">
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
              className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="text-4xl mb-4">{feature.emoji}</div>
              <h3 className="text-xl font-bold text-blue-900 mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Background Image Section */}
        <div className="mt-16 relative">
          <div className="rounded-xl overflow-hidden">
            <img
              src="/api/placeholder/1200/400"
              alt="Professional team collaboration"
              className="w-full h-[400px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-transparent flex items-center">
              <div className="max-w-xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">
                  Experience the PA2OM Difference
                </h3>
                <p className="mb-6">
                  Partner with us to access top-tier talent and comprehensive project expertise
                  that drives real business transformation.
                </p>
                <button className="bg-orange-500 text-white px-8 py-3 rounded-lg hover:bg-orange-600 transition-colors">
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