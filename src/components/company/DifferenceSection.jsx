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
  const handleConsultationClick = () => {
    window.location.hash = 'contact';
  };
  return (
    <section id="differences" className="bg-c4 py-20">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-5xl md:text-5xl text-c3 mb-6">
            The PA2OM Difference
          </h2>
          <p className="text-2xl text-c3">
            At PA2OM, we pride ourselves on our diversity of thought and depth of experience from our seasoned
            consultants, each bringing unique expertise and extensive experience across various industries.
          </p>
        </div>

        {/* Differentiators Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {differentiators.map((diff, index) => (
            <div
              key={index}
              className="bg-c6 rounded-lg p-8 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="text-c4 mb-4">
                <diff.icon size={48} strokeWidth={1.5} />
              </div>
              <h3 className="text-xl text-c2 mb-4">
                {diff.title}
              </h3>
              <p className="text-c4">
                {diff.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="inline-flex flex-col items-center">
            <p className="text-c3 mb-6 max-w-2xl">
              Ready to experience the PA2OM difference? Let's discuss how our unique approach
              can transform your operations and drive sustainable growth.
            </p>
            <button 
             onClick={handleConsultationClick}
             className="bg-c2 text-white px-8 py-3 rounded-lg hover:bg-c6 transition-colors duration-300">
              Learn More About Our Approach
            </button>
          </div>
        </div>
      </div>

      {/* Optional: Background Pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-transparent"></div>
          <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
            <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5"/>
          </pattern>
          <rect width="100" height="100" fill="url(#grid)"/>
      </div>
    </section>
  );
};

export default DifferenceSection;