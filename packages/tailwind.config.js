/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
  content: ["./src/components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      translate: {
        t0: "0",
        t1: "2.4rem",
        t2: "4.7rem",
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
