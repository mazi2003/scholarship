module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#0d1b2a",
          mid: "#112236",
          light: "#1a3252",
          dark: "#080f18",
        },
        gold: {
          DEFAULT: "#c9a84c",
          light: "#e6c76b",
          pale: "#f5e8c0",
        },
        primary: "#c9a84c",
        teal: "#c9a84c",
        dark: "#0d1b2a",
        card: "#112236",
        border: "#1e3a56",
      },
      fontFamily: {
        body: ["Tajawal", "sans-serif"],
        heading: ["Tajawal", "sans-serif"],
      },
      boxShadow: {
        card: "0 4px 24px rgba(0,0,0,0.35)",
        gold: "0 0 15px rgba(201,168,76,0.25)",
      },
    },
  },
  plugins: [],
};
