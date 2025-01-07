import type { ReactNode } from "react";

export type LayoutType = {
  children: ReactNode;
};

export enum Categories {
  ArtLiterature = "/art-literature",
  SociologySocialIssues = "/sociology-social-issues",
  CultureIdentity = "/culture-identity",
  HumanBehaviour = "/human-behaviour",
}
