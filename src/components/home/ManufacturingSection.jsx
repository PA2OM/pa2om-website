import React from 'react';

const ManufacturingSection = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-12">
          Manufacturing & Supply Chain{' '}
          <span className="text-[#4169E1]">Strategic</span>
          <br />
          <span className="text-[#4169E1]">Transformation</span>
        </h2>

        <p className="max-w-3xl mx-auto text-gray-700 mb-12 leading-relaxed">
          Our Mission is to Transform manufacturing excellence through innovative operational strategies,
          driving sustainable performance improvements and measurable business outcomes that
          position our clients as industry leaders.
        </p>

        <button className="bg-black text-white px-8 py-3 rounded-lg hover:bg-gray-800 transition-colors mb-12">
          Schedule a Consultation
        </button>

        <div className="bg-[#F0F0F0] p-8 max-w-4xl mx-auto rounded-lg">
          <div className="space-y-6 text-left">
            <p>
              At PA2OM, we specialize in delivering transformative operational strategies to empower
              manufacturing organizations and drive sustainable performance.
            </p>
            <p>
              With our deep industry expertise and results-driven approach, we partner with our clients to
              achieve strategic outcomes that position them as leaders in the industrial manufacturing
              sector.
            </p>
            <p>
              Let us help your organization thrive in a competitive market and foster innovation to stay
              ahead of the curve. Contact us today to learn more about how we can support your business goals.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ManufacturingSection;