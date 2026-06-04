import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#2F80ED",
        secondary: "#15C8BD",
        ess: "#15C8BD",
        violet: "#7657E8",
        orange: "#FF7A00",
        soft: "#FFF8F5",
        cream: "#FFFCFA",
        ink: "#070B3F"
      },
      fontFamily: {
        sans: ["Inter", "Arial", "sans-serif"],
        display: ["Poppins", "Inter", "Arial", "sans-serif"]
      },
      boxShadow: {
        soft: "0 18px 45px rgba(7, 11, 63, 0.12)",
        raised: "0 18px 0 rgba(47, 128, 237, 0.10), 0 24px 45px rgba(7, 11, 63, 0.14)",
        card: "0 12px 30px rgba(7, 11, 63, 0.10), 0 2px 0 rgba(255, 255, 255, 0.75) inset"
      }
    }
  },
  plugins: []
};

export default config;
