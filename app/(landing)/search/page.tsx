import { Suspense } from "react";
import { SearchResult } from "./_components";

const SearchPage = () => {
  return (
    <section className="mt-[24px]">
      <div className="container">
        <div>
          <h1 className="text-center text-[32px] font-medium uppercase leading-none -tracking-[2px] md:text-[40px] md:-tracking-[4px]">
            search results
          </h1>
          <Suspense fallback={null}>
            <SearchResult className="mt-[24px]" />
          </Suspense>
        </div>
      </div>
    </section>
  );
};

export default SearchPage;
