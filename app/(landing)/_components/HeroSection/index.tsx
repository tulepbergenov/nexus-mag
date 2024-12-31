"use client";

import { useEffect, useState } from "react";

export const HeroSection = () => {
  const [activeSlide, setActiveSlide] = useState<{
    color: string;
    label: string;
  }>(PAGE_ITEMS[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prevSlide) => {
        const currentIndex = PAGE_ITEMS.indexOf(prevSlide);
        const nextIndex = (currentIndex + 1) % PAGE_ITEMS.length;
        return PAGE_ITEMS[nextIndex];
      });
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="transition-colors duration-300 ease-in-out">
      <div className="container">
        <div className="grid grid-cols-7 gap-x-[20px]">
          <div
            className="col-span-5 grid grid-cols-8 gap-y-[20px]"
            style={{
              color: activeSlide.color,
            }}
          >
            <div className="col-span-2">
              <p className="lowercase">
                Our mission is to open a thoughtful, dynamic conversation about
                the role of artificial intelligence in our lives—not just as a
                tool of convenience but as a catalyst for creativity,
                reflection, and inspiration.
              </p>
            </div>
            <div className="col-span-6 flex flex-col items-end">
              <div>
                <p className="text-end text-[34px] uppercase leading-none">
                  {activeSlide.label}
                </p>
              </div>
              <div className="w-[200px] -translate-x-[126px] translate-y-[90px]">
                <p className="lowercase">
                  At Nexus, we stand at the intersection of technology,
                  creativity, and humanity.
                </p>
              </div>
            </div>
            <div className="col-span-full">
              <div className="relative h-[370px] overflow-hidden">
                <p className="absolute -top-[158px] left-0 -translate-x-[20px] font-test-manuka text-[585px] font-semibold leading-none">
                  nexus
                </p>
              </div>
            </div>
          </div>
          <div className="col-span-2">
            <p className="-translate-y-[16px] break-all text-[74px] uppercase leading-[90px]">
              <span>interse</span>
              <br />
              <span>ction</span>
              <br />
              <span>of</span>
              <br />
              <span>human</span>
              <br />
              <span>ity and</span>
              <br />
              <span>ai</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

const PAGE_ITEMS: {
  color: string;
  label: string;
}[] = [
  {
    color: "#FF0004",
    label: "Literature & art",
  },
  {
    color: "#0FBAC2",
    label: "Psychology & human behaviour",
  },
  {
    color: "#5715C1",
    label: "Culture & identity",
  },
  {
    color: "#050505",
    label: "Sociology & social issues",
  },
];
