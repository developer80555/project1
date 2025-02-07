/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      animation: {
        blink: "blink 1.5s infinite",
        typingBounce: "typingBounce 1.5s infinite ease-in-out",
      },
      keyframes: {
        blink: {
          "0%": { opacity: "0.3" },
          "50%": { opacity: "1" },
          "100%": { opacity: "0.3" },
        },
        typingBounce: {
          "0%, 80%, 100%": { transform: "translateY(0)", opacity: "0.3" },
          "40%": { transform: "translateY(-5px)", opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};
