import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // Layout
      screens: {
        sm: "375px",
        lg: "1440px",
      },

      // Colors
      colors: {
        primary: {
          "marine-blue": "hsl(213, 96%, 18%)",
          "purplish-blue": "hsl(243, 100%, 62%)",
          "pastel-blue": "hsl(228, 100%, 84%)",
          "light-blue": "hsl(206, 94%, 87%)",
          "strawberry-red": "hsl(354, 84%, 57%)",
        },
        neutral: {
          "cool-gray": "hsl(231, 11%, 63%)",
          "light-gray": "hsl(229, 24%, 87%)",
          magnolia: "hsl(217, 100%, 97%)",
          alabaster: "hsl(231, 100%, 99%)",
          white: "hsl(0, 0%, 100%)",
        },
      },

      // Typography
      fontSize: {
        body: "16px",
      },
      fontFamily: {
        body: ["Ubuntu", "sans-serif"],
      },
      fontWeight: {
        body: "400", // Font weights should be strings, not an array of numbers
        medium: "500",
        bold: "700",
      },
    },
  },
  plugins: [],
};
export default config;
