import ArticleBox from "./ArticleBox";
import Button from "./Button";
import { useState } from "react";

const ArticleSection = () => {
  const [toggleShowMore, setToggleShowMore] = useState(false);

  const handleClick = () => {
    setToggleShowMore(!toggleShowMore);
  };

  return (
    <section className="px-24 py-12 bg-slate-100">
      <h2 className="text-4xl uppercase mb-8">Artikler</h2>
      <div className="grid grid-cols-3 gap-4 mb-8">
        <ArticleBox date="15. august 2024">
          Vagusnervens rolle i regulering av dyp søvn og optimal hvile
        </ArticleBox>
        <ArticleBox date="15. august 2024">
          Søvnproblemer hos babyer og barn kan komme av stress
        </ArticleBox>
        <ArticleBox date="15. august 2024">
          Søvnproblemer i vår tid: Derfor får du ikke sove
        </ArticleBox>
        {toggleShowMore && (
          <ArticleBox date="15. august 2024">
            Derfor er dyp søvn viktig for kroppen
          </ArticleBox>
        )}
      </div>
      <Button onClick={handleClick}>
        {toggleShowMore ? "Vis mindre" : "Vis mer"}
      </Button>
    </section>
  );
};

export default ArticleSection;
