import { LayoutType } from "@/shared/types";
import { Provider } from "react-wrap-balancer";

export const WrapBalancerProvider = ({ children }: LayoutType) => {
  return <Provider>{children}</Provider>;
};
