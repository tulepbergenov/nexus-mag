import { ContentCategory } from "@/modules";
import { Categories } from "@/shared/types";

const СultureIdentityPage = () => {
  return (
    <section>
      <div className="container">
        <div>
          <ContentCategory
            articles={[
              {
                title: "Global Stories Local Realities",
                href: `${Categories.CultureIdentity}/global-stories-local-realities`,
                cover: "/articles/global-stories-local-realities/1.jpg",
              },
              {
                title: "the hidden cost of hustle culture",
                href: `${Categories.CultureIdentity}/hidden-cost-hustle-culture`,
                cover: "/articles/hidden-cost-hustle-culture/1.jpg",
              },
              {
                title: "How Pop Culture Shapes Who We Are",
                href: `${Categories.CultureIdentity}/pop-culture-shapes-us`,
                cover: "/articles/pop-culture-shapes-us/1.jpg",
              },
            ]}
            color="#5715C1"
            title="culture & identity"
          />
        </div>
      </div>
    </section>
  );
};

export default СultureIdentityPage;
