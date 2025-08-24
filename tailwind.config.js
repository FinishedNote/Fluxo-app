/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: "#275AFF",
        tint: "#242424",
        tintLight: "#949494",
        background: "#020202",
        text: "#FFFFFF",
        border: "#272727",
        borderDark: "#151515",
        error: "#FF3D00",
        success: "#4CAF50",
      },
      fontFamily: {
        inter: {
          100: "Inter-Thin",
          200: "Inter-ExtraLight",
          300: "Inter-Light",
          400: "Inter-Regular",
          500: "Inter-Medium",
          600: "Inter-SemiBold",
          700: "Inter-Bold",
          800: "Inter-ExtraBold",
          900: "Inter-Black",
        },
        novasquare: ["NovaSquare-Regular", "sans-serif"],
      },
    },
  },
  plugins: [],
};
