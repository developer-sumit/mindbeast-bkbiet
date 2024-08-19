import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      // colors: {
      //   primary: {
      //     DEFAULT: "#d90429",
      //     100: "#ef233c",
      //   },
      //   secondary: {
      //     DEFAULT: "#2b2d42",
      //     100: "#8d99ae",
      //   },
      //   background: "#f1faee",
      // },
      colors: {
        primary: {
          DEFAULT: "#40916c",
          100: "#00afb9",
        },
        secondary: {
          DEFAULT: "#ef233c",
          100: "#fed9b7",
        },
        background: "#fffcf2",
      },
    },
  },
  plugins: [],
};
export default config;
