import React from 'react';

const Navigation = () => {
  const navItems = [
    'HOME',
    'ABOUT US',
    'OUR SERVICES',
    'INDUSTRIES SERVED',
    'THE TEAM',
    'PARTNERSHIPS',
    'TESTIMONIALS',
    'CONTACT'
  ];

  return (
    <nav className="bg-[#1E3B8B] text-white py-4">
      <div className="container mx-auto px-4">
        <ul className="flex flex-wrap justify-center gap-8">
          {navItems.map((item) => (
            <li key={item} className="text-sm hover:text-gray-300 cursor-pointer">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;