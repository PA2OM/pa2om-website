import React from 'react';

const Navigation = () => {
  const navItems = [
    { title: 'HOME', id: 'home' },
    {
      title: 'ABOUT US',
      id: 'about-us',
      subMenu: [
        { title: 'Our Team', link: '#our-team' },
        { title: 'Our History', link: '#our-history' },
        { title: 'Our Founder', link: '#founder' }
      ]
    },
    {
      title: 'OUR SERVICES',
      id: 'services',
      subMenu: [
        { title: 'What We Bring', link: '#services' },
        { title: 'Achieving Success', link: '#success' },
        { title: 'The PA2OM Difference', link: '#differences' },
        { title: 'Business Transformation', link: '#capabilities' },
        { title: 'Consulting', link: '#consulting' },
        { title: 'Strategy', link: '#strategy' },
        { title: 'Change Management', link: '#project-success' }
      ]
    },
    { title: 'INDUSTRIES SERVED', id: 'industries' },
    { title: 'PARTNERSHIPS', id: 'partnerships' },
    {
      title: 'PA2OM EXPERIENCE',
      id: 'case-studies',
      subMenu: [
        { title: 'Case Studies', link: '#case-studies' },
        { title: 'Testimonials', link: '#testimonials' }
      ]
    },
    { title: 'CONTACT US', id: 'contact' }
  ];

  return (
    <nav className="bg-c6 text-white py-4 fixed w-full top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <div className="flex-shrink-0">
            <img 
              src="/PA2OM Logo Name Only.svg" 
              alt="PA2OM Logo" 
              className="h-10"
            />
          </div>
          
          <ul className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <li 
                key={item.id} 
                className="relative group"
              >
                <a 
                  href={`#${item.id}`}
                  className="text-sm hover:text-c2 transition-colors cursor-pointer"
                >
                  {item.title}
                </a>

                {/* Dropdown Menu */}
                {item.subMenu && (
                  <ul 
                    className="absolute left-0 top-full mt-0 bg-c6 text-c3 shadow-lg rounded-lg py-2 z-50 group-hover:block hidden"
                    style={{ minWidth: '200px' }}  // Ensures the dropdown has enough width
                  >
                    {item.subMenu.map((subItem) => (
                      <li key={subItem.link}>
                        <a 
                          href={subItem.link} 
                          className="block px-4 py-2 hover:text-c2 transition-colors cursor-pointer"
                        >
                          {subItem.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
