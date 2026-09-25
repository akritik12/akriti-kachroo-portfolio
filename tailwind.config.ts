import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        base: "#FBF6EC",
        navy: {
          DEFAULT: "#15140F",
          light: "#2B2820"
        },
        accent: {
          DEFAULT: "#C1502E",
          light: "#E3894E",
          dark: "#9C3F22",
          tint: "#F4DCC9"
        }
      },
      fontFamily: {
        heading: ["var(--font-space-grotesk)", "sans-serif"],
        body: ["var(--font-manrope)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"]
      },
      borderRadius: {
        card: "20px",
        "card-lg": "24px"
      },
      boxShadow: {
        soft: "0 10px 40px -10px rgba(21, 20, 15, 0.12)",
        "soft-lg": "0 20px 60px -15px rgba(21, 20, 15, 0.18)",
        glow: "0 0 40px -5px rgba(193, 80, 46, 0.35)"
      },
      backdropBlur: {
        xs: "2px"
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-16px)" }
        },
        "scroll-down": {
          "0%": { opacity: "1", transform: "translateY(0)" },
          "100%": { opacity: "0", transform: "translateY(12px)" }
        }
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "float-slow": "float 9s ease-in-out infinite",
        "scroll-down": "scroll-down 1.6s ease-in-out infinite"
      }
    }
  },
  plugins: []
};

export default config;
