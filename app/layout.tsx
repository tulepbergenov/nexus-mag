import { CursorPursuer, FixedInstagramButton, SkipLink } from "@/components";
import { HeaderBar } from "@/modules";
import { appTitle, cn } from "@/shared/libs";
import "@/shared/styles/index.css";
import type { Metadata, Viewport } from "next";
import { ReactNode } from "react";
import { Providers } from "./__providers";
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
      lang="en"
      className={cn(
        testManukaFont.variable,
        testUntitledFont.variable,
        interTightFont.variable,
        sofiaSansExtraCondensedFont.variable,
        "h-full !scroll-smooth [--nexus-header-height:80px]",
      )}
      suppressHydrationWarning
    >
      <body className="h-full bg-white font-test-untitled text-[16px] font-normal leading-[21px] text-[#050505] antialiased rendering-speed">
        <Providers>
          <div className="flex min-h-full flex-col overflow-clip pb-[100px]">
            <SkipLink />
            <HeaderBar />
            <main
              className="flex-auto pt-[var(--nexus-header-height)] lg:pt-0"
              id="main"
            >
              {children}
            </main>
          </div>
          <CursorPursuer />
          <FixedInstagramButton />
        </Providers>
      </body>
    </html>
  );
};

export default RootLayout;
