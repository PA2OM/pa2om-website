module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {},
  },
};

// tailwind.config.js
module.exports = {
  theme: {
    extend: {},
  },
  plugins: [
    function({ addBase }) {
      addBase({
        'html': {
          backgroundImage: 'none', // or specify the background you want
        },
      });
    },
  ],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        c1: '#005678',
        c2: '#e69c1e',
        c3: '#ffffff',
        c4: '#a9ab7d',
        c5: '#6e705e',
        c6: '#38362f',
        c7: '#000000',
        c8: '#dcbda1',
        c9: '#5c392f',
        c10: '#705438',
        c11: '#8c6c50',
        c12: '#740000',
        c13: '#bc0000',
      },
      fontFamily: {
        'suse': ['Suse', 'sans-serif'],
      },
    },
  },
  plugins: [],
}