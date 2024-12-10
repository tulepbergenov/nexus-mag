import Link from "next/link";

export const LatestSection = () => {
  return (
    <div className="mt-[64px] mb-[100px]">
      <div className="mx-auto px-[40px]">
        <div>
          <div className="font-fm-test-manuka text-[150px] font-medium lowercase">
            Latest
          </div>
        </div>
        <div className="grid grid-cols-3 gap-[20px] text-[24px]">
          <article className="cursor-pointer group">
            <div className="w-full bg-[#C6C6C6] rounded-[60px] h-[568px] group-hover:bg-[#FF0004] transition-colors ease-in-out duration-200"></div>
            <div className="text-[#050505] mt-[20px] group-hover:text-[#FF0004] transition-colors ease-in-out duration-200">
              <div className="flex items-center justify-between">
                <p className="font-bold uppercase">fragile beauty</p>
                <Link
                  href={"#"}
                  className="text-[30px] font-bold rounded-[33px] uppercase py-[3px] px-[35px] border-[#050505] border transition-colors ease-in-out duration-200 group-hover:border-[#FF0004]"
                >
                  ART
                </Link>
              </div>
              <div className="grid grid-cols-2 gap-[20px]">
                <p className="lowercase mt-[12px]">
                  Photographs from the Sir Elton John and David Furnish
                  Collection
                </p>
              </div>
            </div>
          </article>
          <article className="cursor-pointer group">
            <div className="w-full bg-[#C6C6C6] rounded-[60px] h-[568px] group-hover:bg-[#FF0004] transition-colors ease-in-out duration-200"></div>
            <div className="text-[#050505] mt-[20px] group-hover:text-[#FF0004] transition-colors ease-in-out duration-200">
              <div className="flex items-center justify-between">
                <p className="font-bold uppercase">radical futures</p>
                <Link
                  href={"#"}
                  className="text-[30px] font-bold rounded-[33px] uppercase py-[3px] px-[35px] border-[#050505] border transition-colors ease-in-out duration-200 group-hover:border-[#FF0004]"
                >
                  social issues
                </Link>
              </div>
              <div className="grid grid-cols-2 gap-[20px]">
                <p className="lowercase mt-[12px]">
                  How Gen Z Is Fighting Inequality in a Broken World
                </p>
              </div>
            </div>
          </article>
          <article className="cursor-pointer group">
            <div className="w-full bg-[#C6C6C6] rounded-[60px] h-[568px] group-hover:bg-[#FF0004] transition-colors ease-in-out duration-200"></div>
            <div className="text-[#050505] mt-[20px] group-hover:text-[#FF0004] transition-colors ease-in-out duration-200">
              <div className="flex items-center justify-between">
                <p className="font-bold uppercase">
                  The Intersection of Poetry and AI
                </p>
                <Link
                  href={"#"}
                  className="text-[30px] font-bold rounded-[33px] uppercase py-[3px] px-[35px] border-[#050505] border transition-colors ease-in-out duration-200 group-hover:border-[#FF0004]"
                >
                  literature
                </Link>
              </div>
              <div className="grid grid-cols-2 gap-[20px]">
                <p className="lowercase mt-[12px]">
                  AI in Poetry: Mimicry, Authenticity, and the Future of
                  Creativity
                </p>
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
};
