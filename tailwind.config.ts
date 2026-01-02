import type { Config } from "tailwindcss";

export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['Outfit', 'sans-serif'],
        body: ['DM Sans', 'sans-serif'],
      },
      colors: {
        background: '#0A0A0B',
        surface: '#141416',
        'surface-light': '#1C1C1F',
        accent: '#D4A853',
        'accent-light': '#E8C880',
        success: '#10B981',
        muted: '#A1A1AA',
        'muted-dark': '#71717A',
      },
    },
  },
  plugins: [],
} satisfies Config;
