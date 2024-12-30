"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

export const LatestArticleList = () => {
  const navigate = useRouter();

  const handleLinkClick = (href: string) => {
    navigate.push(href);
  };

  return (
    <div>
      <h2 className="font-test-manuka text-[80px] font-medium lowercase leading-none">
        Latest
      </h2>
      <div className="mt-[24px] grid gap-[20px] md:grid-cols-2 lg:grid-cols-3">
        {ARTICLE_LIST_DATA.map((article, i) => (
          <article
            key={i}
            className="group cursor-pointer"
            onClick={() => handleLinkClick(article.link.href)}
          >
            <div className="aspect-1 bg-[#C6C6C6]"></div>
            <div className="mt-[12px] grid items-start gap-y-[12px] text-[var(--article-list-item-body-color)] transition-colors duration-300 ease-in-out [--article-list-item-body-color:#050505] md:grid-cols-2 [@media(hover:hover)]:group-hover:[--article-list-item-body-color:#FF0004]">
              <h3 className="order-2 text-[18px] font-bold uppercase leading-[24px] group-active:[--article-list-item-body-color:#FF0004] md:order-1 md:mt-[6px]">
                {article.title}
              </h3>
              <p className="order-3 lowercase md:order-3">
                {article.description}
              </p>
              <Link
                href={article.link.href}
                className="order-1 hidden w-fit items-center justify-center rounded-[32px] border border-[var(--article-list-item-body-color)] px-[20px] py-[4px] text-center text-[18px] font-bold uppercase leading-[24px] md:order-2 md:ml-auto md:flex"
              >
                {article.link.label}
              </Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

const ARTICLE_LIST_DATA: {
  title: string;
  description: string;
  link: {
    href: string;
    label: string;
  };
}[] = [
  {
    title: "Fragile beauty",
    description:
      "Photographs from the Sir Elton John and David Furnish Collection",
    link: {
      href: "fragile-beauty",
      label: "Art",
    },
  },
  {
    title: "Radical futures",
    description: "How Gen Z Is Fighting Inequality in a Broken World",
    link: {
      href: "radical-futures",
      label: "Social issues",
    },
  },
  {
    title: "The Intersection of Poetry and AI",
    description:
      "AI in Poetry: Mimicry, Authenticity, and the Future of Creativity",
    link: { href: "literature", label: "Literature" },
  },
];
