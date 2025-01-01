"use client";

import { cn } from "@/shared/libs";
import { useLayoutEffect, useState } from "react";
import { FaArrowUpLong } from "react-icons/fa6";

export const BackToTopButton = () => {
  const [isScrolling, setIsScrolling] = useState(false);

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useLayoutEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsScrolling(true);
      } else {
        setIsScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <button
      aria-label="Back to top"
      className={cn(
        "fixed bottom-[100px] right-[100px] z-20 hidden size-[54px] items-center justify-center rounded-full bg-white shadow-md transition-[opacity,color,transform] duration-300 ease-in-out active:text-[#FF0004] lg:flex [@media(hover:hover)]:hover:text-[#FF0004]",
        {
          "translate-y-[24px] opacity-0": !isScrolling,
          "opacity-100": isScrolling,
        },
      )}
      onClick={handleScrollToTop}
      title="Back to top"
      type="button"
    >
      <FaArrowUpLong className="h-auto w-[20px]" />
    </button>
  );
};
