
// tailwind.config.js
const { nextui } = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
    
  ],
  theme: {
    extend: {},
  },
  darkMode: "class",
  plugins: [require('daisyui'),
    nextui({
      themes: {
        dark: {
          colors: {
            background: "#1D0B47",
            primary: {
              DEFAULT: "#BEF264",
              foreground: "#000000",
            },
            focus: "#BEF264",
          },
        },
        light: {
          colors:{
            background: "#FCFCFC",
          },
        },
      },
    }),
  ],
};