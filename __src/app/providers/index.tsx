import type { LayoutType } from "@/shared/types";
import { ThemeProvider } from "./ThemeProvider";
import { WrapBalancerProvider } from "./WrapBalancerProvider";

export const Providers = ({ children }: LayoutType) => {
  return (
    <ThemeProvider>
      <WrapBalancerProvider>{children}</WrapBalancerProvider>
    </ThemeProvider>
  );
};
