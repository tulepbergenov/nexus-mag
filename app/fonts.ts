import { Inter_Tight, Sofia_Sans_Extra_Condensed } from "next/font/google";
import localFont from "next/font/local";

export const testManukaFont = localFont({
  variable: "--fm-test-manuka",
  src: [
    {
      path: "./fonts/test-manuka-bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/test-manuka-light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "./fonts/test-manuka-medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/test-manuka-regular.woff2",
      weight: "400",
      style: "normal",
    },
  ],
});

export const testUntitledFont = localFont({
  variable: "--fm-test-untitled",
  src: [
    {
      path: "./fonts/test-untitled-sans-regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/test-untitled-sans-regular-italic.woff2",
      weight: "400",
      style: "italic",
    },
    {
      path: "./fonts/test-untitled-sans-bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/test-untitled-sans-bold-italic.woff2",
      weight: "700",
      style: "italic",
    },
    {
      path: "./fonts/test-untitled-sans-light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "./fonts/test-untitled-sans-light-italic.woff2",
      weight: "300",
      style: "italic",
    },
  ],
});

export const interTightFont = Inter_Tight({
  weight: ["300", "400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
  variable: "--fm-inter-tight",
});

export const sofiaSansExtraCondensedFont = Sofia_Sans_Extra_Condensed({
  weight: ["300", "400", "500", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
  variable: "--fm-sofia-sans-extra-condensed",
});
