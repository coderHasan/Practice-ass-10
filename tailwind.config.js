/** @type {import('tailwindcss').Config} */

export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        bannerBg: 'url("./assets/bg-2.webp")',
      },
    },
  },
  plugins: [require("daisyui")],
};
