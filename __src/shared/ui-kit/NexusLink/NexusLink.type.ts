import type { LinkProps } from "next/link";
import type { ComponentProps } from "react";

export type NexusLinkType = LinkProps & ComponentProps<"a">;
