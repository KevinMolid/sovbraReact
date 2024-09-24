import ArticleBox from "./ArticleBox";

const ArticleSection = () => {
  return (
    <section className="px-24 py-12 bg-slate-100">
      <h2 className="text-4xl uppercase mb-8">Artikler</h2>
      <div className="grid grid-cols-3 gap-4">
        <ArticleBox date="15. august 2024">
          Vagusnervens rolle i regulering av dyp søvn og optimal hvile
        </ArticleBox>
        <ArticleBox date="15. august 2024">
          Søvnproblemer hos babyer og barn kan komme av stress
        </ArticleBox>
        <ArticleBox date="15. august 2024">
          Søvnproblemer i vår tid: Derfor får du ikke sove
        </ArticleBox>
        <ArticleBox date="15. august 2024">
          Derfor er dyp søvn viktig for kroppen
        </ArticleBox>
      </div>
    </section>
  );
};

export default ArticleSection;
