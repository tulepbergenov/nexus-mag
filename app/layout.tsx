import { appTitle, cn } from "@/shared/libs";
import "@/shared/styles/index.css";
import type { Metadata, Viewport } from "next";
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
    <html
      lang="en"
      className={cn(
        testManukaFont.variable,
        testUntitledFont.variable,
        interTightFont.variable,
        sofiaSansExtraCondensedFont.variable,
        "h-full scroll-smooth",
      )}
    >
      <body className="h-full bg-white font-test-untitled text-[16px] font-normal leading-[21px] text-black antialiased rendering-speed">
        <div className="flex min-h-full flex-col overflow-clip">
          <main className="flex-auto">{children}</main>
        </div>
      </body>
    </html>
  );
};

export default RootLayout;
