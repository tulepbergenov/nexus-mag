import { ContentCategory } from "@/modules";
import { Categories } from "@/shared/types";

const HumanBehaviour = () => {
  return (
    <section>
      <div className="container">
        <div>
          <ContentCategory
            articles={[
              {
                title: "The Psychology of Choice",
                href: `${Categories.HumanBehaviour}/psychology-of-choice`,
                cover: "/articles/psychology-of-choice/1.jpg",
              },
              {
                title: "the vanishing art of connection",
                href: `${Categories.HumanBehaviour}/vanishing-art-connection`,
                cover: "/articles/vanishing-art-connection/1.jpg",
              },
              {
                title: "Dating in 2024: Navigating Modern Romance",
                href: `${Categories.HumanBehaviour}/dating-2024-modern-romance`,
                cover: "/articles/dating-2024-modern-romance/1.jpg",
              },
            ]}
            color="#0FBAC2"
            title="human behaviour"
          />
        </div>
      </div>
    </section>
  );
};

export default HumanBehaviour;
