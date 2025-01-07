import { LatestArticleList } from "@/modules";
import { appTitle } from "@/shared/libs";
import { Categories } from "@/shared/types";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: appTitle("The Psychology of Choice"),
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_CANONICAL_URL}${Categories.HumanBehaviour}/vanishing-art-connection`,
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
              src="/articles/vanishing-art-connection/1.jpg"
              style={{
                height: "auto",
                width: "100%",
              }}
              width={717}
            />
          </header>
          <div className="flex flex-col gap-y-[24px] md:gap-y-[48px]">
            <p className="max-w-[500px] italic">
              Human connection has always been at the heart of our existence.
              For centuries, communities were built around shared
              experiences—conversations around a fire, gatherings in public
              squares, or celebrations of life’s milestones. But in today’s
              digital-first world, connection looks very different.
              Relationships have shifted from face-to-face interactions to
              screen-to-screen exchanges, raising profound questions about how
              we relate to one another in the modern age.
            </p>
            <div className="flex w-full flex-col gap-y-[12px]">
              <h2 className="col-span-full text-2xl font-bold uppercase">
                The Foundation of Connection: Then and Now
              </h2>
              <Image
                alt="The Books That Shaped a Decade: Stories That Stay with You"
                className="h-auto w-full min-w-[calc(100%+48px)] max-w-[500px] -translate-x-[24px] sm:min-w-full"
                height={858}
                priority
                src="/articles/vanishing-art-connection/2.jpg"
                width={717}
              />
              <p>
                In the past, relationships were deeply rooted in physical
                presence. Families gathered around dinner tables, neighbors
                stopped to chat on porches, and communities came together to
                celebrate or mourn. Connection wasn’t just a luxury—it was a
                necessity, vital for survival and emotional well-being.
              </p>
              <p>
                Today, while the internet has expanded the reach of human
                interaction, it has also redefined it. Conversations now happen
                via text or video call, and many relationships exist primarily
                online. According to a 2021 study in the Journal of Social and
                Personal Relationships, while digital communication increases
                accessibility, it often reduces emotional depth, as nonverbal
                cues like tone and body language are lost in translation.
              </p>
            </div>
            <div className="flex w-full flex-col gap-y-[12px]">
              <h2 className="col-span-full text-2xl font-bold uppercase">
                The Rise of Digital Relationships
              </h2>
              <p className="w-full">
                Technology has made it easier than ever to stay in touch, but at
                what cost? Social media platforms promise connection but often
                deliver curated performances of life. We scroll through feeds of
                updates, birthdays, and achievements, but these interactions can
                feel passive, a far cry from the warmth of face-to-face
                conversations.
              </p>
              <p>
                A study from the American Psychological Association found that
                while 72% of respondents reported using social media to maintain
                relationships, only 29% felt these interactions were meaningful.
                The convenience of instant messaging and video calls often comes
                at the expense of intentional, meaningful communication.
              </p>
            </div>
            <div className="flex w-full flex-col gap-y-[12px]">
              <h2 className="col-span-full text-2xl font-bold uppercase">
                Loneliness in a Connected World
              </h2>
              <p className="w-full">
                Paradoxically, despite being more “connected” than ever, people
                report feeling lonelier. The Cigna Loneliness Index revealed
                that over 60% of Americans feel lonely, with younger
                generations—the most digitally connected—reporting the highest
                levels of isolation.
                <br />
                Historically, loneliness was less common, as social structures
                like extended families and tightly knit communities provided a
                natural buffer. The shift to smaller households and the rise of
                digital interactions have eroded these organic support systems,
                leaving many to navigate relationships in isolation.
              </p>
            </div>
            <div className="flex w-full flex-col gap-y-[12px]">
              <h2 className="col-span-full text-2xl font-bold uppercase">
                The Psychological Impact of the Shift
              </h2>
              <p className="w-full">
                The move from in-person to digital interactions has altered not
                just how we connect but also how we perceive relationships. The
                Journal of Experimental Psychology highlights that digital
                communication often prioritizes efficiency over emotional
                nuance. Texting, for instance, simplifies complex emotions into
                emojis or brief phrases, limiting our ability to fully express
                or understand one another.
                <br />
                Moreover, the phenomenon of “social media fatigue,” where
                constant connectivity becomes overwhelming, has led to
                disengagement and reduced satisfaction in both digital and
                real-life relationships.
              </p>
            </div>
            <div className="flex w-full flex-col gap-y-[12px]">
              <h2 className="col-span-full text-2xl font-bold uppercase">
                Rebuilding Real-Life Connections
              </h2>
              <p className="w-full">
                While digital communication is here to stay, there’s a growing
                recognition of the need to return to more authentic,
                face-to-face interactions. Experts suggest:
                <br />
                Prioritizing Quality Over Quantity: Focus on fewer, deeper
                connections rather than spreading attention thin across many.
                <br />
                Scheduling Unplugged Time: Designate specific periods for
                in-person interaction, free from screens and distractions.
                <br />
                Creating Shared Experiences: Activities like shared meals, group
                hobbies, or volunteering can foster stronger bonds than digital
                chats.
              </p>
            </div>
            <div className="flex w-full flex-col gap-y-[12px]">
              <h2 className="col-span-full text-2xl font-bold uppercase">
                the path forward
              </h2>
              <p className="w-full">
                The evolution of human connection doesn’t have to mean losing
                what makes relationships meaningful. By blending the convenience
                of technology with the depth of face-to-face interaction, we can
                create a future where connection is not only accessible but also
                fulfilling. The key lies in remembering that while screens can
                connect us, it’s presence—true, physical presence—that sustains
                us.
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
