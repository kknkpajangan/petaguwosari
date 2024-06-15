/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      colors: {
        default: "#CD713C",
        hover: "#A2562A",
        ring: "#D9956D",
        hover_acord: "#F3DACE",
        default_acord: "#D9956D",
        ring_acord: "#D9956D",
        bg_acord: "#F7E6DE",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
