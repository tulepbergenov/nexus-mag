"use client";

import { cn } from "@/shared/libs";
import Link from "next/link";
import { ReactNode, useLayoutEffect, useRef, useState } from "react";
import { FaInstagram } from "react-icons/fa";

export const HeaderBar = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const headerRef = useRef<HTMLHeadElement>(null);

  const handleToggleMenu = () => {
    const body = document.body;

    setIsOpenMenu((prevIsOpenMenu) => {
      if (prevIsOpenMenu) {
        body.style.overflow = "auto";
      } else {
        body.style.overflow = "hidden";
      }

      return !prevIsOpenMenu;
    });
  };

  const handleCloseMenu = () => {
    const body = document.body;

    setIsOpenMenu(false);

    body.style.overflow = "auto";

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useLayoutEffect(() => {
    const updateHeaderHeight = () => {
      if (headerRef.current) {
        document.documentElement.style.setProperty(
          "--nexus-header-height",
          `${headerRef.current.offsetHeight}px`,
        );
      }
    };

    updateHeaderHeight();

    window.addEventListener("resize", updateHeaderHeight);
    return () => {
      window.removeEventListener("resize", updateHeaderHeight);
    };
  }, []);

  return (
    <>
      <header
        className="fixed left-0 top-0 z-[100] w-full border-b border-b-[#050505] bg-white lg:static lg:z-auto lg:border-none"
        ref={headerRef}
      >
        <div className="container">
          <div className="flex items-center justify-between py-[14px] lg:py-[30px]">
            <button
              aria-label={isOpenMenu ? "Close menu" : "Open menu"}
              className="group relative order-2 flex h-[40px] w-[40px] items-center justify-center lg:hidden"
              onClick={handleToggleMenu}
              title={isOpenMenu ? "Close menu" : "Open menu"}
              type="button"
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
                  "absolute left-[2px] top-[18px] flex h-[12px] w-[40px] flex-col justify-between transition-transform duration-300 ease-in-out",
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
              className="relative order-1 inline-block h-[40px] w-[94px] overflow-hidden font-test-manuka font-semibold lg:h-[70px] lg:w-[154px]"
              href="/"
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
                      className="inline-block uppercase transition-colors duration-300 ease-in-out active:text-[#FF0004] [@media(hover:hover)]:hover:text-[#FF0004]"
                      href={navItem.href}
                    >
                      {navItem.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            <Link
              className="order-3 hidden items-center justify-center transition-colors duration-300 ease-in-out active:text-[#FF0004] lg:flex [@media(hover:hover)]:hover:text-[#FF0004]"
              href={"https://www.instagram.com/nexus_magg"}
              target="_blank"
            >
              <FaInstagram className="h-auto w-[40px]" />
              <span className="sr-only">Nexus Magazine Instagram</span>
            </Link>
          </div>
        </div>
      </header>
      <div
        className={cn(
          "fixed left-0 top-0 z-[90] h-svh w-full bg-white transition-opacity duration-300 ease-in-out lg:hidden",
          {
            ["pointer-events-auto opacity-100"]: isOpenMenu,
            ["pointer-events-none opacity-0"]: !isOpenMenu,
          },
        )}
      >
        <div className="container">
          <ul className="ovreflow-y-auto flex flex-col gap-y-[30px] pt-[calc(var(--nexus-header-height)+20px)]">
            {NAV_ITEMS.map((navItem) => (
              <li key={navItem.href}>
                <Link
                  className="inline-block text-[30px] uppercase leading-none transition-colors duration-300 ease-in-out active:text-[#FF0004] [@media(hover:hover)]:hover:text-[#FF0004]"
                  href={navItem.href}
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
