module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        // Open Doors official colors
        primary:  "#0D9BD8",   // أزرق Open Doors الرئيسي
        pink:     "#E42F80",   // وردي Open Doors الثانوي
        dark:     "#2D2D37",   // لون النص الداكن
        light:    "#F7F7F7",   // خلفية فاتحة
        white:    "#FFFFFF",
        // keep aliases for compatibility
        teal:     "#0D9BD8",
        navy:     "#1A1A2E",
        gold:     "#E42F80",
        muted:    "#555555",
      },
      fontFamily: {
        body:    ["Tajawal", "sans-serif"],
        heading: ["Tajawal", "sans-serif"],
      },
      boxShadow: {
        card: "0 4px 24px rgba(0,0,0,0.08)",
      },
    },
  },
  plugins: [],
};
