import { LayoutType } from "@/shared/types";
import { WrapBalancerProvider } from "./WrapBalancerProvider";

export const Providers = ({ children }: LayoutType) => {
  return <WrapBalancerProvider>{children}</WrapBalancerProvider>;
};
