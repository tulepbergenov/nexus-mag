"use client";

import { useEffect, useState } from "react";

const COLORS = ["#000000", "#FF0004", "#0FBAC2", "#5715C1"];

export const HomeHeroSection = () => {
  const [color, setColor] = useState(COLORS[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setColor((prevColor) => {
        const currentIndex = COLORS.indexOf(prevColor);
        const nextIndex = (currentIndex + 1) % COLORS.length;
        return COLORS[nextIndex];
      });
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section>
      <div className="mx-auto px-[40px]">
        <div className="grid grid-cols-[80%_20%] gap-x-[36px]">
          <div
            style={{
              color,
            }}
          >
            <div className="flex justify-between items-start">
              <div className="w-[280px]">
                <p className="text-[20px] lowercase">
                  Our mission is to open a thoughtful, dynamic conversation
                  about the role of artificial intelligence in our lives—not
                  just as a tool of convenience but as a catalyst for
                  creativity, reflection, and inspiration.
                </p>
              </div>
              <div className="flex flex-col items-end">
                <p className="text-end uppercase text-[50px]">
                  psychology & human behaviour
                </p>
                <p className="text-[20px] lowercase mt-[40px] max-w-[260px] mr-[240px]">
                  At Nexus, we stand at the intersection of technology,
                  creativity, and humanity.
                </p>
              </div>
            </div>
            <p className="font-fm-test-manuka font-bold leading-[0.8] text-[calc(2px+60vw)]">
              nexus
            </p>
          </div>
          <div className="uppercase text-[43px] w-full break-all">
            intersection of humanity and ai
          </div>
        </div>
      </div>
    </section>
  );
};
