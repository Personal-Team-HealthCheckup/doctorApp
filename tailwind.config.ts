import { Montserrat } from "next/font/google";
import type { Config } from "tailwindcss";
const colors = require('tailwindcss/colors')
const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
    },
    fontFamily: {
      tara: ["Lexend Tera", 'sans-serif'],
      lato: ["Lato", 'serif'],
      Montserrat: [ "Montserrat", "sans-serif"]
    },
    colors:{
      ...colors,
      transparent: 'transparent',
      primary: '#007E85',
      secondary:"#6EAB36",
      info: "#000000B2",
      "black-300":"#333333",
    },
    extend: {
      backgroundImage: {
        'banner-pattern': "url(/images/backGroundBanner.svg)",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
          
      },
    },
  },
  plugins: [],
};
export default config;
