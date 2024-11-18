import React from 'react';
import { Phone, Facebook, Instagram, Linkedin, Twitter, HelpCircle } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-c6 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Logo Section */}
          <div className="text-center md:text-left">
            <img 
              src="/PA2OM Logo Full.svg" 
              alt="PA2OM Logo" 
              className="h-16 mx-auto md:mx-0"
            />
          </div>

          {/* Contact Section */}
          <div className="text-center md:text-left">
            <h3 className="text-c4 text-xl font-bold mb-2">Want to talk?</h3>
            <a 
              href="tel:435-565-9589" 
              className="flex items-center justify-center md:justify-start text-lg hover:text-blue-400 transition-colors"
            >
              <Phone className="w-5 h-5 mr-2" />
              435-565-9589
            </a>
          </div>

          {/* Careers Section */}
          <div className="text-center md:text-left">
            <h3 className="text-c2 text-xl font-bold mb-2">Want to join our team?</h3>
            <p className="text-gray-300 mb-4">
              We are always looking for talented people to join our firm. Apply now and become a part of our unique culture.
            </p>
            <a 
              href="mailto:careers@pa2om.com"
              className="text-c2 hover:text-blue-400 transition-colors"
            >
              Apply Now
            </a>
          </div>

          {/* Help Section */}
          <div className="text-center md:text-left">
            <h3 className="text-c4 text-xl font-bold mb-2">Need help?</h3>
            <a 
              href="mailto:support@pa2om.com"
              className="flex items-center justify-center md:justify-start text-lg hover:text-blue-400 transition-colors"
            >
              <HelpCircle className="w-5 h-5 mr-2" />
              Contact Support
            </a>
          </div>
        </div>

        {/* Social Media and Copyright */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-c3 mb-4 md:mb-0">
              Copyright © {new Date().getFullYear()} PA2OM LLC. All Rights Reserved
            </p>
            <div className="flex space-x-6">
              <a href="https://facebook.com" className="text-gray-300 hover:text-blue-400 transition-colors">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="https://instagram.com" className="text-gray-300 hover:text-blue-400 transition-colors">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="https://www.linkedin.com/company/pa2om/about/?viewAsMember=true" className="text-gray-300 hover:text-blue-400 transition-colors">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="https://x.com" className="text-gray-300 hover:text-blue-400 transition-colors">
                <Twitter className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;