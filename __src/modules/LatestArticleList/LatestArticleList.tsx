"use client";

import { Categories } from "@/shared/types";
import { NexusLink } from "@/shared/ui-kit";
import Image from "next/image";
import { useRouter } from "next/navigation";

const ARTICLE_ITEMS: {
  title: string;
  category: string;
  href: string;
  cover: string;
}[] = [
  {
    title: "The Books That Shaped a Decade: Stories That Stay with You",
    category: "art & Literature",
    href: `${Categories.ArtLiterature}/books-that-shaped-decade`,
    cover: "/articles/books-that-shaped-decade/1.jpg",
  },
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
    title: "The Psychology of Choice",
    category: "human behaviour",
    href: `${Categories.HumanBehaviour}/psychology-of-choice`,
    cover: "/articles/psychology-of-choice/1.jpg",
  },
  {
    title: "Words That Shape Worlds: Literature in the Age of Reimagination",
    category: "art & Literature",
    href: `${Categories.ArtLiterature}/words-shape-worlds`,
    cover: "/articles/words-shape-worlds/1.jpg",
  },
  {
    title: "the hidden cost of hustle culture",
    category: "culture & Identity",
    href: `${Categories.CultureIdentity}/hidden-cost-hustle-culture`,
    cover: "/articles/hidden-cost-hustle-culture/1.jpg",
  },
];

export const LatestArticleList = ({
  title,
  articles = ARTICLE_ITEMS,
}: {
  title?: string;
  articles?: {
    title: string;
    category: string;
    href: string;
    cover: string;
  }[];
}) => {
  const router = useRouter();

  const handleToArticle = (href: string) => {
    router.push(href);
  };

  return (
    <div>
      {title && (
        <h2 className="mb-[24px] text-4xl font-medium uppercase -tracking-[0.1em] sm:mb-[48px]">
          {title}
        </h2>
      )}
      <div className="grid gap-[24px] md:grid-cols-3">
        {articles.map((item) => (
          <article
            className="cursor-pointer"
            key={item.href}
            onClick={() => handleToArticle(item.href)}
          >
            <div className="h-[240px] overflow-hidden bg-black md:h-[140px]">
              <Image
                alt={item.title}
                className="bg-[#D9D9D9]"
                height={300}
                src={item.cover}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
                width={300}
              />
            </div>
            <div className="mt-[12px] uppercase">
              <p className="line-clamp-1 pl-[20px] font-medium text-[#757373] dark:text-white/80">
                {item.category}
              </p>
              <h3 className="mt-[6px] line-clamp-2 font-bold">
                <NexusLink href={item.href}>{item.title}</NexusLink>
              </h3>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};
