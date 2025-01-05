import { LinkProps } from "next/link";
import { ComponentProps } from "react";

export type NexusLinkType = LinkProps & ComponentProps<"a">;
