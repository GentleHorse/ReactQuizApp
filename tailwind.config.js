/** @type {import('tailwindcss').Config} */

const withMT = require("@material-tailwind/react/utils/withMT");

export default withMT({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'roboto': ['"Roboto"', "sans-serif"],
        "roboto-condensed": ['"Roboto Condensed"', "sans-serif"],
        "bricolage-grotesque": ['"Bricolage Grotesque"', "sans-serif"],
        'raleway': ['"Raleway"', "sans-serif"],
      },
      backgroundImage: {
        'abstract': "url('./assets/background-abstract.png')",
        'painting': "url('./assets/background-painting.jpg')",
        'subtle': "url('./assets/background-subtle.jpg')",
        'purple': "url('./assets/background-purple-balloons.jpg')",
      },
      dropShadow: {
        'bottom-black': '0 0 4px rgba(0, 0, 0, 0.6)',
      },
      boxShadow: {
        'yellow': '0 0 4px 2px rgba(255, 200, 60, 0.8)',
        'dark-blue': '1px 1px 8px 4px rgba(12, 5, 32, 0.6)',
        'black': '1px 1px 8px 1px rgba(0, 0, 0, 0.6)',
      }
    },
  },
  plugins: [],
});
