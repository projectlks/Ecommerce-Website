/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#EDF6F9",
        primary: "#83C5BE",
        accent: "#006D77",
        light_accent: "#FFDDD2",
        secondary_accent: "#E29578"
      },
      screens: {
        "custom-600": "600px"
      }
    }
  },
  plugins: []
};
