module.exports = {
  content: [
    "./public/*.{html,js,ts,jsx,tsx}",
    "./src/pages/_app.tsx",
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  darkMode: "class", //media for browser setting
};
