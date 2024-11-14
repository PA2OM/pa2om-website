import React from 'react';
import { Network, Globe2, Users2, Handshake, BookOpen, Target } from 'lucide-react';

const DifferenceSection = () => {
  const differentiators = [
    {
      title: "Diverse Expertise",
      description: "We boast a rich diversity of thought and seasoned consultants with broad industry expertise.",
      icon: Network
    },
    {
      title: "Global Leadership",
      description: "Experienced in leading international transformations, we provide strategic insights to navigate and thrive in global markets.",
      icon: Globe2
    },
    {
      title: "Hands-on Approach",
      description: "Our coaches and team love to engage directly with the frontline, ensuring sustainable transformation.",
      icon: Users2
    },
    {
      title: "Long-Term Partnerships",
      description: "We target clients to build lasting relationships rather than short, intensive engagements to ensure that you foster skill development and develop a new way of working.",
      icon: Handshake
    },
    {
      title: "Thought Leadership",
      description: "Recognized leaders in our field, we are well-versed in industry trends and contribute significantly through our publications and insights.",
      icon: BookOpen
    },
    {
      title: "Strategic Vision",
      description: "We focus on simplifying, digitalizing, and scaling operations, leveraging the latest technologies to meet specific client needs.",
      icon: Target
    }
  ];

  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            The PA2OM Difference
          </h2>
          <p className="text-xl text-gray-600">
            At PA2OM, we pride ourselves on our diversity of thought and depth of experience from our seasoned
            consultants, each bringing unique expertise and extensive experience across various industries.
          </p>
        </div>

        {/* Differentiators Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {differentiators.map((diff, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-lg p-8 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="text-blue-600 mb-4">
                <diff.icon size={48} strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {diff.title}
              </h3>
              <p className="text-gray-600">
                {diff.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="inline-flex flex-col items-center">
            <p className="text-gray-600 mb-6 max-w-2xl">
              Ready to experience the PA2OM difference? Let's discuss how our unique approach
              can transform your operations and drive sustainable growth.
            </p>
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-300">
              Learn More About Our Approach
            </button>
          </div>
        </div>
      </div>

      {/* Optional: Background Pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-transparent"></div>
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100">
          <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
            <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5"/>
          </pattern>
          <rect width="100" height="100" fill="url(#grid)"/>
        </svg>
      </div>
    </section>
  );
};

export default DifferenceSection;