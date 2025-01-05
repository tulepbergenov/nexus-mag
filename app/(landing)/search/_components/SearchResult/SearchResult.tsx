"use client";

import { ArticlesList } from "@/components";
import { useSearchParams } from "next/navigation";

const SearchResult = ({ className }: { className?: string }) => {
  const searchParams = useSearchParams();

  const search = searchParams.get("q");

  console.log("search", search);

  return (
    <ArticlesList
      articles={[
        {
          title: "lorem ipsum",
          category: "art & literature",
          href: "/article-1",
        },
        {
          title: "lorem ipsum",
          category: "art & literature",
          href: "/article-2",
        },
        {
          title: "lorem ipsum",
          category: "art & literature",
          href: "/article-3",
        },
        {
          title: "lorem ipsum",
          category: "art & literature",
          href: "/article-4",
        },
        {
          title: "lorem ipsum",
          category: "art & literature",
          href: "/article-5",
        },
        {
          title: "lorem ipsum",
          category: "art & literature",
          href: "/article-6",
        },
      ]}
      className={className}
    />
  );
};

export default SearchResult;
