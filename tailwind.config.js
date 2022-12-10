/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  mode: "jit",
  theme: {
    extend: {
      gridTemplateColumns: {
        "m-auto-fill": "repeat(auto-fit, minmax(200px, 1fr))",
      },

      screens: {
        mxl: { max: "1200px" },
        mlg: { max: "1023px" },
        mmd: { max: "767px" },
        msm: { max: "639px" },
      },
    },
  },
};
