module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "pure-red": "#FF0000",
        "dark-green": "#0A1E00",
        "dope-yellow": "#FF8C00",
        "fancy-pink": "#FF68B5",
      },
      fontFamily: {
        rockwell: ["rockwell", "serif"],
        "wild-wolf": ["wild-wolf", "cursive"],
        satoshi: ["satoshi", "sans-serif"],
        akira: ["akira", "sans-serif"],
      },
    },
  },
  plugins: [],
};
