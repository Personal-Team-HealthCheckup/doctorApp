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
      "DM_Sans": ["DM Sans", 'sans-serif'],
      Montserrat: [ "Montserrat", "sans-serif"]
    },
    colors:{
      ...colors,
      transparent: 'transparent',
      primary: '#007E85',
      secondary:"#6EAB36",
      info: "#000000B2",
      "black-300":"#333333",
      "black-500":"#555555",
    },
    extend: {
      backgroundImage: {
        serviceBackImage: "linear-gradient(rgba(0, 0, 0, .1), rgba(0, 0, 0, .1)),url(/images/servicepagebanner.png)",
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
