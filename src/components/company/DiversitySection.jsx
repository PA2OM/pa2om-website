import React from 'react';

const DiversitySection = () => {
  const values = [
    {
      title: "Diversity",
      description: "Embracing different perspectives, backgrounds, and experiences"
    },
    {
      title: "Equality",
      description: "Ensuring fair treatment, access, and advancement for all"
    },
    {
      title: "Inclusion",
      description: "Creating an environment where everyone feels welcome and valued"
    }
  ];

  return (
    <section className="relative bg-black text-white overflow-hidden">
      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content Column */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                OUR COMMITMENT TO
                <br />
                DIVERSITY, EQUALITY &
                <br />
                INCLUSION
              </h2>
            </div>

            <div className="space-y-6 text-lg">
              <p>
                We believe that diversity fuels innovation, equity creates opportunity,
                and inclusion fosters growth. As a growing business consulting and service
                delivery execution firm, we are committed to building a workplace where
                everyone—regardless of background, identity, or experience—feels valued
                and empowered to contribute their best.
              </p>
              <p>
                We embrace diverse perspectives and actively seek to create an environment
                where differences are celebrated, and equity is at the heart of every
                decision we make. By fostering an inclusive culture, we ensure that our
                team, clients, and community thrive together in a space of respect and
                opportunity.
              </p>
              <p>
                Together, we are dedicated to driving meaningful change both within our
                company and in the business world at large.
              </p>
            </div>
          </div>

          {/* Right Image Column with Torn Edge Effect */}
          <div className="relative">
            <div className="relative">
              {/* SVG Torn Edge Overlay */}
              <div className="absolute inset-0 -left-12">
                <svg 
                  viewBox="0 0 100 1000" 
                  className="h-full" 
                  preserveAspectRatio="none"
                >
                  <path
                    d="M0,0 C30,120 70,180 100,240 C70,300 30,360 100,420 C30,480 70,540 100,600 C30,660 70,720 100,780 C30,840 70,900 100,960 L100,0 L0,0"
                    fill="black"
                  />
                </svg>
              </div>

              <img
                src="/api/placeholder/800/600"
                alt="Diverse team collaboration"
                className="w-full h-full object-cover rounded-r-lg relative z-10"
              />
            </div>

            {/* Decorative Elements */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-blue-600 opacity-20 rounded-full"></div>
            <div className="absolute -top-4 -right-4 w-16 h-16 bg-orange-500 opacity-20 rounded-full"></div>
          </div>
        </div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          {values.map((value, index) => (
            <div 
              key={index} 
              className="bg-white/5 p-6 rounded-lg backdrop-blur-sm"
            >
              <h3 className="text-xl font-bold text-orange-500 mb-3">
                {value.title}
              </h3>
              <p className="text-gray-300">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Optional: Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-transparent"></div>
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100">
          <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
            <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.5"/>
          </pattern>
          <rect width="100" height="100" fill="url(#grid)"/>
        </svg>
      </div>
    </section>
  );
};

export default DiversitySection;