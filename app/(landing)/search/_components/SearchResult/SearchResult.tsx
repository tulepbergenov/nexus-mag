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
          href: "/article",
        },
        {
          title: "lorem ipsum",
          category: "art & literature",
          href: "/article",
        },
        {
          title: "lorem ipsum",
          category: "art & literature",
          href: "/article",
        },
        {
          title: "lorem ipsum",
          category: "art & literature",
          href: "/article",
        },
        {
          title: "lorem ipsum",
          category: "art & literature",
          href: "/article",
        },
        {
          title: "lorem ipsum",
          category: "art & literature",
          href: "/article",
        },
      ]}
      className={className}
    />
  );
};

export default SearchResult;
