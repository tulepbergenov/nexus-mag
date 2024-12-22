"use client";

import { useEffect, useState } from "react";

const ARTICLES_CATEGORY_ITEMS: {
  title: string;
  color: string;
}[] = [
  {
    title: "sociology & social issues",
    color: "#000",
  },
  {
    title: "culture & identity",
    color: "#5715C1",
  },
  {
    title: "literature & art",
    color: "#FF0004",
  },
  {
    title: "psychology & human behaviour",
    color: "#0FBAC2",
  },
];

export const HeroSection = () => {
  const [isActiveArticleCategory, setIsActiveArticleCategory] = useState<{
    title: string;
    color: string;
  }>(ARTICLES_CATEGORY_ITEMS[0]);

  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      setIsActiveArticleCategory(ARTICLES_CATEGORY_ITEMS[currentIndex]);
      currentIndex = (currentIndex + 1) % ARTICLES_CATEGORY_ITEMS.length;
    }, 1200);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="mt-[10px]">
      <div className="container">
        <div className="grid grid-cols-8 gap-[40px] items-start">
          <div
            className="col-span-6 grid grid-cols-8 gap-x-[20px] pt-[20px]"
            style={{
              color: isActiveArticleCategory.color,
            }}
          >
            <div className="col-span-2">
              <p className="lowercase text-[14px]">
                Our mission is to open a thoughtful, dynamic conversation about
                the role of artificial intelligence in our lives—not just as a
                tool of convenience but as a catalyst for creativity,
                reflection, and inspiration.
              </p>
            </div>
            <div className="col-span-6">
              <div className="flex flex-col items-end">
                <p className="uppercase text-[30px] leading-none">
                  {isActiveArticleCategory.title}
                </p>
                <div className="max-w-[200px] mt-[40px] mr-[120px] translate-y-[50px]">
                  <p className="lowercase">
                    At Nexus, we stand at the intersection of technology,
                    creativity, and humanity.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-span-8 overflow-hidden h-[400px] -translate-x-[10px]">
              <p className="lowercase font-semibold font-fm-test-manuka leading-none text-[590px] -translate-y-[140px]">
                nexus
              </p>
            </div>
          </div>
          <div className="col-span-2">
            <p className="uppercase text-black text-[65px] break-all leading-[95px]">
              intersection
              <br />
              of
              <br />
              humanity and
              <br />
              ai
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
