import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1.5rem",
        md: "6rem",
      },
    },
    extend: {
      colors: {
        bg: "var(--bg)",
        heroLeft: "var(--hero-left)",
        text: "var(--text)",
        muted: "var(--muted)",
        brand: "var(--brand)",
        border: "var(--border)",
      },
      boxShadow: {
        soft: "var(--shadow)",
      },
    },
  },
  plugins: [],
};

export default config;

