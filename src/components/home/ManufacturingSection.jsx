import React from 'react';

const ManufacturingSection = () => {
  return (
<section id="manufacturing" className="py-10 bg-white"> {/* Added bg-white */}
  <div className="max-w-4xl mx-auto">
    <div className="container mx-auto px-4 text-center">
        <h2 className="text-5xl text-c5 mb-10">
        Manufacturing & Supply Chain {' '}
        <br />
        <span className="text-c2">Strategic Transformation</span>
        </h2>
          <div className="bg-gray-100 p- rounded-lg shadow-lg mb-12">
            <p className="text-lg max-w-3xl mx-auto text-c6 mb-3 leading-relaxed">
              At PA2OM, our team specializes in delivering transformative operational strategies to empower manufacturing organizations and drive sustainable performance.
            </p>
            <p className="text-lg max-w-3xl mx-auto text-c6 mb-3 leading-relaxed">
              With our deep industry expertise and results-driven approach, we partner with our clients to achieve strategic outcomes that position them as leaders in the industrial manufacturing sector.
            </p>
            <p className="text-lg max-w-3xl mx-auto text-c6 mb-3 leading-relaxed">
              Let us help your organization thrive in a competitive market and foster innovation to stay ahead of the curve. Contact us today to learn more about how we can support your business goals.
            </p>
          </div>
            <a 
              href="#contact"
              className="bg-c4 text-c3 px-8 py-3 rounded-lg hover:bg-c2 transition-colors">
              Schedule a Consultation
            </a>
        </div>
      </div>
    </section>
  );
};

export default ManufacturingSection;