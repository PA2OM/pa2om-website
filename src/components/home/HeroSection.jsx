import React from 'react';

const HeroSection = () => {
  return (
<section 
  id="home" 
  className="relative py-20 bg-white"
  style={{ 
    background: 'white',
    backgroundImage: 'none !important'
  }}
>
  <div className="container mx-auto px-4 text-center">
    <h1 className="text-c6 text-4xl mb-20">
      Welcome to a new era of business transformation
    </h1>
    
    <div className="mb-20">
      <img
        src="/PA2OM Logo Full.svg"
        alt="PA2OM Logo"
        className="h-48 mx-auto"
      />
    </div>
    <div className="max-w-5xl mx-auto">
      <p className="text-c6 text-xl max-w-3xl mx-auto leading-relaxed">
        Our Mission is to Transform manufacturing excellence through innovative operational strategies,
        driving sustainable performance improvements and measurable business outcomes that
        position our clients as industry leaders.
      </p>
    </div>
  </div>
</section>

  );
};

export default HeroSection;