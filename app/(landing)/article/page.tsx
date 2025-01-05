import { ArticlesList } from "@/components";
import Image from "next/image";
import Balancer from "react-wrap-balancer";

const ArticlePage = () => {
  return (
    <section className="mt-[24px]">
      <div className="container">
        <div>
          <header className="flex flex-col items-center text-center">
            <h1 className="text-center text-[24px] font-medium uppercase leading-none -tracking-[4px] md:text-[32px] md:-tracking-[3px]">
              <Balancer>
                Radical futures: How Gen Z Is Fighting Inequality in a Broken
                World
              </Balancer>
            </h1>
            <p className="mt-[12px] flex items-center justify-center rounded-[32px] border border-[#050505] px-[24px] py-[6px] text-[18px] font-bold uppercase leading-none">
              Sociology & social issues
            </p>
          </header>
          <div>
            <Image
              alt="Radical futures: How Gen Z Is Fighting Inequality in a Broken World"
              className="h-auto w-full"
              height={1095}
              priority
              src={"/article-cover.jpg"}
              width={1540}
            />
            <div className="mt-[24px] flex flex-col gap-y-[24px] font-test-untitled text-[16px] font-normal leading-[21px]">
              <p className="italic">
                We live in a world that feels like it’s holding its breath—where
                wealth and opportunity teeter on a razor’s edge, and the gap
                between the haves and have-nots widens into a chasm. Social
                inequality isn’t just a buzzword; it’s the underpinning of every
                fractured system, every protest, every movement demanding more.
                And yet, how do we confront something so embedded in our
                collective reality?
              </p>
              <h2 className="text-[20px] font-bold uppercase leading-none">
                The Unseen Divides
              </h2>
              <p>
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
              <h2 className="text-[20px] font-bold uppercase leading-none">
                The Activist Wave
              </h2>
              <div className="flex items-center justify-center">
                <Image
                  alt="The Activist Wave"
                  className="h-auto w-full max-w-[400px]"
                  height={790}
                  priority
                  src={"/article-greta.jpg"}
                  width={715}
                />
              </div>
              <p>
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
              <h2 className="text-[20px] font-bold uppercase leading-none">
                Technology: Savior or Villain?
              </h2>
              <p>
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
              <h2 className="text-[20px] font-bold uppercase leading-none">
                Where Do We Go From Here?
              </h2>
              <p>
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
                then what are you doing
              </p>
              <h2 className="text-[20px] font-bold uppercase leading-none">
                further reading
              </h2>
              <p>
                <span>
                  &laquo;The Digital Divide and Its Impact on&nbsp;Marginalized
                  Communities&raquo; (Journal of&nbsp;Social Justice Studies)
                </span>
                <br />
                <span>
                  &laquo;Intergenerational Inequality: Breaking the Wealth
                  Cycle&raquo; (World Inequality Lab Report)
                </span>
                <br />
                <span>
                  &laquo;How Social Media Activism is&nbsp;Redefining Political
                  Movements&raquo; (Digital Culture Quarterly)
                </span>
              </p>
            </div>
          </div>
          <ArticlesList
            articles={[
              {
                title: "lorem ipsum",
                category: "art & literature",
                href: "/article",
              },
              {
                title: "lorem ipsum",
                category: "art & literature",
                href: "/article-2",
              },
              {
                title: "lorem ipsum",
                category: "art & literature",
                href: "/article-3",
              },
              {
                title: "lorem ipsum",
                category: "art & literature",
                href: "/article-4",
              },
              {
                title: "lorem ipsum",
                category: "art & literature",
                href: "/article-5",
              },
              {
                title: "lorem ipsum",
                category: "art & literature",
                href: "/article-6",
              },
            ]}
            className="mt-[48px]"
            showReadNext
          />
        </div>
      </div>
    </section>
  );
};

export default ArticlePage;
