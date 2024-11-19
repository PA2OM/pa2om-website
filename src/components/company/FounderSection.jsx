import React from 'react';
import Badge from '../common/Badge';

const FounderSection = () => {
  const industries = [
    "Discrete Manufacturing",
    "Automotive",
    "Aerospace",
    "Electronics",
    "Food & Beverage",
    "Metals & Mining",
    "Chemicals",
    "Life Sciences",
    "Power & Energy",
    "Oil & Gas",
    "Pulp & Paper"
  ];

  return (
    <section id="founder" className="bg-gradient-to-b from-gray-100 to-white py-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content Column */}
          <div className="space-y-8">
            <div>
              <h2 className="text-5xl md:text-5xl text-c2 mb-6">
                About our Founder
              </h2>
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-c5">
                With 34 years of personal diverse experience in the industrial manufacturing
                sector, the founder has established himself as a recognized leader in
                Manufacturing Systems and IT Solutions, driving business transformation
                across both discrete and process industries. His focus on strategic
                transformation is tailored to the unique needs of manufacturing, supply
                chain, and corporate strategy with an in-depth understanding of all level
                of manufacturing from both a supplier and customer's perspective.
              </p>

              <div className="my-8">
                <h3 className="text-2xl text-c2 mb-4">
                  Industry Expertise
                </h3>
                <div className="flex flex-wrap gap-2">
                  {industries.map((industry, index) => (
                    <Badge
                      key={index}
                      variant="c1"
                      size="sm"
                      className="bg-c1 text-c3"
                    >
                      {industry}
                    </Badge>
                  ))}
                </div>
              </div>

              <p className="text-c5">
                PA2OM's expertise spans a broad range of industries, equipping him with a deep
                understanding of both the operational and technological challenges that
                industries face.
              </p>

              <p className="text-c5">
                Through his comprehensive network of partners and collaborators from physical
                product suppliers to consulting delivery services PA2OM brings together a
                wealth of experience, amounting to hundreds of years of collective industry
                insight. This enables the firm to deliver world-class business advisory and
                implementation services, ensuring measurable outcomes that directly impact
                performance and financial success.
              </p>
            </div>
          </div>

          {/* Right Image Column */}
          <div className="relative">
            <div className="relative z-10">
              <div className="max-w-md mx-auto"> {/* Added container with max width */}
                <img
                  src="/Profile Pic.svg"
                  alt="Manufacturing facility"
                  className="w-full rounded-lg shadow-xl"
                />
              </div>

              {/* Stats Overlay */}
              <div className="absolute -bottom-8 -left-8">
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <div className="text-3xl text-bold text-c2">34+</div>
                      <div className="text-sm text-c5">Years Experience</div>
                    </div>
                    <div>
                      <div className="text-3xl text=bold text-c2">11+</div>
                      <div className="text-sm text-c5">Industries Served</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative Element */}
            <div className="absolute top-8 -right-8 w-full h-full bg-green-100 rounded-lg -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FounderSection;