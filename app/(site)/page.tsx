import { appTitle } from "@/__src/shared/libs";
import { LatestArticles } from "@/__src/widgets";
import { Metadata } from "next";
import { HeroSection } from "./_components";

export const metadata: Metadata = {
  title: appTitle(),
};

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <LatestArticles />
    </>
  );
};

export default HomePage;
