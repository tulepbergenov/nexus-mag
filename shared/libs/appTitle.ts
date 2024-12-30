const baseTitle = "nexus";

export const appTitle = (title?: string): string => {
  return title && typeof title === "string" && title.length > 0
    ? `${title} | ${baseTitle}`
    : baseTitle;
};
