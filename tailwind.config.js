module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          light: "#EFDFBB",
          DEFAULT: "#EFDFBB",
          dark: "#EFDFBB"
        }
      },
      backgroundImage: {
        'dots': "url(\"data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.2'%3E%3Ccircle cx='3' cy='3' r='1'/%3E%3Ccircle cx='13' cy='13' r='1'/%3E%3C/g%3E%3C/svg%3E\")",
        'faded-cream': "linear-gradient(to bottom, rgba(239, 223, 187, 0.5), #EFDFBB)",
      },
    },
  },
  plugins: [],
};
