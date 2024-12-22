"use client";

import { TransitonViewComponent } from "@/__src/components";
import { cn } from "@/__src/shared/libs/cn";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

const MENU_ITEMS: {
  label: ReactNode;
  href: string;
}[] = [
  {
    label: <span>About</span>,
    href: "/about",
  },
  {
    label: (
      <span>
        sociology & <br />
        social issues
      </span>
    ),
    href: "/sociology-social-issues",
  },
  {
    label: (
      <span>
        culture & <br />
        identity
      </span>
    ),
    href: "/culture-identity",
  },
  {
    label: <span>literature & art</span>,
    href: "/literature-art",
  },
  {
    label: (
      <span>
        psychology & human <br />
        behaviour
      </span>
    ),
    href: "/psychology-human-behaviour",
  },
];

export const HeaderBar = () => {
  const pathname = usePathname();

  return (
    <TransitonViewComponent>
      <header>
        <div className="container">
          <div className="flex flex-col xl:flex-row xl:items-center xl:justify-between py-[20px]">
            <div className="flex xl:block items-center justify-between">
              <Link
                href={"/"}
                className="inline-block font-semibold lowercase font-fm-test-manuka text-[100px] leading-[70%]"
                aria-current={pathname === "/" ? "page" : undefined}
              >
                nexus
              </Link>
              <Link
                href={"#instagram"}
                className="flex items-center translate-y-[6px] justify-center align-middle h-[60px] overflow-hidden xl:hidden"
              >
                <Image
                  src={"/instagramLogo.svg"}
                  width={60}
                  height={60}
                  alt="nexus instagram"
                  priority
                />
              </Link>
            </div>
            <nav>
              <ul className="flex xl:items-center gap-x-[70px] gap-y-[10px] xl:flex-row flex-col xl:mt-0 mt-[20px]">
                {MENU_ITEMS.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={cn(
                        "inline-block uppercase font-fm-test-untitled text-[14px] leading-[19px] font-normal [@media(hover:hover)]:hover:text-[#FF0004] active:text-[#FF0004] transition-[color,opacity] duration-200 ease-in-out [@media(hover:hover)]:opacity-80 active:opacity-80",
                        {
                          ["text-[#FF0004]"]: pathname === item.href,
                        }
                      )}
                      aria-current={pathname === item.href ? "page" : undefined}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            <Link
              href={"#instagram"}
              className="hidden items-center justify-center align-middle h-[60px] overflow-hidden xl:flex"
            >
              <Image
                src={"/instagramLogo.svg"}
                width={60}
                height={60}
                alt="nexus instagram"
                priority
              />
            </Link>
          </div>
        </div>
      </header>
    </TransitonViewComponent>
  );
};
