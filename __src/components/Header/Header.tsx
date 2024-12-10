import Image from "next/image";
import Link from "next/link";

export const Header = () => {
  return (
    <header>
      <div className="mx-auto px-[40px]">
        <div className="flex items-center justify-between py-[40px]">
          <Link
            href={"/"}
            className="font-fm-test-manuka -translate-y-[15px] font-bold text-[160px] leading-[0.8] [@media(hover:hover)]:hover:text-[#FF0004] transition-colors ease-in-out duration-300"
          >
            nexus
          </Link>
          <nav className="uppercase">
            <ul className="flex items-start gap-x-[40px]">
              <li className="flex">
                <Link
                  href={"/about"}
                  className="inline-block text-[16px] leading-[21px] font-normal"
                >
                  About
                </Link>
              </li>
              <li className="flex">
                <Link
                  href={"/about"}
                  className="inline-block max-w-[203px] text-[16px] leading-[21px] font-normal"
                >
                  SOCIOLOGY & SOCIAL ISSUES
                </Link>
              </li>
              <li className="flex">
                <Link
                  href={"/about"}
                  className="inline-block max-w-[120px] text-[16px] leading-[21px] font-normal"
                >
                  CULTURE & IDENTITY
                </Link>
              </li>
              <li className="flex">
                <Link
                  href={"/about"}
                  className="inline-block text-[16px] leading-[21px] font-normal"
                >
                  LITERATURE & ART
                </Link>
              </li>
              <li className="flex">
                <Link
                  href={"/about"}
                  className="inline-block text-[16px] max-w-[217px] leading-[21px] font-normal"
                >
                  psychology & human behaviour
                </Link>
              </li>
            </ul>
          </nav>
          <Link
            href={"/about"}
            className="inline-block text-[16px] max-w-[217px] leading-[21px] font-normal"
          >
            <Image
              src="/instagramLogo.svg"
              width={60}
              height={60}
              alt="Instagram"
            />
          </Link>
        </div>
      </div>
    </header>
  );
};
