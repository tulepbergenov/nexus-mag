"use client";

import { cn } from "@/shared/libs";
import { AnimatePresence } from "motion/react";
import * as motion from "motion/react-client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export const ThemeToggler = ({ className }: { className?: string }) => {
  const [isMounting, setIsMounting] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  useEffect(() => {
    setIsMounting(true);
  }, []);

  return (
    <AnimatePresence initial={false} mode="wait">
      {isMounting && (
        <motion.div
          animate={{
            opacity: 1,
          }}
          className={cn("items-center gap-x-[6px]", className)}
          exit={{
            opacity: 0,
          }}
          initial={{
            opacity: 0,
          }}
          transition={{
            bounce: false,
            ease: "easeInOut",
            duration: 0.3,
          }}
        >
          <button
            className={cn(
              "inline-block px-[4px] py-[2px] font-medium uppercase transition-colors duration-300 ease-in-out active:bg-[#FF0004] active:text-white [@media(hover:hover)]:hover:bg-[#FF0004] [@media(hover:hover)]:hover:text-white",
              {
                "bg-white text-[#050505]": resolvedTheme === "dark",
              },
            )}
            onClick={() => setTheme("dark")}
            type="button"
          >
            Dark
          </button>
          <button
            className={cn(
              "inline-block px-[4px] py-[2px] font-medium uppercase transition-colors duration-300 ease-in-out active:bg-[#FF0004] active:text-white [@media(hover:hover)]:hover:bg-[#FF0004] [@media(hover:hover)]:hover:text-white",
              {
                "bg-[#050505] text-white": resolvedTheme === "light",
              },
            )}
            onClick={() => setTheme("light")}
            type="button"
          >
            Light
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
