"use client";

import { cn } from "@/shared/libs";
import { Categories } from "@/shared/types";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const ARTICLE_ITEMS: {
  title: string;
  category: string;
  href: string;
  cover: string;
}[] = [
  {
    title:
      "Radical futures: How Gen Z Is Fighting Inequality in a Broken World",
    category: "Sociology & social issues",
    href: `${Categories.SociologySocialIssues}/gen-z-fighting-inequality`,
    cover: "/articles/gen-z-fighting-inequality/1.jpg",
  },
  {
    title: "Global Stories Local Realities",
    category: "culture & identity",
    href: `${Categories.CultureIdentity}/global-stories-local-realities`,
    cover: "/articles/global-stories-local-realities/1.jpg",
  },
  {
    title: "The Books That Shaped a Decade: Stories That Stay with You",
    category: "art & Literature",
    href: `${Categories.ArtLiterature}/books-that-shaped-decade`,
    cover: "/articles/books-that-shaped-decade/1.jpg",
  },
  {
    title: "Dating in 2024: Navigating Modern Romance",
    category: "human behaviour",
    href: `${Categories.ArtLiterature}/dating-2024-modern-romance`,
    cover: "/articles/dating-2024-modern-romance/1.jpg",
  },
  {
    title: "Visual Art That Shaped Cinematography",
    category: "art & Literature",
    href: `${Categories.ArtLiterature}/visual-art-cinematography`,
    cover: "/articles/visual-art-cinematography/1.jpg",
  },
];

export const HeroSection = () => {
  const router = useRouter();

  const handleArticleClick = (href: string) => {
    router.push(href);
  };

  return (
    <section>
      <div className="container">
        <div className="pt-[24px] sm:pt-[48px]">
          <header className="sr-only">
            <h1>Nexus</h1>
          </header>
          <div className="relative">
            <Swiper
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              loop={true}
              modules={[Navigation, Autoplay]}
              navigation={{
                nextEl: `.hero-swiper-next-btn`,
                prevEl: `.hero-swiper-prev-btn`,
              }}
            >
              {ARTICLE_ITEMS.map((slide) => (
                <SwiperSlide key={slide.href}>
                  <div
                    className="group cursor-pointer"
                    onClick={() => handleArticleClick(slide.href)}
                  >
                    <div className="relative h-[360px] w-full overflow-hidden sm:h-[500px]">
                      <Image
                        alt={slide.title}
                        className="bg-[#D9D9D9]"
                        height={400}
                        priority
                        src={slide.cover}
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                          objectPosition: "center",
                        }}
                        width={764}
                      />
                      <div className="absolute inset-0 bg-[#FF0004] opacity-0 transition-opacity duration-300 ease-in-out group-active:opacity-60 [@media(hover:hover)]:group-hover:opacity-60"></div>
                    </div>
                    <div className="mt-[12px] flex flex-col items-start gap-[12px] sm:grid sm:grid-cols-8">
                      <h2 className="order-2 col-span-5 text-4xl font-medium uppercase leading-none -tracking-[0.1em] transition-colors duration-300 ease-in-out group-active:text-[#FF0004] sm:order-1 sm:line-clamp-3 dark:text-white/80 [@media(hover:hover)]:group-hover:text-[#FF0004]">
                        {slide.title}
                      </h2>
                      <div className="order-1 col-span-3 sm:order-2">
                        <Link
                          className="flex w-max items-center justify-center rounded-[32px] border border-[#050505] px-[12px] py-[6px] text-sm font-bold uppercase transition-colors duration-300 ease-in-out group-active:border-[#FF0004] group-active:text-[#FF0004] sm:ml-auto dark:text-white/80 [@media(hover:hover)]:group-hover:border-[#FF0004] [@media(hover:hover)]:group-hover:text-[#FF0004]"
                          href={slide.href}
                        >
                          {slide.category}
                        </Link>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            <button
              className={cn(
                "absolute -left-[50px] end-auto top-2/4 hidden size-[50px] -translate-y-2/4 items-center justify-center transition-opacity duration-300 disabled:opacity-50 sm:flex",
                "hero-swiper-prev-btn",
              )}
              type="button"
            >
              <IoIosArrowBack className="h-auto w-[32px]" />
            </button>
            <button
              className={cn(
                "absolute -right-[50px] top-2/4 hidden size-[50px] -translate-y-2/4 items-center justify-center transition-opacity duration-300 disabled:opacity-50 sm:flex",
                "hero-swiper-next-btn",
              )}
              type="button"
            >
              <IoIosArrowForward className="h-auto w-[32px]" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
