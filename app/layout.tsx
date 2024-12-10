import { appTitle } from "@/__src/shared/libs";
import { cn } from "@/__src/shared/libs/cn";
import "@/__src/shared/styles/index.css";
import { Viewport, type Metadata } from "next";
import { ReactNode } from "react";
import {
  interTightFont,
  sofiaSansExtraCondensedFont,
  testManukaFont,
  testUntitledFont,
} from "./fonts";

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
    <html
      lang="en"
      className={cn(
        testManukaFont.variable,
        testUntitledFont.variable,
        interTightFont.variable,
        sofiaSansExtraCondensedFont.variable
      )}
    >
      <body className="font-fm-test-untitled">
        <main> {children}</main>
      </body>
    </html>
  );
};

export default RootLayout;
