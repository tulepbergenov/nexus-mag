import { LatestArticleList } from "@/modules";
import { appTitle } from "@/shared/libs";
import { Categories } from "@/shared/types";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: appTitle("The Books That Shaped a Decade: Stories That Stay with You"),
  description:
    "Contemporary online publication exploring the intersection of humanity and AI",
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_CANONICAL_URL}/art-literature/books-that-shaped-decade`,
  },
};

const Page = () => {
  return (
    <section>
      <div className="container">
        <div>
          <header className="flex flex-col items-center justify-center py-[24px] text-center text-[#FF0004] sm:py-[48px]">
            <h1 className="text-4xl font-medium uppercase -tracking-[0.1em]">
              The Books That Shaped a Decade: Stories That Stay with You
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
              src="/articles/books-that-shaped-decade/1.jpg"
              style={{
                height: "400px",
                width: "auto",
              }}
              width={738}
            />
          </header>
          <div className="flex flex-col gap-y-[24px] md:gap-y-[48px]">
            <p className="max-w-[500px] italic">
              Some books are like passing acquaintances—pleasant but
              forgettable. Then there are the ones that stay with you, lingering
              in the corners of your mind, resurfacing when you least expect it.
              These are the books that defined the last ten years: stories that
              don’t just entertain but challenge, provoke, and sometimes even
              wreck you. If you’re looking for fiction (and a few raw memoirs)
              that truly hit different, this list is for you.
            </p>
            <div className="flex flex-col gap-[12px] sm:grid sm:grid-cols-8">
              <h2 className="col-span-full text-2xl font-bold uppercase">
                Sally Rooney’s Normal People
              </h2>
              <Image
                alt="Sally Rooney’s Normal People"
                className="col-span-2"
                height={526}
                priority
                src="/articles/books-that-shaped-decade/2.jpg"
                style={{
                  height: "auto",
                  width: "100%",
                }}
                width={370}
              />
              <div className="col-span-6 flex flex-col gap-y-[12px]">
                <p>
                  It’s not a love story in the traditional sense—it’s too messy,
                  too jagged for that. Marianne and Connell are flawed,
                  sometimes cruel, always vulnerable, and Rooney writes them
                  like she knows them, like she knows us. The novel captures the
                  ineffable nuances of modern relationships, where love, class,
                  and miscommunication collide. It leaves you asking if love is
                  ever enough—and whether it has to be.
                </p>
                <p>
                  Rooney’s sparse, cutting prose has made Normal People a
                  cultural touchstone, spawning a critically acclaimed TV
                  adaptation and countless debates about its characters. It’s a
                  novel that doesn’t just reflect a generation’s struggles but
                  amplifies them, forcing readers to confront their own
                  vulnerabilities.
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-[12px] sm:grid sm:grid-cols-8">
              <h2 className="col-span-full text-2xl font-bold uppercase">
                Michelle Zauner’s Crying in H Mart
              </h2>
              <Image
                alt="Michelle Zauner’s Crying in H Mart"
                className="col-span-2"
                height={526}
                priority
                src="/articles/books-that-shaped-decade/3.jpg"
                style={{
                  height: "auto",
                  width: "100%",
                }}
                width={370}
              />
              <div className="col-span-6 flex flex-col gap-y-[12px]">
                <p>
                  Zauner’s memoir reads like poetry, blending the flavors of
                  grief, identity, and memory into a narrative that’s as
                  nourishing as it is heartbreaking. Through bowls of kimchi
                  stew and vivid recollections of her late mother, Zauner
                  explores the intricate ties between food and belonging. Her
                  raw, lyrical prose invites readers into her intimate world,
                  where the kitchen becomes a sanctuary and grief transforms
                  into a bridge to heritage.
                </p>
                <p>
                  More than a personal story, Crying in H Mart resonates with
                  anyone who’s ever felt unmoored by loss or unsure of where
                  they fit within their cultural identity. It’s a book that will
                  have you reaching for your favorite comfort food and
                  reflecting on the unspoken bonds that define family.
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-[12px] sm:grid sm:grid-cols-8">
              <h2 className="col-span-full text-2xl font-bold uppercase">
                Taylor Jenkins Reid’s Daisy Jones & The Six
              </h2>
              <Image
                alt="Taylor Jenkins Reid’s Daisy Jones & The Six"
                className="col-span-2"
                height={526}
                priority
                src="/articles/books-that-shaped-decade/4.jpg"
                style={{
                  height: "auto",
                  width: "100%",
                }}
                width={370}
              />
              <div className="col-span-6 flex flex-col gap-y-[12px]">
                <p>
                  This isn’t just a book—it’s a fully realized world. Structured
                  as an oral history of a fictional 70s rock band, Daisy Jones &
                  The Six captures the glamour, chaos, and heartbreak of fame.
                  Reid’s characters feel so real that you’ll want to Google
                  their music, and the band’s dynamics—fraught with passion and
                  tension—are electric.
                </p>
                <p>
                  Beyond the music, Reid explores themes of addiction, ambition,
                  and creative conflict, weaving a story that’s as emotionally
                  raw as it is entertaining. It’s a book that pulls you into its
                  world and doesn’t let go, leaving you with the echoes of its
                  songs long after the final page.
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-[12px] sm:grid sm:grid-cols-8">
              <h2 className="col-span-full text-2xl font-bold uppercase">
                Hanya Yanagihara’s A Little Life
              </h2>
              <Image
                alt="Hanya Yanagihara’s A Little Life"
                className="col-span-2"
                height={526}
                priority
                src="/articles/books-that-shaped-decade/5.jpg"
                style={{
                  height: "auto",
                  width: "100%",
                }}
                width={370}
              />
              <div className="col-span-6 flex flex-col gap-y-[12px]">
                <p>
                  This is the book people warn you about before you read it—and
                  for good reason. A Little Life is a heavy, sprawling novel
                  that delves into trauma, love, and friendship through the
                  lives of four friends in New York City. Yanagihara’s portrayal
                  of Jude, a character haunted by his past, is as devastating as
                  it is unforgettable.
                </p>
                <p>
                  The novel’s unflinching exploration of pain and resilience has
                  polarized readers—some call it too brutal, others a
                  masterpiece. But what’s undeniable is its emotional power. A
                  Little Life doesn’t just tell a story; it immerses you in the
                  raw, aching complexity of its characters’ lives, leaving an
                  indelible mark.
                </p>
              </div>
            </div>
            <div className="flex w-full flex-col gap-y-[12px]">
              <h2 className="col-span-full text-2xl font-bold uppercase">
                Why These Books Matter
              </h2>
              <p className="w-full">
                These aren’t just books—they’re landmarks. They map out the
                emotional and cultural terrain of the last decade, capturing the
                complexities of identity, love, grief, and reinvention. They
                challenge us to feel deeply, think critically, and question the
                narratives we hold about ourselves and others.
              </p>
              <p>
                For a generation navigating rapid change and constant
                uncertainty, these stories offer something rare: a chance to
                pause, reflect, and connect. They’re not for the faint of heart,
                but if you’re ready for stories that will stay with you long
                after you’ve turned the last page, this list is where to start.
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
