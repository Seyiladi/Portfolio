import type { Config } from "tailwindcss";

const config: Config = {
  corePlugins: {
    preflight: true,
  },
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        handwriting: ["Caveat", "cursive"],
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
      colors: {
        primary: {
          10: "#FCFAF6",
          100: "#008B8B",
          150: "#b37517",
          blue: "#0075FF",
          200: "#FBF8F3",
          250: "#F3E8D0",
          300: "#D9D9D9",
          350: "#EDE6DC",
          400: "#F9F2E8",
        },
        neutral: {
          70: "#161616",
        },
        red: {
          warning: "#F02222",
        },
      },
      fontSize: {
        xxs: "8px",
      },
      maxWidth: {
        content: "1164px",
      },
      borderRadius: {
        smd: "3px",
      },
    },
  },
  plugins: [],
};
export default config;
