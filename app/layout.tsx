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
        "h-full scroll-smooth"
      )}
    >
      <body className="font-test-untitled h-full antialiased rendering-speed bg-white text-black text-[16px] leading-[21px] font-normal">
        <div className="flex min-h-full flex-col overflow-clip">
          <main className="flex-auto">{children}</main>
        </div>
      </body>
    </html>
  );
};

export default RootLayout;
