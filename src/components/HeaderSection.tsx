interface HeaderInterface {
  children: string;
}

const HeaderSection = ({ children }: HeaderInterface) => {
  return (
    <section className="grid grid-cols-1 grid-rows-1 h-72">
      <img
        className="col-start-1 row-start-1 object-cover w-full h-full"
        src="src\assets\adresse.jpg"
        alt=""
      />
      <div className="col-start-1 row-start-1 bg-black/50 w-full h-full"></div>
      <div className="col-start-1 row-start-1 flex flex-col justify-center">
        <h1 className="text-5xl font-bold uppercase text-center text-white">
          {children}
        </h1>
      </div>
    </section>
  );
};

export default HeaderSection;
