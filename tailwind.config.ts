import type { Config } from "tailwindcss";

import { Montserrat } from 'next/font/google'

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      sans: ['"Montserrat"', 'sans-serif']
    },
    extend: {
      colors: {
        "g-green": "#14261a"
      }
    },
  },

  plugins: [],
} satisfies Config;
