import { LatestArticleList } from "@/modules";
import { appTitle } from "@/shared/libs";
import { Categories } from "@/shared/types";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: appTitle("the hidden cost of hustle culture"),
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_CANONICAL_URL}${Categories.CultureIdentity}/hidden-cost-hustle-culture`,
  },
};

const Page = () => {
  return (
    <section>
      <div className="container">
        <div>
          <header className="flex flex-col items-center justify-center py-[24px] text-center text-[#5715C1] sm:py-[48px]">
            <h1 className="text-4xl font-medium uppercase -tracking-[0.1em]">
              the hidden cost of hustle culture
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
              src="/articles/hidden-cost-hustle-culture/1.jpg"
              width={738}
            />
          </header>
          <div className="flex flex-col gap-y-[24px] md:gap-y-[48px]">
            <div className="flex flex-wrap items-start justify-between gap-[12px]">
              <p className="order-2 max-w-[500px] italic sm:order-1">
                In a society that glorifies productivity and constant
                self-improvement, hustle culture has become the norm. The mantra
                of “grind now, rest later” dominates social media feeds,
                workplace conversations, and personal ambitions. But beneath the
                surface lies a growing social issue—burnout, inequality, and the
                dehumanization of labor.
                <br />
                As we move deeper into the digital age, the implications of
                hustle culture extend far beyond individual exhaustion. It’s a
                systemic problem with roots in economic disparity, cultural
                expectations, and a tech-driven world that never lets us
                disconnect.
              </p>
              <p className="order-1 font-bold uppercase sm:order-2">
                7 December 2024
              </p>
            </div>
            <div className="flex w-full flex-col gap-y-[12px]">
              <h2 className="col-span-full text-2xl font-bold uppercase">
                Hustle Culture and Social Inequality
              </h2>
              <p className="w-full">
                Hustle culture is often framed as an equalizer: anyone can
                succeed if they just work hard enough. But this oversimplifies
                reality. Economic privilege, access to resources, and systemic
                barriers create uneven playing fields, where “grinding” is not a
                choice but a necessity for survival.
              </p>
              <p>
                A study from the Harvard Business Review found that individuals
                from low-income backgrounds often work longer hours in less
                stable jobs, with fewer opportunities for upward mobility.
                Hustle culture shifts the responsibility for systemic inequality
                onto individuals, perpetuating the myth that failure is a
                personal flaw rather than a structural issue.
              </p>
            </div>
            <div className="flex w-full flex-col gap-y-[12px]">
              <h2 className="col-span-full text-2xl font-bold uppercase">
                The Mental Health Toll
              </h2>
              <div className="flex items-center justify-center">
                <Image
                  alt={"The Mental Health Toll"}
                  className="h-auto w-full min-w-[calc(100%+48px)] sm:min-w-min sm:max-w-[500px]"
                  height={906}
                  src={"/articles/hidden-cost-hustle-culture/2.png"}
                  width={449}
                />
              </div>
              <p className="w-full">
                The psychological cost of hustle culture is staggering. The
                World Health Organization recently identified burnout as an
                occupational phenomenon, linked to chronic workplace stress.
                Constant pressure to perform affects sleep, relationships, and
                self-esteem, contributing to widespread anxiety and depression.
              </p>
              <p>
                Social media amplifies this problem. Platforms like LinkedIn and
                TikTok are filled with motivational content urging people to
                work harder, faster, and longer. While these posts may inspire,
                they also reinforce the idea that rest and balance are signs of
                weakness.
              </p>
            </div>
            <div className="flex w-full flex-col gap-y-[12px]">
              <h2 className="col-span-full text-2xl font-bold uppercase">
                Technology and the ‘Always-On’ Mindset
              </h2>
              <p className="w-full">
                Technology has blurred the boundaries between work and life.
                Notifications, emails, and “urgent” tasks keep us tethered to
                our jobs, even outside office hours. A report from the American
                Psychological Association highlights how this constant
                connectivity erodes mental health and prevents meaningful rest.
              </p>
              <p>
                For freelancers and gig workers—whose livelihoods often depend
                on digital platforms like Upwork or DoorDash—the pressure to
                hustle is magnified. With no guaranteed income or benefits, they
                must work tirelessly to stay afloat, reflecting a broader issue
                of labor exploitation in the modern economy.
              </p>
            </div>
            <div className="flex w-full flex-col gap-y-[12px]">
              <h2 className="col-span-full text-2xl font-bold uppercase">
                Breaking the Cycle
              </h2>
              <p className="w-full">
                Addressing the societal harm caused by hustle culture requires
                more than self-help strategies or individual changes. It demands
                systemic reform, including:
                <br />
                Fair Labor Practices: Policies that ensure livable wages,
                reasonable hours, and access to benefits.
                <br />
                Workplace Support: Mental health resources, flexible schedules,
                and environments that value well-being over constant output.
                <br />
                Cultural Shifts: Redefining success to include rest,
                relationships, and personal fulfillment, rather than endless
                productivity.
              </p>
            </div>
            <div className="flex w-full flex-col gap-y-[12px]">
              <h2 className="col-span-full text-2xl font-bold uppercase">
                The Future of Work
              </h2>
              <p>
                As younger generations enter the workforce, the resistance to
                hustle culture is growing. Movements like “quiet quitting” and
                the push for four-day workweeks suggest that people are
                rethinking the value of their time. However, dismantling the
                deeply ingrained ideals of hustle culture will take sustained
                effort—from individuals, employers, and society as a whole.
              </p>
              <p>
                Hustle culture isn’t just about how we work; it’s about how we
                live. By questioning its impact and challenging its norms, we
                can begin to build a world where work supports life, rather than
                consuming it.
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
