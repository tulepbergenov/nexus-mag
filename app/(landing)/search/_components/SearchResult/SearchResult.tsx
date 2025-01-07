"use client";

import { LatestArticleList } from "@/modules";
import { Categories } from "@/shared/types";
import { useSearchParams } from "next/navigation";
import { useMemo } from "react";

const ALL_ARTICLE_ITEMS: {
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
  {
    title: "the vanishing art of connection",
    category: "human behaviour",
    href: `${Categories.HumanBehaviour}/vanishing-art-connection`,
    cover: "/articles/vanishing-art-connection/1.jpg",
  },
  {
    title: "a review of poor artists",
    category: "art & Literature",
    href: `${Categories.ArtLiterature}/review-poor-artists`,
    cover: "/articles/review-poor-artists/1.jpg",
  },
  {
    title: "Nostalgia as Currency: Why the Past Dominates the Present",
    category: "Sociology & social issues",
    href: `${Categories.SociologySocialIssues}/nostalgia-as-currency`,
    cover: "/articles/nostalgia-as-currency/1.jpg",
  },
  {
    title: "Visual Art That Shaped Cinematography",
    category: "art & Literature",
    href: `${Categories.ArtLiterature}/visual-art-cinematography`,
    cover: "/articles/visual-art-cinematography/1.jpg",
  },
  {
    title: "How Pop Culture Shapes Who We Are",
    category: "culture & identity",
    href: `${Categories.CultureIdentity}/pop-culture-shapes-us`,
    cover: "/articles/pop-culture-shapes-us/1.jpg",
  },
  {
    title: "Dating in 2024: Navigating Modern Romance",
    category: "human behaviour",
    href: `${Categories.ArtLiterature}/dating-2024-modern-romance`,
    cover: "/articles/dating-2024-modern-romance/1.jpg",
  },
];

const SearchResult = () => {
  const searchParams = useSearchParams();

  const search = searchParams.get("q")?.toLowerCase() || "";

  const filteredArticles = useMemo(
    () =>
      ALL_ARTICLE_ITEMS.filter(
        (article) =>
          article.title.toLowerCase().includes(search) ||
          article.category.toLowerCase().includes(search),
      ),
    [search],
  );

  if (!filteredArticles.length) {
    return (
      <p className="text-center text-2xl font-medium uppercase -tracking-[0.1em]">
        No articles found
      </p>
    );
  }

  return <LatestArticleList articles={filteredArticles} />;
};

export default SearchResult;
