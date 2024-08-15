/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Adjust this path based on your project structure
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1da1f2", // Example custom color
        secondary: "#14171a",
        accent: "#657786",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"], // Example custom font family
      },
    },
  },
  plugins: [],
};
