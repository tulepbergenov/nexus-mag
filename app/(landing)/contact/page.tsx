import { appTitle } from "@/shared/libs";
import { NexusLink } from "@/shared/ui-kit";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: appTitle("contact"),
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_CANONICAL_URL}/contact`,
  },
};

const ContactPage = () => {
  return (
    <section>
      <div className="container">
        <div className="py-[24px] sm:py-[48px]">
          <header>
            <h1 className="text-4xl font-medium uppercase leading-none -tracking-[0.1em] sm:text-7xl">
              contact nexus
            </h1>
            <p className="text-4xl uppercase leading-none -tracking-[0.1em] sm:text-7xl">
              info
            </p>
          </header>
          <ul className="flex flex-col gap-y-[6px] pt-[24px] text-xl font-bold uppercase leading-none sm:pt-[48px] sm:text-2xl">
            <li>
              <NexusLink
                className="transition-colors duration-300 ease-in-out active:text-[#FF0004] [@media(hover:hover)]:hover:text-[#FF0004]"
                href={"https://nexus-mag.vercel.app"}
              >
                nexus-mag.vercel.app
              </NexusLink>
            </li>
            <li>
              <NexusLink
                className="transition-colors duration-300 ease-in-out active:text-[#FF0004] [@media(hover:hover)]:hover:text-[#FF0004]"
                href={"mailto:nexus.maggg@gmail.com"}
              >
                nexus.maggg@gmail.com
              </NexusLink>
            </li>
            <li>
              <NexusLink
                className="transition-colors duration-300 ease-in-out active:text-[#FF0004] [@media(hover:hover)]:hover:text-[#FF0004]"
                href={"https://www.instagram.com/nexus_magg"}
              >
                @nexus_magg
              </NexusLink>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
