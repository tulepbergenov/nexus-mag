import type { LayoutType } from "@/shared/types";
import { ThemeProvider as _ThemeProvider } from "next-themes";

export const ThemeProvider = ({ children }: LayoutType) => {
  return <_ThemeProvider>{children}</_ThemeProvider>;
};
