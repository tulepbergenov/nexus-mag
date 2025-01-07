import { LatestArticleList } from "@/modules";
import { appTitle } from "@/shared/libs";
import { Categories } from "@/shared/types";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: appTitle("A Review of Poor Artists: The Art World Undressed"),
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_CANONICAL_URL}${Categories.ArtLiterature}/review-poor-artists`,
  },
};

const Page = () => {
  return (
    <section>
      <div className="container">
        <div>
          <header className="flex flex-col items-center justify-center py-[24px] text-center text-[#FF0004] sm:py-[48px]">
            <h1 className="text-4xl font-medium uppercase -tracking-[0.1em]">
              A Review of Poor Artists: The Art World Undressed
            </h1>
            <Link
              className="mt-[12px] flex w-max items-center justify-center rounded-[32px] border border-[#FF0004] px-[24px] py-[6px] text-sm font-bold uppercase"
              href={Categories.ArtLiterature}
            >
              Art & Literature
            </Link>
            <Image
              alt="The Books That Shaped a Decade: Stories That Stay with You"
              className="mt-[12px]"
              height={738}
              priority
              src="/articles/review-poor-artists/1.jpg"
              style={{
                height: "400px",
                width: "auto",
              }}
              width={738}
            />
          </header>
          <div className="flex flex-col gap-y-[24px] md:gap-y-[48px]">
            <p className="max-w-[500px] italic">
              Poor Artists isn’t just a book—it’s a manifesto, a critique, and a
              much-needed wake-up call. Written by Gabrielle de la Puente and
              Zarina Muhammad, the duo behind The White Pube, this hybrid work
              of fiction and real-world commentary tears apart the glossy facade
              of the art world to expose its cracks. Through the fictional lens
              of Quest Talukdar—a young British South Asian artist struggling to
              make sense of her place in an industry obsessed with aesthetics
              and profit—the book is an uncompromising exploration of the
              systemic inequalities that define contemporary art.
              <br />
              <br />
              But don’t be fooled into thinking Poor Artists is a standard
              critique. This is The White Pube we’re talking about: irreverent,
              witty, and unapologetically sharp. The book blends interviews with
              real artists—including Turner Prize winners—with Quest’s fictional
              narrative, creating a kaleidoscopic portrait of an industry that
              simultaneously inspires and alienates.
            </p>
            <div className="flex w-full flex-col gap-y-[12px]">
              <h2 className="col-span-full text-2xl font-bold uppercase">
                Unpacking the Narrative
              </h2>
              <div className="flex items-center justify-center">
                <Image
                  alt="Unpacking the Narrative"
                  className="h-auto w-full max-w-[400px]"
                  height={539}
                  src="/articles/review-poor-artists/2.jpg"
                  width={809}
                />
              </div>
              <p>
                Quest&rsquo;s story is&nbsp;as&nbsp;much about survival
                as&nbsp;it&nbsp;is&nbsp;about art. Through her eyes, we&nbsp;see
                the struggles of&nbsp;navigating a&nbsp;field that demands
                constant self-branding while punishing authenticity. The weight
                of&nbsp;representation&mdash;both cultural and
                creative&mdash;presses heavily on&nbsp;her, highlighting the
                broader issue of&nbsp;tokenism in&nbsp;the art world.
                Quest&rsquo;s experiences mirror those of&nbsp;countless artists
                who are told to&nbsp;&laquo;just make art&raquo; but are trapped
                in&nbsp;a&nbsp;system where the rules are stacked against them.
              </p>
              <p>
                And then there are the interviews. De la Puente and Muhammad
                intersperse Quest’s journey with candid conversations that pull
                no punches. These voices expose the quiet despair, biting humor,
                and raw resilience of artists who’ve tried—and often failed—to
                thrive in a space designed to exclude. The book’s ability to
                seamlessly weave fictional narrative with these firsthand
                accounts makes it as much a documentary as it is a novel.
              </p>
            </div>
            <div className="flex w-full flex-col gap-y-[12px]">
              <h2 className="col-span-full text-2xl font-bold uppercase">
                Art as a Commodity
              </h2>
              <p>
                One of the book’s central critiques is the commodification of
                art. In a system where gallery sales and Instagram aesthetics
                reign supreme, art becomes less about expression and more about
                marketability. Quest’s journey underscores this dilemma, as she
                grapples with creating work that feels honest while being told
                it won’t “sell.” This tension—between authenticity and
                commercial viability—is a recurring theme throughout the book,
                resonating deeply with any artist who’s ever been asked to
                compromise their vision for the sake of market demand.
              </p>
              <p>
                What’s refreshing about Poor Artists is its refusal to
                romanticize the struggle. It doesn’t glorify the starving artist
                trope—it dismantles it, questioning why artists are expected to
                suffer for their craft in a system that profits off their labor.
                Instead, it calls for a reevaluation of how we value art and
                artists, demanding systemic change rather than superficial
                sympathy.
              </p>
            </div>
            <div className="flex w-full flex-col gap-y-[12px]">
              <h2 className="col-span-full text-2xl font-bold uppercase">
                The White Pube’s Vision
              </h2>
              <div className="flex items-center justify-center">
                <Image
                  alt="Unpacking the Narrative"
                  className="h-auto w-full max-w-[350px]"
                  height={539}
                  src="/articles/review-poor-artists/3.jpg"
                  width={809}
                />
              </div>
              <p>
                This book isn’t just a narrative—it’s an extension of The White
                Pube’s ethos. Known for their scathing art reviews and
                commitment to making the industry accessible, de la Puente and
                Muhammad are provocateurs in the best way. They’ve made a name
                for themselves by challenging elitism, advocating for
                transparency, and amplifying marginalized voices in the art
                world. With Poor Artists, they extend that mission into the
                realm of fiction, using Quest’s journey to illuminate the
                broader systemic issues that plague the industry.
              </p>
              <p>
                The duo’s biting wit and relentless honesty are present on every
                page, making the book both an engaging read and a powerful call
                to action. Whether it’s critiquing the inequities of gallery
                representation or dissecting the exploitative nature of unpaid
                internships, The White Pube pulls no punches, urging readers to
                rethink their relationship with art and the systems that sustain
                it.
              </p>
            </div>
            <div className="flex w-full flex-col gap-y-[12px]">
              <h2 className="col-span-full text-2xl font-bold uppercase">
                Why Poor Artists Matters
              </h2>
              <p>
                Poor Artists resonates not just because it’s brutally honest,
                but because it speaks to the collective frustration of those who
                love art but hate the systems that gatekeep it. It’s a rallying
                cry for anyone who has ever felt sidelined, unseen, or
                undervalued in creative spaces. By blending fiction with
                real-world accounts, the book offers a multifaceted critique
                that’s as compelling as it is necessary.
              </p>
              <p>
                Moreover, Poor Artists challenges readers to reflect on their
                own roles within the art ecosystem. Are we complicit in
                perpetuating these inequities? How can we, as viewers, patrons,
                or even creators, push for change? The book doesn’t just ask
                these questions—it demands answers.
              </p>
            </div>
            <div className="flex w-full flex-col gap-y-[12px]">
              <h2 className="col-span-full text-2xl font-bold uppercase">
                Conclusion: A Revolution in Print
              </h2>
              <p>
                For art lovers, artists, and anyone questioning the status quo,
                Poor Artists isn’t just a book—it’s a revolution in print. It’s
                a testament to the resilience of creatives who persist despite
                the odds and a blueprint for dismantling the systems that hold
                them back. In a world where art often feels commodified and
                disconnected from its roots, Poor Artists reminds us of its true
                purpose: to provoke, inspire, and connect.
              </p>
              <p>
                Whether you’re deeply entrenched in the art world or simply
                curious about its inner workings, Poor Artists is a must-read.
                It’s not just a critique of an industry—it’s a call to imagine a
                better one.
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
