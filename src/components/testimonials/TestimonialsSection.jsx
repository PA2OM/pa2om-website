import React from 'react';
import StarRating from '../common/StarRating';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Beatrice M.",
      location: "Grand Rapids, MI",
      quote: "PA2OM's guidance has revolutionized our operation leading to significant growth in our industry",
      industry: "Manufacturing"
    },
    {
      name: "Mike D.",
      location: "Austin, TX",
      quote: "Working with PA2OM had been a game-changer for our company. Their expertise and dedication are unmatched",
      industry: "Automotive"
    },
    {
      name: "Allison S.",
      location: "Wichita, KS",
      quote: "I cannot recommend working with PA2OM enough. Their strategic approach has truly set us apart in the competitive manufacturing space",
      industry: "Aerospace"
    }
  ];

  const QuoteIcon = () => (
    <div className="absolute -top-4 left-8 bg-blue-600 text-white p-2 rounded-full">
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          strokeWidth="2" 
          d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" 
        />
      </svg>
    </div>
  );

  return (
    <section className="bg-gradient-to-b from-white to-gray-50 py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Hear What Our Clients Have to Say
          </h2>
          <p className="text-gray-600 text-lg">
            Delivering measurable results through strategic transformation and execution
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="relative bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow duration-300"
            >
              <QuoteIcon />
              
              {/* Rating */}
              <div className="mb-4">
                <StarRating />
              </div>

              {/* Quote */}
              <blockquote className="text-gray-700 mb-6">
                "{testimonial.quote}"
              </blockquote>

              {/* Author Info */}
              <div className="mt-auto">
                <div className="font-semibold text-gray-900">
                  {testimonial.name}
                </div>
                <div className="text-gray-500 text-sm">
                  {testimonial.location}
                </div>
                <div className="text-blue-600 text-sm mt-1">
                  {testimonial.industry}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
            Read More Reviews
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;