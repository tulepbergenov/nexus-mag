import { Providers } from "@/app/providers";
import { CursorPursuer, SkipLink } from "@/components";
import { FooterBar, HeaderBar } from "@/modules";
import { appTitle, cn } from "@/shared/libs";
import "@/shared/styles/index.css";
import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
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
  alternates: {
    canonical: process.env.NEXT_PUBLIC_CANONICAL_URL,
  },
};

export const viewport: Viewport = {
  colorScheme: "light",
  themeColor: "#050505",
};

const RootLayout = ({
  children,
}: Readonly<{
  children: ReactNode;
}>) => {
  return (
    <html
      className={cn(
        testManukaFont.variable,
        testUntitledFont.variable,
        interTightFont.variable,
        sofiaSansExtraCondensedFont.variable,
        "h-full !scroll-smooth [color-scheme:light] [&_*::selection]:bg-[#FF0004] [&_*::selection]:text-white",
      )}
      lang="en"
      suppressHydrationWarning
    >
      <body className="h-full bg-white font-test-untitled text-[16px] font-normal leading-[21px] text-[#050505] antialiased rendering-speed dark:bg-[#050505] dark:text-white [&::-webkit-scrollbar-thumb]:bg-[#FF0004] [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar]:w-[8px]">
        <Providers>
          <div className="flex min-h-full flex-col overflow-clip pb-[100px]">
            <SkipLink />
            <HeaderBar />
            <main className="flex-auto" id="main">
              {children}
            </main>
            <FooterBar />
          </div>
          <CursorPursuer />
        </Providers>
      </body>
    </html>
  );
};

export default RootLayout;
