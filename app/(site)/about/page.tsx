import { appTitle } from "@/__src/shared/libs";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: appTitle("About"),
};

const AboutPage = () => {
  return (
    <section>
      <h1>About</h1>
    </section>
  );
};

export default AboutPage;
