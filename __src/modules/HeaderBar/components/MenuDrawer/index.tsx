"use client";

import { cn } from "@/shared/libs";
import { Categories } from "@/shared/types";
import { NexusLink } from "@/shared/ui-kit";
import { Dialog, DialogPanel } from "@headlessui/react";
import { AnimatePresence } from "motion/react";
import * as motion from "motion/react-client";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";
import { useCallback, useState } from "react";

const MENU_LINKS: {
  label: ReactNode;
  href: string;
}[] = [
  {
    label: "About",
    href: "/about",
  },
  {
    label: (
      <span>
        <span>art &</span>
        <br />
        <span>Literature </span>
      </span>
    ),
    href: Categories.ArtLiterature,
  },
  {
    label: (
      <span>
        <span>Sociology &</span>
        <br />
        <span>Social issues</span>
      </span>
    ),
    href: Categories.SociologySocialIssues,
  },
  {
    label: (
      <span>
        <span>Culture &</span>
        <br />
        <span>identity</span>
      </span>
    ),
    href: Categories.CultureIdentity,
  },
  {
    label: (
      <span>
        <span>Human</span>
        <br />
        <span>behaviour</span>
      </span>
    ),
    href: Categories.HumanBehaviour,
  },
];

export const MenuDrawer = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const pathname = usePathname();

  const handleIsCurrentPage = useCallback(
    (href: string) => {
      return pathname === href || pathname.startsWith(href);
    },
    [pathname],
  );

  const handleOpenDrawer = () => {
    setIsDrawerOpen(true);
  };

  const handleCloseDrawer = () => {
    setIsDrawerOpen(false);
  };

  return (
    <>
      <button
        className="group flex size-[30px] flex-col items-center justify-center gap-y-[4px]"
        onClick={handleOpenDrawer}
        type="button"
      >
        <span className="inline-block h-[4px] w-[30px] bg-[#050505] transition-colors duration-300 ease-in-out group-active:bg-[#FF0004] dark:bg-white [@media(hover:hover)]:group-hover:bg-[#FF0004]"></span>
        <span className="inline-block h-[4px] w-[30px] bg-[#050505] transition-colors duration-300 ease-in-out group-active:bg-[#FF0004] dark:bg-white [@media(hover:hover)]:group-hover:bg-[#FF0004]"></span>
        <span className="sr-only">Open menu</span>
      </button>
      <AnimatePresence initial={false} mode="wait">
        {isDrawerOpen && (
          <Dialog
            className="relative z-50"
            onClose={handleCloseDrawer}
            open={isDrawerOpen}
            static
          >
            <motion.div
              animate={{ opacity: 1 }}
              className="fixed inset-0 bg-black/80 backdrop-blur-[2px]"
              exit={{ opacity: 0 }}
              initial={{ opacity: 0 }}
              transition={{
                duration: 0.2,
                ease: "easeInOut",
              }}
            />
            <div className="fixed inset-0 w-screen">
              <DialogPanel
                animate={{
                  x: "0",
                  transition: {
                    bounce: false,
                    duration: 0.2,
                    ease: "easeInOut",
                  },
                }}
                as={motion.div}
                className="h-full w-full overflow-y-auto bg-[#ABABAB] px-[24px] py-[16px] text-[#050505] md:w-[400px]"
                exit={{
                  x: "-100%",
                  transition: {
                    bounce: false,
                    duration: 0.2,
                    ease: "easeInOut",
                  },
                }}
                initial={{
                  x: "-100%",
                }}
              >
                <nav className="pb-[48px]">
                  <div>
                    <button
                      className="relative inline-block size-[30px]"
                      onClick={handleCloseDrawer}
                      type="button"
                    >
                      <span className="absolute left-2/4 top-2/4 inline-block h-[4px] w-[26px] -translate-x-2/4 -translate-y-2/4 rotate-45 bg-[#050505] transition-colors duration-300 ease-in-out group-active:bg-[#FF0004] [@media(hover:hover)]:group-hover:bg-[#FF0004]"></span>
                      <span className="absolute left-2/4 top-2/4 inline-block h-[4px] w-[26px] -translate-x-2/4 -translate-y-2/4 -rotate-45 bg-[#050505] transition-colors duration-300 ease-in-out group-active:bg-[#FF0004] [@media(hover:hover)]:group-hover:bg-[#FF0004]"></span>
                      <span className="sr-only">Close Menu</span>
                    </button>
                  </div>
                  <ul className="mt-[24px] flex flex-col gap-y-[24px]">
                    {MENU_LINKS.map((menuLink) => (
                      <li className="flex" key={menuLink.href}>
                        <NexusLink
                          className={cn(
                            "inline-block text-[24px] font-medium uppercase leading-none -tracking-[2px] transition-colors duration-300 ease-in-out active:text-[#FF0004] [@media(hover:hover)]:hover:text-[#FF0004]",
                            {
                              "text-[#FF0004]": handleIsCurrentPage(
                                menuLink.href,
                              ),
                            },
                          )}
                          href={menuLink.href}
                          onClick={handleCloseDrawer}
                        >
                          {menuLink.label}
                        </NexusLink>
                      </li>
                    ))}
                  </ul>
                </nav>
              </DialogPanel>
            </div>
          </Dialog>
        )}
      </AnimatePresence>
    </>
  );
};
