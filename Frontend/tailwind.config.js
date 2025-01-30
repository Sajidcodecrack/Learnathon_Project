/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#A1C14B",
        black: "#000000",
        background: "#FFFFFF",
        light_grey: "#E4E2DF",
        dark_grey: "#302E2E",
        action_red: "#D35B50",
        secondary_orange: "#E0912F",
        yellow: "#F3CE6E",
        primary_light: "#D0DE74",
        sub_text: "#7B7B7B"
      },
      fontFamily: {
        heading: ["Anton", "sans-serif"], // Popping font for headings
        secondary: ["Roboto", "sans-serif"], // Roboto for secondary text
      }
    }
  },
  plugins: [],
}
