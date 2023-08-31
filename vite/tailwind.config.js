/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
  content: ["./src/*.{js,ts,jsx,tsx,mdx}", "./index.html"],
  theme: {
    extend: {
      translate: {
        t0: "0",
        t1: "2.4rem",
        t2: "4.6rem",
        t3: "7rem",
        t4: "9.3rem",
        t5: "11.6rem",
        t6: "13.9rem",
        t7: "16.2rem",
      },
    },
  },
  plugins: [],
};
