import React from 'react';

const IndustryIcons = {
  Manufacturing: () => (
    <svg 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    >
      <path d="M2 20V8l6-4v4l6-4v4l6-4v16H2z" />
      <path d="M5 12h4v4H5z" />
      <path d="M12 12h4v4h-4z" />
    </svg>
  ),

  Automotive: () => (
    <svg 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    >
      <path d="M5 17h14v-6H5v6zm1-4h2M16 13h2" />
      <path d="M7 14h10" />
      <circle cx="7" cy="17" r="2" />
      <circle cx="17" cy="17" r="2" />
      <path d="M5 11l2-6h10l2 6" />
    </svg>
  ),

  Aerospace: () => (
    <svg 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    >
      <path d="M12 3L3 15h18L12 3z" />
      <path d="M12 3v9" />
      <path d="M8 15l4 6 4-6" />
      <path d="M6 15h12" />
    </svg>
  ),

  Electronics: () => (
    <svg 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    >
      <rect x="4" y="6" width="16" height="12" rx="1" />
      <path d="M7 12h10M7 9h2M7 15h2M15 9h2M15 15h2" />
    </svg>
  ),

  Government: () => (
    <svg 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    >
      <path d="M12 3l9 4v2H3V7l9-4z" />
      <path d="M4 19h16" />
      <path d="M4 7v12" />
      <path d="M20 7v12" />
      <path d="M7 7v12M12 7v12M17 7v12" />
    </svg>
  ),

  Chemicals: () => (
    <svg 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    >
      <path d="M9 3v4M15 3v4" />
      <path d="M7 7h10" />
      <path d="M8 7v6l-3 6h14l-3-6V7" />
      <path d="M9 15h6" />
    </svg>
  ),

  Energy: () => (
    <svg 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    >
      <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
    </svg>
  ),

  FoodBeverage: () => (
    <svg 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    >
      <path d="M6 8h12v11a2 2 0 01-2 2H8a2 2 0 01-2-2V8z" />
      <path d="M8 8V5a2 2 0 012-2h4a2 2 0 012 2v3" />
      <path d="M10 11v6M14 11v6" />
    </svg>
  ),

  LifeSciences: () => (
    <svg 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    >
      <path d="M12 3v18M3 12h18" />
      <circle cx="12" cy="12" r="8" />
      <path d="M12 16a4 4 0 100-8 4 4 0 000 8z" />
    </svg>
  ),

  Mining: () => (
    <svg 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    >
      <path d="M14 6l-8.5 8.5a2.12 2.12 0 103 3L17 9" />
      <path d="M8.5 8.5l7-7a2.12 2.12 0 013 3l-7 7" />
      <path d="M16 12l-4 4" />
    </svg>
  )
};

export default IndustryIcons;