"use client";

import { ThemeToggler } from "@/components";
import { NexusLink } from "@/shared/ui-kit";
import { usePathname } from "next/navigation";
import { AiFillInstagram } from "react-icons/ai";

export const FooterBar = () => {
  const pathname = usePathname();

  return (
    <footer className="mt-[100px]">
      <div className="container">
        <div className="flex flex-col items-center gap-y-[24px] border-t border-t-[#050505] py-[50px] sm:flex-row sm:justify-between dark:border-t-white">
          <div className="flex w-full items-center justify-between sm:order-2 sm:w-auto">
            <ThemeToggler className="flex md:hidden" />
            <NexusLink
              className="flex items-center justify-center transition-colors duration-300 ease-in-out active:text-[#FF0004] [@media(hover:hover)]:hover:text-[#FF0004]"
              href={"https://www.instagram.com/nexus_magg"}
              target="_blank"
            >
              <AiFillInstagram className="h-auto w-[54px]" />
              <span className="sr-only">Nexus Magazine Instagram</span>
            </NexusLink>
          </div>
          <ul className="flex w-full justify-between gap-y-[24px] sm:order-1 sm:w-auto sm:flex-col sm:justify-normal">
            {pathname !== "/contact" && (
              <li className="flex">
                <NexusLink
                  className="text-[18px] font-medium uppercase leading-none transition-colors duration-300 ease-in-out active:text-[#FF0004] sm:text-[24px] [@media(hover:hover)]:hover:text-[#FF0004]"
                  href={"/contact"}
                >
                  Contact
                </NexusLink>
              </li>
            )}
            {pathname !== "/about" && (
              <li className="flex">
                <NexusLink
                  className="text-[18px] font-medium uppercase leading-none transition-colors duration-300 ease-in-out active:text-[#FF0004] sm:text-[24px] [@media(hover:hover)]:hover:text-[#FF0004]"
                  href={"/about"}
                >
                  About
                </NexusLink>
              </li>
            )}
          </ul>
        </div>
      </div>
    </footer>
  );
};
