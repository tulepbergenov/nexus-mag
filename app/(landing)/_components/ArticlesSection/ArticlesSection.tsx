"use client";

import { Categories } from "@/shared/types";
import { NexusLink } from "@/shared/ui-kit";
import Image from "next/image";
import { useRouter } from "next/navigation";

const ARTICLE_ITEMS_1: {
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
    title: "The Psychology of Choice",
    category: "human behaviour",
    href: `${Categories.HumanBehaviour}/psychology-of-choice`,
    cover: "/articles/psychology-of-choice/1.jpg",
  },
  {
    title: "a review of poor artists",
    category: "art & Literature",
    href: `${Categories.ArtLiterature}/review-poor-artists`,
    cover: "/articles/review-poor-artists/1.jpg",
  },
];

const ARTICLE_ITEMS_2: {
  title: string;
  category: string;
  href: string;
  cover: string;
}[] = [
  {
    title: "How Pop Culture Shapes Who We Are",
    category: "culture & identity",
    href: `${Categories.CultureIdentity}/pop-culture-shapes-us`,
    cover: "/articles/pop-culture-shapes-us/1.jpg",
  },
  {
    title: "Nostalgia as Currency: Why the Past Dominates the Present",
    category: "Sociology & social issues",
    href: `${Categories.SociologySocialIssues}/nostalgia-as-currency`,
    cover: "/articles/nostalgia-as-currency/1.jpg",
  },
];

export const ArticlesSection = () => {
  const router = useRouter();

  const handleGoToArticle = (href: string) => {
    router.push(href);
  };

  return (
    <section className="pt-[24px] sm:mt-[48px]">
      <div className="container">
        <div>
          <div className="grid gap-x-[20px] gap-y-[24px] sm:grid-cols-3">
            {ARTICLE_ITEMS_1.map((article) => (
              <article
                className="group cursor-pointer"
                key={article.href}
                onClick={() => handleGoToArticle(article.href)}
                tabIndex={0}
              >
                <div className="relative aspect-1 h-auto overflow-hidden sm:aspect-[auto] sm:h-[200px]">
                  <Image
                    alt={article.title}
                    height={460}
                    src={article.cover}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      objectPosition: "center",
                    }}
                    width={565}
                  />
                  <div className="absolute inset-0 bg-[#FF0004] opacity-0 transition-opacity duration-300 ease-in-out group-active:opacity-60 [@media(hover:hover)]:group-hover:opacity-60"></div>
                </div>
                <div className="mt-[12px]">
                  <p className="flex w-max items-center justify-center rounded-[32px] border border-[#050505] px-[12px] py-[4px] text-sm font-bold uppercase transition-colors duration-300 ease-in-out group-active:border-[#FF0004] group-active:text-[#FF0004] [@media(hover:hover)]:group-hover:border-[#FF0004] [@media(hover:hover)]:group-hover:text-[#FF0004]">
                    {article.category}
                  </p>
                  <h2 className="mt-[12px] text-xl font-medium uppercase leading-none -tracking-[0.1em] transition-colors duration-300 ease-in-out group-active:text-[#FF0004] sm:order-1 sm:line-clamp-3 [@media(hover:hover)]:group-hover:text-[#FF0004]">
                    <NexusLink href={article.href}>{article.title}</NexusLink>
                  </h2>
                </div>
              </article>
            ))}
          </div>
          <div className="grid gap-x-[20px] gap-y-[24px] pt-[24px] sm:mt-[48px] sm:grid-cols-2">
            {ARTICLE_ITEMS_2.map((article) => (
              <article
                className="group cursor-pointer"
                key={article.href}
                onClick={() => handleGoToArticle(article.href)}
                tabIndex={0}
              >
                <div className="relative aspect-1 h-auto overflow-hidden sm:aspect-[auto] sm:h-[200px]">
                  <Image
                    alt={article.title}
                    height={460}
                    src={article.cover}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      objectPosition: "center",
                    }}
                    width={565}
                  />
                  <div className="absolute inset-0 bg-[#FF0004] opacity-0 transition-opacity duration-300 ease-in-out group-active:opacity-60 [@media(hover:hover)]:group-hover:opacity-60"></div>
                </div>
                <div className="mt-[12px]">
                  <p className="flex w-max items-center justify-center rounded-[32px] border border-[#050505] px-[12px] py-[4px] text-sm font-bold uppercase transition-colors duration-300 ease-in-out group-active:border-[#FF0004] group-active:text-[#FF0004] [@media(hover:hover)]:group-hover:border-[#FF0004] [@media(hover:hover)]:group-hover:text-[#FF0004]">
                    {article.category}
                  </p>
                  <h2 className="mt-[12px] text-xl font-medium uppercase leading-none -tracking-[0.1em] transition-colors duration-300 ease-in-out group-active:text-[#FF0004] sm:order-1 sm:line-clamp-3 [@media(hover:hover)]:group-hover:text-[#FF0004]">
                    <NexusLink href={article.href}>{article.title}</NexusLink>
                  </h2>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
