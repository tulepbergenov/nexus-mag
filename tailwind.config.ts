/* eslint-disable @typescript-eslint/no-require-imports */
import { type Config } from "tailwindcss";

export default {
  content: [
    "./__src/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "fm-test-untitled": [
          "var(--fm-test-untitled)",
          "var(--fm-inter-tight)",
          "sans-serif",
        ],
        "fm-test-manuka": [
          "var(--fm-test-manuka)",
          "var(--fm-sofia-sans-extra-condensed)",
          "sans-serif",
        ],
      },
    },
    container: {
      center: true,
      padding: "2rem",
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/container-queries"),
    require("tailwindcss-text-rendering"),
  ],
} satisfies Config;
