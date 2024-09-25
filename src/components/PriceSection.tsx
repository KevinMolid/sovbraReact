const PriceSection = () => {
  return (
    <section className="p-24 grid grid-cols-2 gap-10">
      <div>
        <div className="grid grid-cols-2 mb-12">
          <div className="flex flex-col text-center gap-4">
            <i className="fa-regular fa-clock text-4xl text-sky-400"></i>
            <h2 className="uppercase font-medium text-2xl">
              Første konsultasjon for nye pasienter
            </h2>
            <ul>
              <li>Voksen: 1350,-</li>
              <li>Barn / student: 1125,-</li>
              <li>Varighet: 45 minutter</li>
            </ul>
          </div>
          <div className="flex flex-col text-center gap-4">
            <i className="fa-regular fa-user text-4xl text-sky-400"></i>
            <h2 className="uppercase font-medium text-2xl">
              Ordinær konsultasjon
            </h2>
            <ul>
              <li>Voksen: 900,-</li>
              <li>Barn / student: 750,-</li>
              <li>Varighet: 30 minutter</li>
            </ul>
          </div>
        </div>
        <p className="font-bold mb-4">
          Vi tilbyr betaling med kontant, bankkort og Vipps. Prisen gjelder pr.
          konsultasjon.
        </p>
        <p>
          Avbestilling må skje senest 24 timer før avtalt tid. Senere
          avbestilling eller uteblitt oppmøte vil bli belastet med full pris.{" "}
        </p>
      </div>
      <img
        src="src\assets\klinikken.png"
        alt="Bilde fra innsiden av Klinikken"
      />
    </section>
  );
};

export default PriceSection;
