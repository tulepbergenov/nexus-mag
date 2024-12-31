import { LatestArticleList } from "@/modules";
import { HeroSection } from "./_components";

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <section className="mt-[40px]">
        <div className="container">
          <div>
            <LatestArticleList />
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
