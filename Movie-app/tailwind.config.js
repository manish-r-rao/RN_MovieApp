/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{tsx,ts,js,jsx}","./App.tsx", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {},
  },
  plugins: [],
}