import { appTitle } from "@/__src/shared/libs";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: appTitle("not found"),
};

const NotFound = () => {
  return (
    <section>
      <h1>Not Found</h1>
    </section>
  );
};

export default NotFound;
