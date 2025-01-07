"use client";

import { cn } from "@/shared/libs";
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
            className="cursor-pointer"
            key={article.href}
            onClick={() => handleToArticle(article.href)}
          >
            <div className="aspect-1 h-auto w-full overflow-hidden sm:aspect-[auto] sm:h-[140px]">
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
            </div>
            <h2
              className={cn(
                "mt-[12px] line-clamp-3 text-3xl font-medium uppercase -tracking-[0.1em]",
                {
                  ["dark:text-white"]: color === "#050505",
                },
              )}
            >
              {article.title}
            </h2>
          </article>
        ))}
      </div>
    </div>
  );
};
