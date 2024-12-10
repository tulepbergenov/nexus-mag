import { HomeHeroSection, LatestSection } from "@/__src/components";
import { appTitle } from "@/__src/shared/libs";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: appTitle(),
};

const Home = () => {
  return (
    <>
      <HomeHeroSection />
      <LatestSection />
    </>
  );
};

export default Home;
