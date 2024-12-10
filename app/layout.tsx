import { appTitle } from "@/__src/shared/libs";
import "@/__src/shared/styles/index.css";
import { Viewport, type Metadata } from "next";
import localFont from "next/font/local";
import { ReactNode } from "react";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: appTitle(),
  description:
    "We live in a world that feels like it’s holding its breath—where wealth and opportunity teeter on a razor’s edge, and the gap between the haves and have-nots widens into a chasm",
};

export const viewport: Viewport = {
  colorScheme: "light",
  themeColor: "#000000",
};

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
