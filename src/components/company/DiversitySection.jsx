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
    <section id="diversity" className="relative bg-c12 text-white overflow-hidden">
      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content Column */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-5xl md:text-5xl leading-tight">
                Our Commitment To Both
                <br />
                Partnership and Employee
                <br />
                "Diversity, Equality & Inclusion"
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
              <img
                src="/DEI3.svg"
                alt="Diverse team collaboration"
                className="w-full h-full"
              />
            </div>
          </div>
        </div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          {values.map((value, index) => (
            <div 
              key={index} 
              className="bg-white/25 p-6 rounded-lg backdrop-blur-lg"
            >
              <h3 className="text-2xl text-c2 mb-3">
                {value.title}
              </h3>
              <p className="text-c3">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DiversitySection;