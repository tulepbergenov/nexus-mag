import Link from "next/link";

const LATEST_ARTICLES: {
  label: string;
  description: string;
  link: {
    label: string;
    url: string;
  };
}[] = [
  {
    label: "fragile beauty",
    description:
      "Photographs from the Sir Elton John and David Furnish Collection",
    link: {
      label: "Art",
      url: "#art",
    },
  },
  {
    label: "radical futures",
    description: "How Gen Z Is Fighting Inequality in a Broken World",
    link: {
      label: "social issues",
      url: "#social-issues",
    },
  },
  {
    label: "The Intersection of Poetry and AI",
    description:
      "AI in Poetry: Mimicry, Authenticity, and the Future of Creativity",
    link: {
      label: "literature",
      url: "#literature",
    },
  },
];

export const LatestArticles = () => {
  return (
    <section className="mt-[60px]">
      <div className="container">
        <div>
          <h2 className="text-[80px] leading-none font-medium lowercase font-fm-test-manuka">
            latest
          </h2>
          <div className="grid md:grid-cols-2 grid-cols-1 xl:grid-cols-3 gap-[20px] mt-[20px]">
            {LATEST_ARTICLES.map((article, i) => (
              <article
                key={i}
                className="text-[18px] leading-[24px] font-fm-test-untitled group"
              >
                <div className="bg-[#C6C6C6] rounded-[40px] aspect-1"></div>
                <div className="[@media(hover:hover)]:group-hover:text-[#FF0004] transition-colors ease-in-out duration-200">
                  <div className="grid grid-cols-[1fr_max-content] items-start justify-between mt-[16px] uppercase font-bold">
                    <h3 className="md:mt-[10px]">{article.label}</h3>
                    <Link
                      href={article.link.url}
                      className="flex items-center justify-center min-w-[80px] py-[4px] px-[16px] border border-[#050505] rounded-[33px] [@media(hover:hover)]:group-hover:border-[#FF0004]"
                    >
                      {article.link.label}
                    </Link>
                  </div>
                  <div className="mt-[16px] grid grid-cols-3">
                    <div className="col-span-2 lowercase">
                      {article.description}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
