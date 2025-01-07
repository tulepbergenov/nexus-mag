import { LatestArticleList } from "@/modules";
import { appTitle } from "@/shared/libs";
import { Categories } from "@/shared/types";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: appTitle(
    "Radical futures: How Gen Z Is Fighting Inequality in a Broken World",
  ),
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_CANONICAL_URL}${Categories.SociologySocialIssues}/gen-z-fighting-inequality`,
  },
};

const Page = () => {
  return (
    <section>
      <div className="container">
        <div>
          <header className="flex flex-col items-center justify-center py-[24px] text-center text-[#050505] sm:py-[48px]">
            <h1 className="text-4xl font-medium uppercase -tracking-[0.1em]">
              Radical futures: How Gen Z Is Fighting Inequality in a Broken
              World
            </h1>
            <Link
              className="mt-[12px] flex w-max items-center justify-center rounded-[32px] border border-[#050505] px-[24px] py-[6px] text-sm font-bold uppercase"
              href={Categories.SociologySocialIssues}
            >
              Sociology & social issues
            </Link>
            <Image
              alt="The Books That Shaped a Decade: Stories That Stay with You"
              className="mt-[12px]"
              height={738}
              priority
              src="/articles/gen-z-fighting-inequality/1.jpg"
              style={{
                height: "auto",
                width: "100%",
              }}
              width={738}
            />
          </header>
          <div className="flex flex-col gap-y-[24px] md:gap-y-[48px]">
            <div className="flex flex-wrap items-start justify-between gap-[12px]">
              <p className="order-2 max-w-[500px] italic sm:order-1">
                We live in a world that feels like it’s holding its breath—where
                wealth and opportunity teeter on a razor’s edge, and the gap
                between the haves and have-nots widens into a chasm. Social
                inequality isn’t just a buzzword; it’s the underpinning of every
                fractured system, every protest, every movement demanding more.
                And yet, how do we confront something so embedded in our
                collective reality?
              </p>
              <p className="order-1 font-bold uppercase sm:order-2">
                18 December 2024
              </p>
            </div>
            <div className="flex w-full flex-col gap-y-[12px]">
              <h2 className="col-span-full text-2xl font-bold uppercase">
                The Unseen Divides
              </h2>
              <p className="w-full">
                Inequality doesn’t just exist in the obvious—the billionaires
                racing to colonize Mars while entire communities are left
                without clean water. It’s in the subtle structures: schools
                without funding, algorithms that discriminate, and healthcare
                that feels like a luxury. From underpaid essential workers to
                marginalized communities excluded from political
                decision-making, inequality infiltrates everything. It’s about
                time we stopped pretending it’s not personal.
              </p>
              <p>
                Even social mobility, the supposed antidote to inequality, has
                become a broken promise. A report by the World Inequality Lab
                highlights that wealth and opportunity are becoming increasingly
                concentrated, making it harder for young people to climb the
                economic ladder. Gen Z knows this—and they’re not staying silent
                about it.
              </p>
            </div>
            <div className="flex w-full flex-col gap-y-[12px]">
              <h2 className="col-span-full text-2xl font-bold uppercase">
                The Activist Wave
              </h2>
              <div className="flex items-center justify-center">
                <Image
                  alt={"The Activist Wave"}
                  className="h-auto w-full sm:w-[500px]"
                  height={715}
                  src={"/articles/gen-z-fighting-inequality/2.jpg"}
                  width={790}
                />
              </div>
              <p className="w-full">
                From grassroots collectives to&nbsp;Instagram storytellers,
                activism is&nbsp;evolving. It&rsquo;s messy, unapologetic, and
                deeply intersectional. Black Lives Matter, Indigenous resistance
                movements, and global climate strikes have all underscored one
                truth: fighting inequality is&nbsp;not optional. It&rsquo;s
                survival.
              </p>
              <p>
                Gen Z’s approach to activism is rooted in community and
                creativity. They’re harnessing the power of digital platforms to
                amplify marginalized voices, educate their peers, and organize
                protests on a global scale. Movements like #StopAsianHate and
                the resurgence of feminist activism in countries like Iran prove
                that Gen Z isn’t afraid to challenge entrenched systems. Their
                activism goes beyond performative gestures; it’s about rewriting
                the narrative and holding power to account.
              </p>
            </div>
            <div className="flex w-full flex-col gap-y-[12px]">
              <h2 className="col-span-full text-2xl font-bold uppercase">
                Technology: Savior or Villain?
              </h2>
              <p className="w-full">
                The digital age is both a lifeline and a landmine. TikTok trends
                expose injustices, but Big Tech profits from the same systems
                activists are fighting against. Algorithms reinforce biases, and
                data collection disproportionately impacts vulnerable
                populations. The digital divide—where access to technology is
                still a privilege, not a right—leaves marginalized voices
                behind, creating an uneven playing field in the fight for
                justice.
              </p>
              <p>
                However, Gen Z is using technology to subvert these barriers.
                They’ve built virtual safe spaces, designed educational content
                that goes viral, and crowdfunded mutual aid initiatives. But as
                they do so, they’re also questioning who controls these
                platforms and demanding accountability from tech giants who
                profit off exploitation.
              </p>
            </div>
            <div className="flex w-full flex-col gap-y-[12px]">
              <h2 className="col-span-full text-2xl font-bold uppercase">
                Where Do We Go From Here?
              </h2>
              <p className="w-full">
                Breaking the cycle means dismantling comfort zones.
                Redistribution of wealth, radical education reform, and
                equitable healthcare aren’t impossible—they’re necessary.
                Addressing climate injustice, dismantling systemic racism, and
                ensuring LGBTQ+ rights are central to achieving real equality.
              </p>
              <p>
                But this isn’t just about governments or corporations; it’s
                about what we’re willing to demand, disrupt, and dream for. It’s
                about using privilege as a platform and staying relentlessly
                curious about how we can create fairer systems. Gen Z’s fight
                for radical futures reminds us that change doesn’t come from
                comfort—it comes from questioning everything. So, what are you
                doing with your platform? If you’re not confronting inequality,
                then what are you doing at all?
              </p>
            </div>
            <div className="flex w-full flex-col gap-y-[12px]">
              <h2 className="col-span-full text-2xl font-bold uppercase">
                further reading
              </h2>
              <p className="flex w-full flex-col">
                <span>
                  &laquo;The Digital Divide and Its Impact on&nbsp;Marginalized
                  Communities&raquo; (Journal of&nbsp;Social Justice Studies)
                </span>
                <span>
                  &laquo;Intergenerational Inequality: Breaking the Wealth
                  Cycle&raquo; (World Inequality Lab Report)
                </span>
                <span>
                  &laquo;How Social Media Activism is&nbsp;Redefining Political
                  Movements&raquo; (Digital Culture Quarterly)
                </span>
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
