"use client";

import { cn } from "@/shared/libs";
import Image from "next/image";
import Link from "next/link";
import { ReactNode, useRef, useState } from "react";

export const HeaderBar = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const headerRef = useRef<HTMLHeadElement>(null);

  const handleToggleMenu = () => {
    const body = document.body;

    setIsOpenMenu((prevIsOpenMenu) => !prevIsOpenMenu);

    body.style.overflow = "hidden";
  };

  const handleCloseMenu = () => {
    const body = document.body;

    setIsOpenMenu(false);

    body.style.overflow = "auto";
  };

  return (
    <>
      <header
        ref={headerRef}
        className="fixed left-0 top-0 w-full border-b border-b-[#050505] bg-white lg:static lg:border-none"
      >
        <div className="container">
          <div className="grid grid-cols-3 items-center py-[14px] lg:flex lg:justify-between lg:py-[30px]">
            <button
              type="button"
              className="group relative flex h-[40px] w-[40px] items-center justify-center lg:hidden"
              aria-label="Open menu"
              title="Open menu"
              onClick={handleToggleMenu}
            >
              <div
                className={cn(
                  "absolute left-2/4 top-2/4 flex h-[12px] w-[40px] -translate-x-2/4 -translate-y-2/4 flex-col justify-between transition-transform duration-300 ease-in-out",
                  {
                    ["scale-0"]: isOpenMenu,
                    ["scale-100"]: !isOpenMenu,
                  },
                )}
              >
                <span className="inline-block h-[4px] w-full bg-[#050505] transition-colors duration-300 ease-in-out group-active:bg-[#FF0004]"></span>
                <span className="inline-block h-[4px] w-full bg-[#050505] transition-colors duration-300 ease-in-out group-active:bg-[#FF0004]"></span>
              </div>
              <div
                className={cn(
                  "absolute left-2/4 top-[18px] flex h-[12px] w-[40px] -translate-x-2/4 flex-col justify-between transition-transform duration-300 ease-in-out",
                  {
                    ["scale-100"]: isOpenMenu,
                    ["scale-0"]: !isOpenMenu,
                  },
                )}
              >
                <span className="absolute left-0 top-0 inline-block h-[4px] w-[34px] rotate-45 bg-[#050505] transition-colors duration-300 ease-in-out group-active:bg-[#FF0004]"></span>
                <span className="absolute left-0 top-0 inline-block h-[4px] w-[34px] -rotate-45 bg-[#050505] transition-colors duration-300 ease-in-out group-active:bg-[#FF0004]"></span>
              </div>
            </button>
            <Link
              href="/"
              className="relative order-1 mx-auto inline-block h-[40px] w-[94px] overflow-hidden font-test-manuka font-semibold lg:m-0 lg:h-[70px] lg:w-[154px]"
              onClick={handleCloseMenu}
            >
              <span className="absolute inset-0 -translate-y-[14px] text-[60px] leading-none lg:-translate-y-[24px] lg:text-[100px]">
                nexus
              </span>
            </Link>
            <nav className="order-2 hidden lg:block">
              <ul className="flex items-center gap-x-[20px] xl:gap-x-[40px]">
                {NAV_ITEMS.map((navItem) => (
                  <li key={navItem.href}>
                    <Link
                      href={navItem.href}
                      className="inline-block uppercase transition-colors duration-300 ease-in-out active:text-[#FF0004] [@media(hover:hover)]:hover:text-[#FF0004]"
                    >
                      {navItem.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            <div className="relative order-3 ml-auto flex items-center justify-center transition-opacity duration-300 ease-in-out active:opacity-60 lg:m-0 [@media(hover:hover)]:hover:opacity-60">
              <Image
                src="/instagram-logo.svg"
                alt="Instagram"
                width={50}
                height={50}
                priority
                className="size-[40px] lg:size-[50px]"
              />
              <Link
                href={"https://www.instagram.com/nexus_magg"}
                title="Nexus Magazine Instagram"
                aria-label="Nexus Magazine Instagram"
                className="absolute inset-0"
                target="_blank"
              ></Link>
            </div>
          </div>
        </div>
      </header>
      <div
        className={cn(
          "fixed left-0 top-[var(--nexus-header-height)] z-[1000] h-[calc(100svh-var(--nexus-header-height))] w-full bg-white transition-opacity duration-300 ease-in-out lg:hidden",
          {
            ["pointer-events-auto opacity-100"]: isOpenMenu,
            ["pointer-events-none opacity-0"]: !isOpenMenu,
          },
        )}
      >
        <div className="container">
          <ul className="ovreflow-y-auto flex flex-col gap-y-[30px] pt-[20px]">
            {NAV_ITEMS.map((navItem) => (
              <li key={navItem.href}>
                <Link
                  href={navItem.href}
                  className="inline-block text-[30px] uppercase leading-none transition-colors duration-300 ease-in-out active:text-[#FF0004] [@media(hover:hover)]:hover:text-[#FF0004]"
                >
                  {navItem.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

const NAV_ITEMS: { label: ReactNode; href: string }[] = [
  {
    label: <span>About</span>,
    href: "about",
  },
  {
    label: (
      <span>
        <span>Sociology & social</span>
        <br />
        <span>issues</span>
      </span>
    ),
    href: "sociology-social-issues",
  },
  {
    label: (
      <span>
        <span>Culture &</span>
        <br />
        <span>identity</span>
      </span>
    ),
    href: "culture-identity",
  },
  {
    label: <span>Literature & art</span>,
    href: "literature-art",
  },
  {
    label: (
      <span>
        <span>Psychology & human</span>
        <br />
        <span>behaviour</span>
      </span>
    ),
    href: "psychology-human-behaviour",
  },
];
