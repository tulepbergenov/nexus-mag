"use client";

import NextLink from "next/link";
import { usePathname } from "next/navigation";
import { forwardRef } from "react";
import { NexusLinkType } from "./NexusLink.type";

export const NexusLink = forwardRef<HTMLAnchorElement, NexusLinkType>(
  (props, ref) => {
    const pathname = usePathname();

    return (
      <NextLink
        aria-current={props.href === pathname ? "page" : undefined}
        ref={ref}
        {...props}
      >
        {props.children}
      </NextLink>
    );
  },
);

NexusLink.displayName = "NexusLink";
