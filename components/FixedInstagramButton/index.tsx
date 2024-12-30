import { cn } from "@/shared/libs";
import Link from "next/link";
import { FaInstagram } from "react-icons/fa";
import styles from "./FixedInstagramButton.module.css";

export const FixedInstagramButton = () => {
  return (
    <Link
      className={cn(
        "fixed -right-[100px] bottom-[70px] z-[120] flex size-[60px] items-center justify-center rounded-full bg-white shadow-md lg:hidden",
        styles.instagramBtn,
      )}
      href={"https://www.instagram.com/nexus_magg"}
      target="_blank"
    >
      <FaInstagram className="h-auto w-[32px]" />
      <span className="sr-only">Nexus Magazine Instagram</span>
    </Link>
  );
};
