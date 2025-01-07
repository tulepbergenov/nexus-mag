import { Suspense } from "react";
import { SearchResult } from "./_components";

const SearchPage = () => {
  return (
    <section>
      <div className="container">
        <div>
          <header className="py-[24px] sm:py-[48px]">
            <h1 className="text-center text-3xl font-medium uppercase -tracking-[0.1em] sm:text-5xl">
              Search results
            </h1>
          </header>
          <Suspense
            fallback={
              <div className="grid gap-[24px] sm:grid-cols-3">
                {Array.from({ length: 6 }).map((_, index) => (
                  <div
                    className="aspect-1 w-full animate-pulse bg-[#D9D9D9] sm:h-[176px]"
                    key={index}
                  ></div>
                ))}
              </div>
            }
          >
            <SearchResult />
          </Suspense>
        </div>
      </div>
    </section>
  );
};

export default SearchPage;
