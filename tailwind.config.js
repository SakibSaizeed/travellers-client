/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["'Fraunces'", "serif"],
        sans: ["'Plus Jakarta Sans'", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      colors: {
        ink: "#14201C",
        sand: {
          DEFAULT: "#FBF7F0",
          100: "#F5EFE3",
          200: "#EDE3D0",
          300: "#E1D3B8",
        },
        pine: {
          50: "#EAF4F1",
          100: "#CFE6DF",
          200: "#9FCDC0",
          300: "#6FB3A0",
          400: "#3E9A81",
          500: "#0F6B5C",
          600: "#0C5A4D",
          700: "#0B4F45",
          800: "#083A33",
          900: "#052620",
        },
        coral: {
          50: "#FFF1E9",
          100: "#FEDCC5",
          200: "#FCB98B",
          300: "#F99257",
          400: "#F57F44",
          500: "#F2703C",
          600: "#D8552A",
          700: "#B14422",
          800: "#82331A",
        },
      },
      boxShadow: {
        soft: "0 20px 45px -15px rgba(11, 79, 69, 0.35)",
        card: "0 12px 30px -14px rgba(20, 32, 28, 0.22)",
        glow: "0 0 0 1px rgba(255,255,255,0.08), 0 20px 60px -20px rgba(0,0,0,0.55)",
      },
      animation: {
        "fade-up": "fadeUp 0.8s ease forwards",
        "fade-in": "fadeIn 0.35s ease forwards",
        float: "float 6s ease-in-out infinite",
        "float-slow": "float 9s ease-in-out infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: 0, transform: "translateY(28px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: 0, transform: "translateY(6px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-16px)" },
        },
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        travellers: {
          primary: "#0F6B5C",
          "primary-content": "#FBF7F0",
          secondary: "#F2703C",
          "secondary-content": "#FBF7F0",
          accent: "#F6B93B",
          "accent-content": "#14201C",
          neutral: "#14201C",
          "neutral-content": "#FBF7F0",
          "base-100": "#FFFFFF",
          "base-200": "#F5EFE3",
          "base-300": "#EDE3D0",
          "base-content": "#14201C",
          info: "#3ABFF8",
          success: "#16A34A",
          warning: "#F2703C",
          error: "#E11D48",
          "--rounded-box": "1.25rem",
          "--rounded-btn": "999px",
        },
      },
    ],
  },
};
