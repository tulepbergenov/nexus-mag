import { ContentCategory } from "@/modules";
import { Categories } from "@/shared/types";

const SociologySocialIssuesPage = () => {
  return (
    <section>
      <div className="container">
        <div>
          <ContentCategory
            articles={[
              {
                title:
                  "Radical futures: How Gen Z Is Fighting Inequality in a Broken World",
                href: `${Categories.SociologySocialIssues}/gen-z-fighting-inequality`,
                cover: "/articles/gen-z-fighting-inequality/1.jpg",
              },
              {
                title:
                  "Nostalgia as Currency: Why the Past Dominates the Present",
                href: `${Categories.SociologySocialIssues}/nostalgia-as-currency`,
                cover: "/articles/nostalgia-as-currency/1.jpg",
              },
            ]}
            color="#050505"
            title="Sociology & social issues"
          />
        </div>
      </div>
    </section>
  );
};

export default SociologySocialIssuesPage;
