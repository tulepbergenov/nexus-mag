import { appTitle } from "@/__src/shared/libs";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: appTitle(),
};

const Home = () => {
  return (
    <section>
      <div className="container">
        <div className="p-4 flex flex-col gap-y-4">
          <div className="flex flex-col gap-y-2 font-fm-test-manuka text-4xl">
            <p className="font-bold">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
              minus reprehenderit reiciendis? Quidem esse labore magni deleniti
              ipsam sit maxime, consequatur vel quos praesentium obcaecati
              accusamus iusto consectetur itaque nesciunt!
            </p>
            <p className="font-medium">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
              minus reprehenderit reiciendis? Quidem esse labore magni deleniti
              ipsam sit maxime, consequatur vel quos praesentium obcaecati
              accusamus iusto consectetur itaque nesciunt!
            </p>
            <p className="font-normal">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
              minus reprehenderit reiciendis? Quidem esse labore magni deleniti
              ipsam sit maxime, consequatur vel quos praesentium obcaecati
              accusamus iusto consectetur itaque nesciunt!
            </p>
            <p className="font-light">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
              minus reprehenderit reiciendis? Quidem esse labore magni deleniti
              ipsam sit maxime, consequatur vel quos praesentium obcaecati
              accusamus iusto consectetur itaque nesciunt!
            </p>
          </div>
          <div className="flex flex-col gap-y-2 font-fm-test-untitled">
            <p className="font-bold">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
              minus reprehenderit reiciendis? Quidem esse labore magni deleniti
              ipsam sit maxime, consequatur vel quos praesentium obcaecati
              accusamus iusto consectetur itaque nesciunt!
            </p>
            <p className="font-bold italic">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
              minus reprehenderit reiciendis? Quidem esse labore magni deleniti
              ipsam sit maxime, consequatur vel quos praesentium obcaecati
              accusamus iusto consectetur itaque nesciunt!
            </p>
            <p className="font-normal">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
              minus reprehenderit reiciendis? Quidem esse labore magni deleniti
              ipsam sit maxime, consequatur vel quos praesentium obcaecati
              accusamus iusto consectetur itaque nesciunt!
            </p>
            <p className="font-normal italic">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
              minus reprehenderit reiciendis? Quidem esse labore magni deleniti
              ipsam sit maxime, consequatur vel quos praesentium obcaecati
              accusamus iusto consectetur itaque nesciunt!
            </p>
            <p className="font-light">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
              minus reprehenderit reiciendis? Quidem esse labore magni deleniti
              ipsam sit maxime, consequatur vel quos praesentium obcaecati
              accusamus iusto consectetur itaque nesciunt!
            </p>
            <p className="font-light italic">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
              minus reprehenderit reiciendis? Quidem esse labore magni deleniti
              ipsam sit maxime, consequatur vel quos praesentium obcaecati
              accusamus iusto consectetur itaque nesciunt!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
