import { appTitle } from "@/shared/libs";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: appTitle("about"),
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_CANONICAL_URL}/about`,
  },
};

const AboutPage = () => {
  return (
    <section>
      <div className="container">
        <div className="py-[24px] sm:py-[48px]">
          <header>
            <h1 className="text-4xl font-medium uppercase leading-none -tracking-[0.1em] sm:text-7xl">
              about nexus
            </h1>
          </header>
          <div className="mt-[6px] flex flex-col gap-y-[24px] text-2xl uppercase leading-none -tracking-[0.1em] sm:text-3xl">
            <p>
              Our magazine is&nbsp;a&nbsp;forward-thinking platform exploring
              the intersections of&nbsp;art, design, technology, and social
              change. We&nbsp;challenge conventions, amplify diverse voices, and
              delve into the uncharted spaces where human creativity meets
              evolving cultural landscapes.
            </p>
            <p>
              With a&nbsp;focus on&nbsp;the collaborative tension
              between&nbsp;AI and human ingenuity, we&nbsp;celebrate the raw,
              the refined, and the radical. From incisive cultural critiques
              to&nbsp;visually stunning narratives, our content invites readers
              to&nbsp;question, reflect, and reimagine the world around them.
            </p>
            <p>
              We&nbsp;believe in&nbsp;the power of&nbsp;storytelling
              to&nbsp;provoke dialogue, inspire innovation, and bridge divides.
              Our mission is&nbsp;to&nbsp;serve as&nbsp;a&nbsp;catalyst for
              cultural exploration, offering fresh perspectives that disrupt the
              ordinary and ignite the future.
            </p>
            <p>
              This is&nbsp;more than a&nbsp;magazine&mdash;it&rsquo;s
              a&nbsp;movement. Welcome to&nbsp;a&nbsp;space where ideas collide,
              creativity flourishes, and the future takes shape. Join&nbsp;us
              in&nbsp;shaping the narrative.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
