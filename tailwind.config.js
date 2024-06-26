/** @type {import('tailwindcss').Config} */
export default {
  content: ["./docs/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light"],
  },
};
