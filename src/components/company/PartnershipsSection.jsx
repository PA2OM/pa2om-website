import React from 'react';

const PartnershipsSection = () => {
  return (
    <section className="relative">
      {/* Hero Section with Image */}
      <div className="relative h-[600px] md:h-[500px] w-full">
        <img
          src="/api/placeholder/1200/800"
          alt="Business partners meeting"
          className="w-full h-full object-cover"
        />
        
        {/* Overlay with irregular shape */}
        <div className="absolute inset-0">
          <svg
            viewBox="0 0 100 100"
            className="h-full w-full"
            preserveAspectRatio="none"
          >
            <path
              d="M0,0 L100,0 L100,85 C75,95 50,90 25,85 L0,80 Z"
              fill="white"
              className="opacity-90"
            />
          </svg>
        </div>

        {/* Content Overlay */}
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl ml-auto">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                PARTNERSHIPS
              </h2>
              <div className="prose prose-lg text-gray-700">
                <p className="mb-4">
                  We recognize that strategic partnerships are key to rapid
                  scalability and long-term success, especially in the dynamic
                  and complex manufacturing industry.
                </p>
                <p>
                  As a growing business consulting and service delivery firm,
                  partnerships enable us to tap into a diverse pool of expertise,
                  resources, and capabilities, allowing us to deliver customized
                  solutions across the entire value chain—from the manufacturing
                  shop floor to your enterprise systems.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Detailed Content Section */}
      <div className="bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Left Column */}
            <div className="space-y-8">
              <div className="prose prose-lg">
                <p>
                  Furthermore, our ability to leverage onshore, nearshore, and offshore
                  partnerships provides flexibility and scalability that adapt to our clients'
                  evolving needs. Whether it's rapidly assembling teams with deep industry
                  knowledge or providing specialized skills, our partnerships allow us to
                  draw on the best talent, wherever they are, and deploy solutions quickly
                  and efficiently.
                </p>
                <p>
                  By combining local insights with global expertise, we ensure our clients
                  have access to the right mix of skills and perspectives. Whether it's
                  optimizing operations on the shop floor or implementing comprehensive ERP
                  systems, our collaborative approach guarantees that every aspect of your
                  business is supported by the right people with the right experience.
                </p>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-8">
              <div className="prose prose-lg">
                <p>
                  Partnerships empower us to provide the broad spectrum of consulting
                  services required to meet the demands of modern manufacturing—from
                  technical innovation and process optimization to business transformation
                  and financial integration.
                </p>
                <p>
                  Together, we can drive operational excellence, foster growth, and ensure
                  long-term sustainability for our clients in the manufacturing sector.
                </p>
              </div>

              <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                Explore Partnership Opportunities
              </button>
            </div>
          </div>

          {/* Optional Partner Logos Grid */}
          <div className="mt-16">
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center justify-items-center opacity-70">
              {[1, 2, 3, 4, 5, 6].map((index) => (
                <div 
                  key={index} 
                  className="w-32 h-16 bg-gray-100 rounded flex items-center justify-center"
                >
                  <span className="text-gray-400">Partner Logo</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnershipsSection;