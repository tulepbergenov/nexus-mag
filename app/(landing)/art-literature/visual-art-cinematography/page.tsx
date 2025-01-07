import { LatestArticleList } from "@/modules";
import { appTitle } from "@/shared/libs";
import { Categories } from "@/shared/types";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: appTitle("Visual Art That Shaped Cinematography"),
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_CANONICAL_URL}${Categories.ArtLiterature}/visual-art-cinematography`,
  },
};

const Page = () => {
  return (
    <section>
      <div className="container">
        <div>
          <header className="flex flex-col items-center justify-center py-[24px] text-center text-[#FF0004] sm:py-[48px]">
            <h1 className="text-4xl font-medium uppercase -tracking-[0.1em]">
              Visual Art That Shaped Cinematography
            </h1>
            <Link
              className="mt-[12px] flex w-max items-center justify-center rounded-[32px] border border-[#FF0004] px-[24px] py-[6px] text-sm font-bold uppercase"
              href={Categories.ArtLiterature}
            >
              Art & Literature
            </Link>
            <Image
              alt="The Books That Shaped a Decade: Stories That Stay with You"
              className="mt-[12px] h-auto w-full min-w-[calc(100%+48px)] sm:min-w-full"
              height={738}
              priority
              src="/articles/visual-art-cinematography/1.jpg"
              style={{
                height: "auto",
                width: "100%",
              }}
              width={738}
            />
          </header>
          <div className="flex flex-col gap-y-[24px] md:gap-y-[48px]">
            <p className="max-w-[500px] italic">
              Cinema has always been influenced by visual art. But beyond the
              usual nods to classics like Vermeer or Hopper, there’s a more
              chaotic, experimental side to the relationship between art and
              film. It’s the spaces where the surreal, the unsettling, and the
              provocative meet that create some of the most unforgettable
              cinematic experiences. From disorienting dreamscapes to fragmented
              narratives, here’s a look at how visual art’s darker, edgier side
              has shaped some of the most boundary-pushing films.
            </p>
            <div className="flex w-full flex-col gap-y-[12px]">
              <h2 className="col-span-full text-2xl font-bold uppercase">
                Francis Bacon’s Grotesque Beauty and the Horror of the Human
                Form
              </h2>
              <p className="w-full">
                Key Work: Study After Vel&aacute;zquez&rsquo;s Portrait
                of&nbsp;Pope Innocent&nbsp;X (1953)
                <br />
                Francis Bacon&rsquo;s distorted, screaming figures feel like
                a&nbsp;punch to&nbsp;the gut. His art grapples with existential
                dread and the grotesque beauty of&nbsp;the human form. The
                smeared colors and chaotic intensity mirror the feeling
                of&nbsp;unraveling, both physically and mentally.
              </p>
              <p>
                In&nbsp;Film:
                <br /> David Lynch&rsquo;s Eraserhead (1977) feels like
                it&nbsp;was plucked directly from a&nbsp;Bacon canvas. The
                surreal body horror and the oppressive atmosphere of&nbsp;dread
                echo Bacon&rsquo;s approach to&nbsp;deforming reality.
                Similarly, Charlie Kaufman&rsquo;s I&rsquo;m Thinking
                of&nbsp;Ending Things (2020) captures that same fragmented,
                nightmarish quality, where the characters&mdash;and the
                audience&mdash;feel trapped in&nbsp;a&nbsp;distorted version
                of&nbsp;reality.
              </p>
              <Image
                alt="Francis Bacon’s Grotesque Beauty and the Horror of the Human Form"
                className="h-auto w-full min-w-[calc(100%+48px)] -translate-x-[24px] sm:min-w-full sm:translate-x-0"
                height={724}
                src={"/articles/visual-art-cinematography/2.jpg"}
                width={764}
              />
            </div>
            <div className="flex w-full flex-col gap-y-[12px]">
              <h2 className="col-span-full text-2xl font-bold uppercase">
                Surrealist Collisions: René Magritte and the Logic of Dreams
              </h2>
              <p className="w-full">
                Key Work: The Lovers (1928)
                <br />
                René Magritte’s surrealist paintings often explore the
                uncanny—what feels familiar yet deeply wrong. The Lovers, with
                its two figures kissing through cloth-covered faces, is
                unsettling and intimate, suggesting connection and disconnection
                all at once.
              </p>
              <p>
                In&nbsp;Film:
                <br />
                Charlie Kaufman’s Synecdoche, New York (2008) shares Magritte’s
                surrealism in its fragmented, collapsing narrative about art and
                identity. The film’s layered realities and eerie sense of
                inevitability mirror Magritte’s ability to take everyday objects
                and transform them into something profoundly strange. Lars von
                Trier’s Melancholia (2011) also channels Magritte’s
                juxtaposition of beauty and despair, particularly in its
                haunting imagery of a planet hurtling toward Earth.
              </p>
              <Image
                alt="Francis Bacon’s Grotesque Beauty and the Horror of the Human Form"
                className="h-auto w-full min-w-[calc(100%+48px)] -translate-x-[24px] sm:min-w-full sm:translate-x-0"
                height={724}
                src={"/articles/visual-art-cinematography/3.jpg"}
                width={764}
              />
            </div>
            <div className="flex w-full flex-col gap-y-[12px]">
              <h2 className="col-span-full text-2xl font-bold uppercase">
                The Brutality of Minimalism: Kazimir Malevich and Emotional Void
              </h2>
              <p className="w-full">
                Key Work: Black Square (1915)
                <br />
                Kazimir Malevich’s Black Square represents the purest form of
                abstraction—a stark rejection of representation, emotion, and
                narrative. Yet its minimalism invites interpretation, making it
                a canvas for personal projection and existential pondering.
              </p>
              <p>
                In&nbsp;Film:
                <br />
                Yorgos Lanthimos’s The Lobster (2015) reflects this minimalist
                ethos, stripping human interactions down to their barest, most
                absurd components. The film’s cold, detached tone echoes the
                void-like quality of Malevich’s work, creating a world that’s
                both sterile and brimming with subtext.
              </p>
              <Image
                alt="Francis Bacon’s Grotesque Beauty and the Horror of the Human Form"
                className="h-auto w-full min-w-[calc(100%+48px)] -translate-x-[24px] sm:min-w-full sm:translate-x-0"
                height={724}
                src={"/articles/visual-art-cinematography/4.jpg"}
                width={764}
              />
            </div>
            <div className="flex w-full flex-col gap-y-[12px]">
              <h2 className="col-span-full text-2xl font-bold uppercase">
                Max Ernst’s Chaotic Dreamscapes
              </h2>
              <p className="w-full">
                Key Work: The Elephant Celebes (1921)
                <br />
                Max Ernst’s surrealist art is defined by its chaotic, dreamlike
                quality. The Elephant Celebes features mechanical and organic
                elements colliding, suggesting a world in flux, where nothing is
                stable and everything is bizarre.
              </p>
              <p>
                In&nbsp;Film:
                <br />
                Terry Gilliam’s Brazil (1985) feels like a direct descendant of
                Ernst’s surrealism. The dystopian, mechanical chaos of Gilliam’s
                world echoes the visual dissonance of Ernst’s paintings, where
                industrial motifs clash with human fragility. Kaufman’s I’m
                Thinking of Ending Things (2020) again fits here, particularly
                in its use of surreal, shifting environments that feel like
                they’re falling apart.
              </p>
              <Image
                alt="Francis Bacon’s Grotesque Beauty and the Horror of the Human Form"
                className="h-auto w-full min-w-[calc(100%+48px)] -translate-x-[24px] sm:min-w-full sm:translate-x-0"
                height={724}
                src={"/articles/visual-art-cinematography/5.jpg"}
                width={764}
              />
            </div>
            <div className="flex w-full flex-col gap-y-[12px]">
              <h2 className="col-span-full text-2xl font-bold uppercase">
                Egon Schiele’s Raw Intimacy and Emotional Distortion
              </h2>
              <p className="w-full">
                Key Work: Self-Portrait with Physalis (1912)
                <br />
                Egon Schiele’s raw, angular portraits capture human
                vulnerability in its most unguarded form. His works, filled with
                distorted figures and harsh lines, delve into emotional
                discomfort and self-exposure.
              </p>
              <p>
                In&nbsp;Film:
                <br />
                Lynne Ramsay’s We Need to Talk About Kevin (2011) shares
                Schiele’s stark, uncomfortable intimacy. The film’s
                visuals—often centered on the human body as a site of
                trauma—echo Schiele’s unflinching gaze. The emotional distortion
                in both the art and the film creates a visceral impact, forcing
                the viewer to confront the discomfort head-on.
              </p>
              <Image
                alt="Francis Bacon’s Grotesque Beauty and the Horror of the Human Form"
                className="h-auto w-full min-w-[calc(100%+48px)] -translate-x-[24px] sm:min-w-full sm:translate-x-0"
                height={724}
                src={"/articles/visual-art-cinematography/6.jpg"}
                width={764}
              />
            </div>
            <div className="flex w-full flex-col gap-y-[12px]">
              <h2 className="col-span-full text-2xl font-bold uppercase">
                Mark Rothko and the Weight of Color
              </h2>
              <p className="w-full">
                Key Work: Untitled (Black on Maroon) (1958)
                <br />
                Rothko’s abstract paintings are often associated with emotional
                intensity. His large-scale works use color to evoke moods that
                are impossible to articulate, creating an overwhelming sense of
                presence and absence.
              </p>
              <p>
                In&nbsp;Film:
                <br />
                Gaspar Noé’s Enter the Void (2009) channels Rothko’s emotional
                use of color through its neon-drenched, hallucinatory visuals.
                The film’s kaleidoscopic journey through Tokyo feels like
                stepping inside a Rothko painting—simultaneously beautiful and
                suffocating.
              </p>
              <Image
                alt="Francis Bacon’s Grotesque Beauty and the Horror of the Human Form"
                className="h-auto w-full min-w-[calc(100%+48px)] -translate-x-[24px] sm:min-w-full sm:translate-x-0"
                height={724}
                src={"/articles/visual-art-cinematography/7.jpg"}
                width={764}
              />
            </div>
            <div className="flex w-full flex-col gap-y-[12px]">
              <h2 className="col-span-full text-2xl font-bold uppercase">
                Goya’s Nightmares and the Sublime Horrors of the Soul
              </h2>
              <p className="w-full">
                Key Work: Saturn Devouring His Son (1819–1823)
                <br />
                Goya’s Saturn Devouring His Son is a haunting depiction of
                chaos, fear, and raw brutality. It’s primal and visceral, a
                representation of the darkest corners of the human psyche.
              </p>
              <p>
                In&nbsp;Film:
                <br />
                Darren Aronofsky’s mother! (2017) feels like a direct descendant
                of Goya’s nightmares. The film’s descent into chaos and
                destruction mirrors the unrelenting violence of Saturn Devouring
                His Son. Goya’s influence can also be felt in Guillermo del
                Toro’s Pan’s Labyrinth (2006), particularly in its blend of
                beauty and horror.
              </p>
              <Image
                alt="Francis Bacon’s Grotesque Beauty and the Horror of the Human Form"
                className="h-auto w-full min-w-[calc(100%+48px)] -translate-x-[24px] sm:min-w-full sm:translate-x-0"
                height={724}
                src={"/articles/visual-art-cinematography/8.jpg"}
                width={764}
              />
              <p>
                Visual art has always been a wellspring of inspiration for
                filmmakers, shaping not only the aesthetics of cinema but also
                its emotional and intellectual depth. From Francis Bacon’s
                grotesque distortions to Magritte’s surreal dreamscapes, these
                artistic visions push the boundaries of what films can look like
                and, more importantly, what they can make us feel.
              </p>
              <p>
                Cinema is at its best when it borrows from the strange, the
                unsettling, and the transcendent qualities of visual art. These
                influences allow filmmakers to create experiences that
                challenge, provoke, and linger long after the credits roll.
                Whether it’s the stark loneliness of Hopper, the surreal
                fragmentation of Dalí, or the raw intimacy of Schiele, the
                relationship between the canvas and the screen proves that art
                and cinema are not separate worlds but deeply intertwined
                conversations.
              </p>
              <p>
                For cinephiles and art lovers alike, tracing these connections
                offers a new way to experience both mediums—reminding us that
                the most compelling stories are often born where disciplines
                collide.
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
