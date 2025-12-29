import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: 'class',
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        heading: ['var(--font-unbounded)', 'system-ui', 'sans-serif'],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        dark: {
          50: "#fafafa",
          100: "#f4f4f5",
          200: "#e4e4e7",
          300: "#d4d4d8",
          400: "#9ca3af",
          500: "#6b7280",
          600: "#4b5563",
          700: "#1e2433",
          800: "#111827",
          900: "#0a0f1a",
          950: "#000000",
        },
        brand: {
          50: "#f0f9ff",
          100: "#e0f2fe",
          200: "#bae6fd",
          300: "#7dd3fc",
          400: "#38bdf8",
          500: "#0ea5e9",
          600: "#0284c7",
          700: "#0369a1",
          800: "#075985",
          900: "#0c4a6e",
        },
        accent: {
          cyan: "#22d3ee",
          sky: "#38bdf8",
          blue: "#3b82f6",
          light: "#7dd3fc",
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "hero-gradient": "linear-gradient(to bottom right, #000000, #0a0f1a, #000000)",
        "card-gradient": "linear-gradient(to bottom right, rgba(30,36,51,0.4), rgba(10,15,26,0.6))",
        "dark-gradient": "linear-gradient(to bottom, #000000, #0a0f1a, #111827, #0a0f1a, #000000)",
        "navy-glow": "radial-gradient(ellipse at center, rgba(30,36,51,0.5) 0%, transparent 70%)",
      },
      animation: {
        "gradient": "gradient 8s linear infinite",
        "float": "float 6s ease-in-out infinite",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "glow": "glow 2s ease-in-out infinite alternate",
        "spin-slow": "spin 20s linear infinite",
      },
      keyframes: {
        gradient: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        glow: {
          "0%": { boxShadow: "0 0 20px rgba(56, 189, 248, 0.3)" },
          "100%": { boxShadow: "0 0 40px rgba(56, 189, 248, 0.6)" },
        },
      },
      boxShadow: {
        "glow": "0 0 40px rgba(56, 189, 248, 0.3)",
        "glow-lg": "0 0 60px rgba(56, 189, 248, 0.4)",
        "glow-blue": "0 0 40px rgba(59, 130, 246, 0.3)",
      },
    },
  },
  plugins: [],
};
export default config;
