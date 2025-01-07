import { LatestArticleList } from "@/modules";
import { appTitle } from "@/shared/libs";
import { Categories } from "@/shared/types";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: appTitle("The Psychology of Choice"),
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_CANONICAL_URL}${Categories.HumanBehaviour}/dating-2024-modern-romance`,
  },
};

const Page = () => {
  return (
    <section>
      <div className="container">
        <div>
          <header className="flex flex-col items-center justify-center py-[24px] text-center text-[#0FBAC2] sm:py-[48px]">
            <h1 className="text-4xl font-medium uppercase -tracking-[0.1em]">
              The Psychology of Choice
            </h1>
            <Link
              className="mt-[12px] flex w-max items-center justify-center rounded-[32px] border border-[#0FBAC2] px-[24px] py-[6px] text-sm font-bold uppercase"
              href={Categories.HumanBehaviour}
            >
              human behaviour
            </Link>
            <Image
              alt="The Books That Shaped a Decade: Stories That Stay with You"
              className="mt-[12px] h-auto w-full min-w-[calc(100%+48px)] sm:min-w-full"
              height={858}
              priority
              src="/articles/dating-2024-modern-romance/1.jpg"
              style={{
                height: "auto",
                width: "100%",
              }}
              width={717}
            />
          </header>
          <div className="flex flex-col gap-y-[24px] md:gap-y-[48px]">
            <p className="max-w-[500px] italic">
              Dating has never been simple, but in 2024, it feels more complex
              than ever. From swiping right to sliding into DMs, the way we
              meet, connect, and build relationships has fundamentally changed.
              Technology has streamlined romance, but it’s also introduced new
              challenges—ghosting, breadcrumbing, and the endless scroll of
              potential matches. Beneath the surface, these behaviors reveal a
              lot about the human condition in the age of digital love.
            </p>
            <div className="flex w-full flex-col gap-y-[12px]">
              <h2 className="col-span-full text-2xl font-bold uppercase">
                The Rise of the Swipe
              </h2>
              <p className="w-full">
                Dating apps like Tinder, Bumble, and Hinge have transformed how
                people meet. With a swipe of a finger, you can connect with
                someone you’d never cross paths with in real life. But this
                convenience comes with a paradox: the abundance of options often
                leads to decision fatigue. Studies published in the Journal of
                Social and Personal Relationships show that too many choices can
                make people less satisfied with their eventual partner, always
                wondering if “someone better” is out there.
              </p>
              <p>
                This “paradox of choice” isn’t just about dating—it’s a symptom
                of a broader cultural shift where immediacy and abundance shape
                our expectations.
              </p>
            </div>
            <div className="flex w-full flex-col gap-y-[12px]">
              <h2 className="col-span-full text-2xl font-bold uppercase">
                Ghosting, Breadcrumbing, and the New Language of Dating
              </h2>
              <Image
                alt="Ghosting, Breadcrumbing, and the New Language of Dating"
                className="max-w-[500px]"
                height={258}
                src="/articles/dating-2024-modern-romance/2.jpg"
                style={{
                  height: "auto",
                  width: "100%",
                }}
                width={961}
              />
              <p className="w-full">
                Modern dating has its own vocabulary, and not all of it is
                romantic. Ghosting (suddenly cutting off communication),
                breadcrumbing (sending sporadic messages to keep someone
                interested but never committing), and benching (keeping someone
                as a backup option) have become common behaviors. These terms
                reflect a deeper anxiety about vulnerability and commitment in
                an era where connections are often superficial.
              </p>
              <p>
                Why does this happen? Experts point to the low stakes of online
                communication. When someone becomes just another profile, it’s
                easier to avoid difficult conversations. While this might shield
                us from awkward moments, it also limits genuine connection.
              </p>
            </div>
            <div className="flex w-full flex-col gap-y-[12px]">
              <h2 className="col-span-full text-2xl font-bold uppercase">
                Dating Apps and the Performance of Identity
              </h2>
              <p className="w-full">
                Dating apps force users to condense their identities into a few
                photos and a short bio. This curated self-presentation can
                create pressure to perform, making dating feel like a game
                rather than a meaningful pursuit. Apps prioritize appearances,
                swiping, and witty one-liners, leaving little room for nuance.
              </p>
              <p>
                However, the rise of apps like Hinge, which markets itself as
                “designed to be deleted,” shows a growing desire for
                authenticity. Younger daters, particularly Gen Z, are pushing
                back against surface-level interactions, seeking deeper
                conversations and meaningful connections.
              </p>
            </div>
            <div className="flex w-full flex-col gap-y-[12px]">
              <h2 className="col-span-full text-2xl font-bold uppercase">
                The Pandemic Effect on Modern Romance
              </h2>
              <p className="w-full">
                The COVID-19 pandemic fundamentally shifted dating behavior.
                Virtual dates, socially distanced meetups, and a renewed focus
                on emotional intimacy became the norm. For many, this period
                highlighted the importance of connection and forced people to
                prioritize what they truly want in a partner.
              </p>
              <p>
                Even as the world reopens, some of these shifts remain. Daters
                are increasingly seeking substance over style, valuing emotional
                compatibility over superficial attraction. The pandemic may have
                left a lasting imprint, fostering a move toward intentional
                relationships.
              </p>
            </div>
            <div className="flex w-full flex-col gap-y-[12px]">
              <h2 className="col-span-full text-2xl font-bold uppercase">
                The Future of Dating: Where Do We Go From Here?
              </h2>
              <p className="w-full">
                As technology evolves, so does the dating landscape. Artificial
                intelligence is beginning to play a role, with apps using
                algorithms to predict compatibility or even generating
                icebreakers. But the core of dating remains the same: humans
                seeking connection, understanding, and love.
              </p>
              <p>
                Navigating modern dating requires balancing the convenience of
                technology with the timeless need for authenticity. In a world
                of endless profiles and instant communication, the challenge is
                to stay grounded, honest, and open to the possibility of real
                connection.
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
