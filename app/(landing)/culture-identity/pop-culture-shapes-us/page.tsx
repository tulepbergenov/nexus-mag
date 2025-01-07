import { LatestArticleList } from "@/modules";
import { appTitle } from "@/shared/libs";
import { Categories } from "@/shared/types";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: appTitle("How Pop Culture Shapes Who We Are"),
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_CANONICAL_URL}${Categories.CultureIdentity}/pop-culture-shapes-us`,
  },
};

const Page = () => {
  return (
    <section>
      <div className="container">
        <div>
          <header className="flex flex-col items-center justify-center py-[24px] text-center text-[#5715C1] sm:py-[48px]">
            <h1 className="text-4xl font-medium uppercase -tracking-[0.1em]">
              How Pop Culture Shapes Who We Are
            </h1>
            <Link
              className="mt-[12px] flex w-max items-center justify-center rounded-[32px] border border-[#5715C1] px-[24px] py-[6px] text-sm font-bold uppercase"
              href={Categories.CultureIdentity}
            >
              culture & identity
            </Link>
            <Image
              alt="The Books That Shaped a Decade: Stories That Stay with You"
              className="mt-[12px] h-auto w-full min-w-[calc(100%+48px)] sm:min-w-full"
              height={738}
              priority
              src="/articles/pop-culture-shapes-us/1.jpg"
              width={738}
            />
          </header>
          <div className="flex flex-col gap-y-[24px] md:gap-y-[48px]">
            <div className="flex flex-wrap items-start justify-between gap-[12px]">
              <p className="order-2 max-w-[500px] italic sm:order-1">
                Pop culture isn’t just about what’s trending—it’s about how we
                connect, express ourselves, and navigate the world. For young
                people, pop culture can feel like a mirror, reflecting the
                things we care about while influencing how we see ourselves.
                Whether it’s the music we blast, the TikTok trends we mimic, or
                the movies we rewatch, pop culture is a constant force shaping
                identity in ways that feel deeply personal.
              </p>
              <p className="order-1 font-bold uppercase sm:order-2">
                10 january 2025
              </p>
            </div>
            <div className="flex w-full flex-col gap-y-[12px]">
              <h2 className="col-span-full text-2xl font-bold uppercase">
                Finding Ourselves in Fandoms
              </h2>
              <p className="w-full">
                Remember when everyone was obsessed with Euphoria? Beyond the
                glitter tears and chaotic drama, the show became a way for
                people to talk about identity, mental health, and relationships.
                That’s the power of pop culture—it gives us a shared language
                for things that are hard to put into words.
              </p>
              <p>
                For many, fandoms are a lifeline. Think about the overwhelming
                energy of K-pop stans or the endless discussions around the
                Marvel Cinematic Universe. These spaces aren’t just about
                entertainment—they’re communities where people find belonging.
                Your favorite song or movie can say as much about you as your
                hometown or the clothes you wear.
              </p>
            </div>
            <div className="flex w-full flex-col gap-y-[12px]">
              <h2 className="col-span-full text-2xl font-bold uppercase">
                The Pressure of Perfection
              </h2>
              <p className="w-full">
                But pop culture isn’t all glitter and connection. Social media,
                where most of it lives, often shows us curated versions of
                reality. When you scroll past influencers who seem to have it
                all—perfect style, glowing skin, and endless vacations—it’s hard
                not to compare.
                <br />
                Platforms like Instagram and TikTok make it&nbsp;easy
                to&nbsp;get caught up&nbsp;in&nbsp;trends, but chasing
                perfection can leave you feeling more disconnected than
                inspired. The reality&nbsp;is, most of&nbsp;those
                &laquo;perfect&raquo; moments are staged. Yet, for many, pop
                culture&rsquo;s influence can create pressure to&nbsp;perform,
                to&nbsp;fit&nbsp;in, or&nbsp;to&nbsp;look a&nbsp;certain way.
              </p>
            </div>
            <div className="flex w-full flex-col gap-y-[12px]">
              <h2 className="col-span-full text-2xl font-bold uppercase">
                When Pop Culture Sparks Change
              </h2>
              <p className="w-full">
                On the flip side, pop culture can be a force for good. Artists
                like Billie Eilish talk openly about mental health, making it
                easier for fans to have those conversations in their own lives.
                Shows like Sex Education normalize discussions about sexuality
                and relationships, breaking down stigma and making people feel
                seen. Even the resurgence of Y2K fashion says something about
                reclaiming nostalgia and blending it with modern
                self-expression.
              </p>
              <p>
                Movements like #BlackLivesMatter and #MeToo gained momentum
                through social media, proving that pop culture can also be
                political. A TikTok trend might seem small, but when it’s paired
                with a larger cause, it can amplify voices that need to be
                heard.
              </p>
            </div>
            <div className="flex w-full flex-col gap-y-[12px]">
              <h2 className="col-span-full text-2xl font-bold uppercase">
                Pop Culture Is What We Make It
              </h2>
              <p className="w-full">
                At the end of the day, pop culture is deeply personal. It can
                inspire creativity, foster connection, and even help us figure
                out who we are. But it’s also a double-edged sword, capable of
                feeding insecurity or conformity if we’re not careful.
              </p>
              <p>
                What makes it powerful is that it’s ours. We remix it,
                reinterpret it, and make it our own. So, whether you’re curating
                a playlist that feels like your soul or sharing a meme that says
                what words can’t, remember this: pop culture is a reflection of
                us. The question is, what do you want it to reflect?
              </p>
            </div>
          </div>
          <div className="mt-[48px] border-t border-t-[#050505] pt-[24px] sm:pt-[48px] dark:border-t-white">
            <LatestArticleList title="read next" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Page;
