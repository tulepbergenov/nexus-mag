import { NexusLink } from "@/shared/ui-kit";
import { AiFillInstagram } from "react-icons/ai";
import { MenuDrawer, SearchModal } from "./components";

export const HeaderBar = () => {
  return (
    <header className="sticky top-0 z-40 w-full bg-white">
      <div className="mx-auto px-[24px]">
        <div className="grid grid-cols-3 items-center border-b border-b-[#050505] py-[8px]">
          <div className="flex items-center gap-x-[24px]">
            <MenuDrawer />
            <SearchModal triggerClassName="hidden md:inline-block" />
          </div>
          <NexusLink
            className="mx-auto inline-block h-[40px] overflow-hidden"
            href={"/"}
          >
            <span className="inline-block -translate-y-[11px] font-test-manuka text-[54px] font-semibold lowercase leading-none">
              nexus
            </span>
          </NexusLink>
          <div className="ml-auto">
            <NexusLink
              className="hidden items-center justify-center transition-colors duration-300 ease-in-out active:text-[#FF0004] md:flex [@media(hover:hover)]:hover:text-[#FF0004]"
              href={"https://www.instagram.com/nexus_magg"}
              target="_blank"
            >
              <AiFillInstagram className="h-auto w-[32px]" />
              <span className="sr-only">Nexus Magazine Instagram</span>
            </NexusLink>
            <SearchModal triggerClassName="md:hidden" />
          </div>
        </div>
      </div>
    </header>
  );
};
