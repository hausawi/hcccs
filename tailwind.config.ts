import type { Config } from "tailwindcss";

const config: Config :  {
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
      colors: {
        hmoSky: "#1E80C1",
        hmoLightSky: "#A5DEF2",
        hmoPurple: "#414C6B",
        hmoLightPurple: "#C0A9BC",
        hmoYellow: "#5BAEB7",
        hmoLightYellow: "#2ECBE9",
      },
    },
  },
  plugins: [],
};
export default config;
