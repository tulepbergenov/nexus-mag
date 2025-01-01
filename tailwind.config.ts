/* eslint-disable @typescript-eslint/no-require-imports */
import type { Config } from "tailwindcss";

export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./__src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "test-untitled": [
          "var(--fm-test-untitled)",
          "var(--fm-inter-tight)",
          "sans-serif",
        ],
        "test-manuka": [
          "var(--fm-test-manuka)",
          "var(--fm-sofia-sans-extra-condensed)",
          "sans-serif",
        ],
        "inter-tight": ["var(--fm-inter-tight)", "sans-serif"],
        "sofia-sans-extra-condensed": [
          "var(--fm-sofia-sans-extra-condensed)",
          "sans-serif",
        ],
      },
    },
    container: {
      center: true,
      padding: "24px",
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
