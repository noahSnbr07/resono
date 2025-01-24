import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#101010",
        stack: "#ffffff1a",
        darken: "rgba(0, 0, 0, 0.1)",
        brighten: "rgba(255, 255, 255, 0.5)"
      },
    },
  },
  plugins: [],
} satisfies Config;