import { LatestArticleList } from "@/modules";
import { appTitle } from "@/shared/libs";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: appTitle("not found"),
};

const NotFoundPage = () => {
  return (
    <section>
      <div className="container">
        <div>
          <header className="border-b border-b-[#050505] py-[24px] sm:py-[48px] dark:border-b-white">
            <h1 className="text-[50px] font-medium uppercase leading-none -tracking-[0.1em] sm:text-7xl">
              Page not found
            </h1>
            <p className="mt-[4px] inline-block bg-[#050505] font-test-manuka text-8xl font-bold uppercase leading-none text-white sm:text-[200px] dark:bg-white dark:text-[#050505]">
              Error 404
            </p>
          </header>
          <div className="py-[24px] sm:py-[48px]">
            <LatestArticleList title="read on the website" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default NotFoundPage;
