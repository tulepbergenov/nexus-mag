import { appTitle } from "@/shared/libs";
import "@/shared/styles/index.css";
import type { Metadata, Viewport } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: appTitle(),
  description:
    "Contemporary online publication exploring the intersection of humanity and AI",
};

export const viewport: Viewport = {
  colorScheme: "light",
  themeColor: "#000000",
};

const RootLayout = ({
  children,
}: Readonly<{
  children: ReactNode;
}>) => {
  return (
    <html lang="en">
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
};

export default RootLayout;
