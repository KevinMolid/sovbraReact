import Button from "./Button";

const Hero = () => {
  return (
    <section className="grid grid-cols-1 grid-rows-1">
      <img
        className="col-start-1 row-start-1"
        src="src\assets\iphone.jpeg"
        alt="Kvinne ligger i sengen og ser på telefonen sin"
      />
      <div className="bg-black/50 w-full h-full col-start-1 row-start-1"></div>
      <article className="col-start-1 row-start-1 text-white flex flex-col justify-center px-24 gap-2 items-start">
        <h1 className="uppercase font-bold text-5xl w-10/12 mb-4 leading-tight">
          Medikamentfri behandling for søvnproblemer
        </h1>
        <p className="text-xl font-medium w-6/12">
          På Søvnklinikken har vi lang erfaring og tar dine søvnutfordringer på
          alvor.
        </p>
        <p className="text-xl font-medium w-6/12 mb-8">
          Vi har kort ventetid og du trenger ikke henvisning.
        </p>
        <Button>Bestill time</Button>
      </article>
    </section>
  );
};

export default Hero;
