/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html", // Untuk file HTML utama proyek
    "./src/**/*.{js,jsx,ts,tsx}", // Mendukung semua file React dan TypeScript di folder src
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat'], // Font keluarga Montserrat
      },
    },
    screens: {
      sm: "300px", // @media (min-width: 300px)
      md: "768px", // @media (min-width: 768px)
      lg: "1024px", // @media (min-width: 1024px)
      xl: "1280px", // @media (min-width: 1280px)
      "2xl": "1536px", // @media (min-width: 1536px)
    },
  },
  plugins: [],
};
