import { ContentCategory } from "@/modules";
import { Categories } from "@/shared/types";

const ArtLiteraturePage = () => {
  return (
    <section>
      <div className="container">
        <div>
          <ContentCategory
            articles={[
              {
                title:
                  "The Books That Shaped a Decade: Stories That Stay with You",
                href: `${Categories.ArtLiterature}/books-that-shaped-decade`,
                cover: "/articles/books-that-shaped-decade/1.jpg",
              },
              {
                title:
                  "Words That Shape Worlds: Literature in the Age of Reimagination",
                href: `${Categories.ArtLiterature}/words-shape-worlds`,
                cover: "/articles/words-shape-worlds/1.jpg",
              },
              {
                title: "a review of poor artists",
                href: `${Categories.ArtLiterature}/review-poor-artists`,
                cover: "/articles/review-poor-artists/1.jpg",
              },
              {
                title: "Visual Art That Shaped Cinematography",
                href: `${Categories.ArtLiterature}/visual-art-cinematography`,
                cover: "/articles/visual-art-cinematography/1.jpg",
              },
            ]}
            color="#FF0004"
            title="Art & Literature"
          />
        </div>
      </div>
    </section>
  );
};

export default ArtLiteraturePage;
