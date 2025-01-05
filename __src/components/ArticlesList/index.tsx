"use client";

import { cn } from "@/shared/libs";
import { NexusLink } from "@/shared/ui-kit";
import { useRouter } from "next/navigation";

export const ArticlesList = ({
  articles = [],
  className,
  showReadNext = false,
}: {
  articles: {
    title: string;
    category: string;
    href: string;
  }[];
  className?: string;
  showReadNext?: boolean;
}) => {
  const router = useRouter();

  if (!Array.isArray(articles) || !articles.length) return null;

  return (
    <div className={cn("flex flex-col gap-y-[24px]", className)}>
      {showReadNext && (
        <h2 className="text-[24px] font-medium uppercase leading-none -tracking-[2px] md:text-[32px] md:-tracking-[3px]">
          read next
        </h2>
      )}
      <div className="grid grid-cols-1 gap-y-[48px] sm:grid-cols-2 sm:gap-[24px] md:grid-cols-3">
        {articles.map((article) => (
          <article key={article.href} onClick={() => router.push(article.href)}>
            <div className="aspect-1 w-full bg-[#D9D9D9] sm:h-[140px]"></div>
            <div className="mt-[8px]">
              <p className="ml-[20px] font-medium uppercase text-[#757373]">
                {article.category}
              </p>
              <h2 className="mt-[4px] font-bold uppercase">
                <NexusLink href={article.href}>{article.title}</NexusLink>
              </h2>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};
