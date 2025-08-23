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
    },
  },
  plugins: [],
};
