import React, { useState } from 'react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    isCurrentClient: false,
    message: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('REQUEST TYPE');
  
  const options = [
    'REQUEST PROJECT DISCOVERY CALL',
    'REQUEST PARTNERSHIP DISCUSSION',
    'INITIATE CAREER OPPORTUNITY DISCUSSION',
    'OTHER'
  ];
  
  return (
    <section id="contact" className="bg-gradient-to-br from-c1 to-yellow-500 py-40">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12">
          {/* Left Column - Message */}
          <div className="md:w-1/2 text-white space-y-8">
            <div className="space-y-6">
              <h3 className="text-lg tracking-widest">
                Need To Talk?
              </h3>
              <h2 className="text-5xl Suse">
                Maximize Your
                <br />
                Strategic Outcome
              </h2>
              <p className="text-xl leading-relaxed">
                Contact our experts today for a complimentary consultation
                to explore the smartest next steps to achieve your strategic goals.
              </p>
{/* Container for the paragraph with bottom padding */}
<div className="pb-20"> {/* Padding-bottom will create space between the text and the button */}
</div>
              {/* Email Button Fixed on Left Side */}
<a
          href="mailto:inquiry@pa2om.com" 
          className="right-0 top-1/2 transform -translate-y-1/2 bg-yellow-500 text-white px-4 py-4 rounded-full shadow-lg 
                     hover:bg-yellow-600 transition-colors"
        >
          CLICK HERE TO EMAIL US DIRECTLY
        </a>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="md:w-1/2">
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Form inputs with contemporary styling */}
              <input
                type="text"
                name="firstName"
                placeholder="First Name*"
                required
                className="w-full px-6 py-4 bg-yellow-100/20 backdrop-blur-sm rounded-full 
                         text-white placeholder-white/70 border border-white/20
                         focus:outline-none focus:border-white transition-colors"
                onChange={handleChange}
              />

              <input
                type="text"
                name="lastName"
                placeholder="Last Name*"
                required
                className="w-full px-6 py-4 bg-yellow-100/20 backdrop-blur-sm rounded-full 
                         text-white placeholder-white/70 border border-white/20
                         focus:outline-none focus:border-white transition-colors"
                onChange={handleChange}
              />

              <input
                type="email"
                name="email"
                placeholder="Email*"
                required
                className="w-full px-6 py-4 bg-yellow-100/20 backdrop-blur-sm rounded-full 
                         text-white placeholder-white/70 border border-white/20
                         focus:outline-none focus:border-white transition-colors"
                onChange={handleChange}
              />

              <input
                type="text"
                name="company"
                placeholder="Company"
                className="w-full px-6 py-4 bg-yellow-100/20 backdrop-blur-sm rounded-full 
                         text-white placeholder-white/70 border border-white/20
                         focus:outline-none focus:border-white transition-colors"
                onChange={handleChange}
              />

              {/* Current Client Radio Buttons */}
              <div className="space-y-2 text-white">
                <p>Are You a Current Client?</p>
                <div className="flex gap-6">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="isCurrentClient"
                      value="yes"
                      className="w-4 h-4"
                      onChange={handleChange}
                    />
                    <span>Yes</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="isCurrentClient"
                      value="no"
                      className="w-4 h-4"
                      onChange={handleChange}
                    />
                    <span>No</span>
                  </label>
                </div>
              </div>

              <textarea
                name="message"
                placeholder="Message*"
                required
                rows={4}
                className="w-full px-6 py-4 bg-yellow-100/20 backdrop-blur-sm rounded-3xl 
                         text-white placeholder-white/70 border border-white/20
                         focus:outline-none focus:border-white transition-colors"
                onChange={handleChange}
              />
<div className="relative">
  <button
    type="button"
    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
    className="w-full px-6 py-4 bg-yellow-100/20 backdrop-blur-sm rounded-full 
             text-white border border-white/20 hover:bg-c5
             focus:outline-none transition-colors flex items-center justify-between"
  >
    <span>{selectedOption}</span>
    <span className={`transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`}>▼</span>
  </button>
  
  {isDropdownOpen && (
    <div className="absolute w-full mt-2 bg-c5 border border-c5 rounded-lg overflow-hidden z-10">
      {options.map((option) => (
        <div
          key={option}
          className="px-6 py-4 hover:bg-c4 cursor-pointer text-white transition-colors"
          onClick={() => {
            setSelectedOption(option);
            setIsDropdownOpen(false);
          }}
        >
          {option}
        </div>
      ))}
    </div>
  )}
</div>

              <button
                type="submit"
                className="py-10 w-full px-6 py-4 bg-yellow-100/20 backdrop-blur-sm rounded-full 
                         text-white border border-white/20 hover:bg-white/30
                         focus:outline-none transition-colors flex items-center justify-between"
              >
                <span>SUBMIT REQUEST</span>
                <span>→</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;