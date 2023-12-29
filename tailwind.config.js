/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'roboto': ['"Roboto"', "sans-serif"],
        "roboto-condensed": ['"Roboto Condensed"', "sans-serif"],
        "bricolage-grotesque": ['"Bricolage Grotesque"', "sans-serif"],
        'raleway': ['"Raleway"', "sans-serif"],
      },
    },
  },
  plugins: [],
};
