import React from 'react';

const HeroSection = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl font-bold mb-20">
          Welcome to a new era of business transformation
        </h1>
        
        <div className="mb-20">
          <div className="text-7xl font-bold">
            <span className="text-[#556B2F]">PA</span>
            <span className="text-[#FF6B00]">2</span>
            <span className="text-[#556B2F]">OM</span>
          </div>
        </div>

        <div className="text-xl tracking-wide space-x-1">
          <span className="text-[#556B2F] font-semibold">P</span>
          <span>ERFORMANCE </span>
          <span className="text-[#556B2F] font-semibold">A</span>
          <span>DVANCEMENTS </span>
          <span className="text-[#FF6B00] font-semibold">THROUGH </span>
          <span className="text-[#556B2F] font-semibold">O</span>
          <span>PERATIONAL </span>
          <span className="text-[#556B2F] font-semibold">M</span>
          <span>ASTERY</span>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;