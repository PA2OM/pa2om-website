import React, { useState } from 'react';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openSubmenuId, setOpenSubmenuId] = useState(null);

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

    // ... rest of your navItems
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setOpenSubmenuId(null);
  };

  const toggleSubmenu = (id) => {
    setOpenSubmenuId(openSubmenuId === id ? null : id);
  };

  const handleMobileNavClick = (link) => {
    setIsMenuOpen(false);
    setOpenSubmenuId(null);
    window.location.href = link;
  };

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

          {/* Hamburger Menu Button */}
          <button
            className="md:hidden text-white focus:outline-none"
            onClick={toggleMenu}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
          
          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <li key={item.id} className="relative group">
                <a 
                  href={`#${item.id}`}
                  className="text-sm hover:text-c2 transition-colors cursor-pointer"
                >
                  {item.title}
                </a>

                {item.subMenu && (
                  <ul className="absolute left-0 top-full mt-0 bg-c6 text-c3 shadow-lg rounded-lg py-2 z-50 group-hover:block hidden"
                      style={{ minWidth: '200px' }}>
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

        {/* Mobile Menu */}
        <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
          <ul className="pt-4 pb-3">
            {navItems.map((item) => (
              <li key={item.id} className="block py-2">
                <div className="flex items-center justify-between">
                  <a 
                    href={`#${item.id}`}
                    onClick={() => handleMobileNavClick(`#${item.id}`)}
                    className="text-sm hover:text-c2 transition-colors"
                  >
                    {item.title}
                  </a>

                  {item.subMenu && (
                    <button
                      onClick={() => toggleSubmenu(item.id)}
                      className="p-2 focus:outline-none"
                    >
                      <svg
                        className={`w-4 h-4 transform transition-transform ${
                          openSubmenuId === item.id ? 'rotate-180' : ''
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>
                  )}
                </div>
                
                {item.subMenu && openSubmenuId === item.id && (
                  <ul className="pl-4 mt-2">
                    {item.subMenu.map((subItem) => (
                      <li key={subItem.link} className="py-2">
                        <a
                          href={subItem.link}
                          onClick={() => handleMobileNavClick(subItem.link)}
                          className="block text-sm hover:text-c2 transition-colors"
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
