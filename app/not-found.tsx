import { appTitle } from "@/shared/libs";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: appTitle("not found"),
};

const NotFoundPage = () => {
  return (
    <section>
      <header>
        <h1>Not Found</h1>
      </header>
    </section>
  );
};

export default NotFoundPage;
