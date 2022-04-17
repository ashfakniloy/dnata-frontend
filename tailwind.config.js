module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        NunitoSans: ["Nunito Sans, sans-serif"],
      },
      colors: {
        "custom-blue": "#E9F6FC",
        "custom-blue2": "#0094D5",
        "custom-blue3": "#0C5598",
        "custom-gray": "#7A7A7a",
        "custom-gray2": "#2E3132",
      },
      container: {
        center: true,
        screens: {
          lg: "1400px",
          xl: "1400px",
          "2xl": "1400px",
        },
      },
    },
  },
  plugins: [],
};
