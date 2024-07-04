/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Adjust this path based on your project structure
    "./public/index.html", // Include any HTML files if applicable
  ],
  theme: {
    extend: {
      colors: {
        customGreen: '#28CB8B',
        silver:'#F5F7FA',
        tint5:"#E8F5E9",
        tint4:"#C8E6C9",
        D_Grey:"#4D4D4D",
        Grey:"#717171",
      },
    },
  },
  plugins: [],
};
