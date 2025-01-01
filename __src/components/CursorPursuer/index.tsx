"use client";

import { cn } from "@/shared/libs";
import gsap from "gsap";
import { useLayoutEffect, useRef, useState } from "react";

export const CursorPursuer = () => {
  const mouseRef = useRef({ x: 0, y: 0 });
  const circleRef = useRef<HTMLDivElement>(null);
  const delayedMouse = useRef({
    x: 0,
    y: 0,
  });
  const [isPointer, setIsPointer] = useState(false);

  const manageMouseMove = ({ clientX, clientY }: MouseEvent) => {
    mouseRef.current = { x: clientX, y: clientY };

    moveCircle(mouseRef.current.x, mouseRef.current.y);
  };

  const lerp = (x: number, y: number, a: number) => x * (1 - a) + y * a;

  const moveCircle = (x: number, y: number) => {
    gsap.set(circleRef.current, {
      x,
      y,
      xPercent: -50,
      yPercent: -50,
    });
  };

  const animate = () => {
    delayedMouse.current = {
      x: lerp(delayedMouse.current.x, mouseRef.current.x, 0.1),
      y: lerp(delayedMouse.current.y, mouseRef.current.y, 0.1),
    };

    moveCircle(delayedMouse.current.x, delayedMouse.current.y);

    window.requestAnimationFrame(animate);
  };

  useLayoutEffect(() => {
    animate();

    window.addEventListener("mousemove", manageMouseMove);

    return () => {
      window.removeEventListener("mousemove", manageMouseMove);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useLayoutEffect(() => {
    let elements = [];

    const onMouseEnter = () => {
      setIsPointer(true);
    };
    const onMouseLeave = () => {
      setIsPointer(false);
    };

    elements = [...document.querySelectorAll("button,a,input,label")];

    elements.forEach((element) => {
      element.addEventListener("mouseenter", onMouseEnter, false);
      element.addEventListener("mouseleave", onMouseLeave, false);
    });

    return () => {
      elements.forEach((element) => {
        element.removeEventListener("mouseenter", onMouseEnter, false);
        element.removeEventListener("mouseleave", onMouseLeave, false);
      });
    };
  }, []);

  return (
    <div className="pointer-events-none fixed left-0 top-0 z-[9999] h-svh w-full overflow-clip [@media(hover:none)]:hidden">
      <div className="absolute" ref={circleRef}>
        <div
          className={cn(
            "size-[50px] rounded-full border-[2px] border-[#FF0004] transition-transform duration-300 ease-in-out",
            {
              "scale-50": isPointer,
              "scale-100": !isPointer,
            },
          )}
        />
      </div>
    </div>
  );
};
