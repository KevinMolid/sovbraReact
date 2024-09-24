import Button from "./Button";

const BoxSection = () => {
  return (
    <section className="grid grid-cols-3">
      <article className="h-72 bg-sky-200 flex flex-col justify-around py-10 items-center">
        <i className="fa-solid fa-comments text-4xl"></i>
        <h2 className="uppercase font-medium text-3xl">Kontakt oss</h2>
        <div className="flex flex-col text-center">
          <p>
            <i className="fa-solid fa-phone"></i> (+47) 22 60 18 00
          </p>
          <p>
            <i className="fa-solid fa-envelope"></i> post@sovnklinikken.no
          </p>
        </div>
      </article>

      <article className="h-72 bg-slate-600 text-white grid grid-col-1 grid-row-1">
        <img
          className="col-start-1 row-start-1 h-72 w-full object-cover object-bottom"
          src="src\assets\adresse.jpg"
          alt="bygning"
        />
        <div className="bg-black/50 col-start-1 row-start-1"></div>
        <div className="flex flex-col justify-around py-10 items-center col-start-1 row-start-1">
          <i className="fa-solid fa-location-dot text-4xl"></i>
          <h2 className="uppercase font-medium text-3xl">Vår adresse</h2>
          <p>Vi holder til i Rådhusgata 20 i Oslo sentrum.</p>
          <Button>Se på kart</Button>
        </div>
      </article>

      <article className="h-72 bg-sky-200 flex flex-col justify-around py-10 items-center">
        <i className="fa-solid fa-calendar-days text-4xl"></i>
        <h2 className="uppercase font-medium text-3xl">Timebestilling</h2>
        <p>Se våre ledige timer.</p>
        <Button>Bestill time</Button>
      </article>
    </section>
  );
};

export default BoxSection;
