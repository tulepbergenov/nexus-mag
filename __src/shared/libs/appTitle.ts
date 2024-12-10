const baseTitle = "nexus";

export const appTitle = (title?: string) => {
  return title && typeof title === "string"
    ? `${title} | ${baseTitle}`
    : `${baseTitle}`;
};
