interface ArticleInterface {
  children: string;
  date: string;
}

const ArticleBox = ({ children, date }: ArticleInterface) => {
  return (
    <article className="bg-white rounded-lg">
      <img className="rounded-t-lg" src="src\assets\sover-scaled.jpeg" alt="" />
      <div className="p-8 border-b-2">
        <h3 className="text-2xl uppercase font-medium mb-6">{children}</h3>
        <button className="font-medium">
          Les mer <i className="fa-solid fa-chevron-right"></i>
        </button>
      </div>
      <p className="px-8 py-4">{date}</p>
    </article>
  );
};

export default ArticleBox;
