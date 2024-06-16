import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    fontSize: {
      heading: [
        "64px",
        {
          lineHeight: "1.3em",
          fontWeight: "400",
        },
      ],
      "heading-bold": [
        "64px",
        {
          lineHeight: "1.3em",
          fontWeight: "700",
        },
      ],
      heading1: [
        "38px",
        {
          lineHeight: "1.3em",
          fontWeight: "400",
        },
      ],
      "heading1-bold": [
        "38px",
        {
          lineHeight: "1.3em",
          fontWeight: "700",
        },
      ],
      heading2: [
        "28px",
        {
          lineHeight: "1.3em",
          fontWeight: "400",
        },
      ],
      "heading2-bold": [
        "28px",
        {
          lineHeight: "1.3em",
          fontWeight: "700",
        },
      ],
      heading3: [
        "21px",
        {
          lineHeight: "1.3em",
          fontWeight: "400",
        },
      ],
      "heading3-bold": [
        "21px",
        {
          lineHeight: "1.3em",
          fontWeight: "700",
        },
      ],

      paragraph: [
        "16px",
        {
          lineHeight: "1.5em",
          fontWeight: "350px",
        },
      ],
    },
    extend: {
      colors: {
        light: "#FFFFFF",
        dark1: "#000000",
        dark2: "#3E4B4D",
      },
    },
  },
  plugins: [],
};
export default config;
