"use client";

import { cn } from "@/shared/libs";
import { NexusLink } from "@/shared/ui-kit";
import Image from "next/image";
import { useRouter } from "next/navigation";

export const ContentCategory = ({
  title,
  color = "#050505",
  articles = [],
}: {
  title: string;
  color: string;
  articles: {
    title: string;
    href: string;
    cover: string;
  }[];
}) => {
  const router = useRouter();

  const handleToArticle = (href: string) => {
    router.push(href);
  };

  return (
    <div
      style={{
        color,
      }}
    >
      <header className="py-[24px] sm:py-[48px]">
        <h1
          className={cn(
            "text-center text-xl font-medium uppercase -tracking-[0.1em] sm:text-start sm:text-4xl",
            {
              ["dark:text-white"]: color === "#050505",
            },
          )}
        >
          {title}
        </h1>
      </header>
      <div className="grid gap-[24px] sm:grid-cols-3">
        {articles.map((article) => (
          <article
            className="group cursor-pointer"
            key={article.href}
            onClick={() => handleToArticle(article.href)}
            tabIndex={0}
          >
            <div className="relative aspect-1 h-auto w-full overflow-hidden sm:aspect-[auto] sm:h-[140px]">
              <Image
                alt={article.title}
                height={250}
                src={article.cover}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: "center",
                }}
                width={464}
              />
              <div className="absolute inset-0 bg-[#FF0004] opacity-0 transition-opacity duration-300 ease-in-out group-active:opacity-60 [@media(hover:hover)]:group-hover:opacity-60"></div>
            </div>
            <h2
              className={cn(
                "mt-[12px] line-clamp-3 text-3xl font-medium uppercase -tracking-[0.1em] transition-colors duration-300 ease-in-out group-active:text-[#FF0004] [@media(hover:hover)]:group-hover:text-[#FF0004]",
                {
                  ["dark:text-white"]: color === "#050505",
                },
              )}
            >
              <NexusLink href={article.href}>{article.title}</NexusLink>
            </h2>
          </article>
        ))}
      </div>
    </div>
  );
};
