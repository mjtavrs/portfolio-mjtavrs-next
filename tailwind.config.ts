import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "beige": "#f2efe6",
        "light-beige": "#faf7f0",
        "black": "#252422",
        "lighter-gray": "#dcdcdc",
        "light-gray": "#403d39",
        "light-white": "#fffcf2",
        "orange": "#ffa500"
      },
      screens: {
        "sm": "350px",
      }
    },
  },
  plugins: [],
};
export default config;
