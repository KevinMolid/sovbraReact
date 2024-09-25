import PosterBox from "./PosterBox";

const PosterSection = () => {
  return (
    <section className="grid grid-cols-1 grid-rows-1">
      <img
        className="col-start-1 row-start-1 w-full"
        src="src\assets\promobilder_sovnklinikken-3104-Edit.jpg"
        alt=""
      />
      <div className="col-start-1 row-start-1 bg-black/75"></div>
      <div className="grid grid-cols-3 text-white col-start-1 row-start-1 p-24 gap-4">
        <h1 className="text-4xl font-medium uppercase text-center col-start-1 row-start-1 col-span-3">
          SØVNPROBLEMER VI JOBBER MED
        </h1>
        <PosterBox heading="Søvnløshet / insomni" icon="eye">
          <p>
            Søvnløshet (Insomni) kjennetegnes av problemer med å sovne, hyppige
            oppvåkninger på natten, tidlig oppvåkning om morgenen, samt redusert
            funksjonsevne på dagtid.
          </p>
        </PosterBox>
        <PosterBox heading="Døgnrytme" icon="cloud-moon">
          <p>
            Døgnrytmeforstyrrelser oppstår når kroppens indre klokke ikke er i
            takt med det ytre miljøet, noe som fører til utfordringer med riktig
            timing av søvnen.
          </p>
        </PosterBox>
        <PosterBox heading="Småbarn" icon="baby-carriage">
          <p>
            Søvn er avgjørende for barns utvikling, deres psykiske helse,
            atferd, samt evnen til læring og konsentrasjon.
          </p>
        </PosterBox>
        <PosterBox heading="snorking / søvnapné" icon="wind">
          <p>
            Både snorking og søvnapné (pustestopp) oppstår ved helt eller delvis
            blokkering av luftveiene under søvn.
          </p>
        </PosterBox>
        <PosterBox heading="Bevegelseforstyrrelser" icon="shoe-prints">
          <p>
            Urolige bein eller muskelspenninger kan gjøre det utfordrende å
            sovne, bidra til oppvåkninger eller urolig søvn.
          </p>
        </PosterBox>
        <PosterBox heading="Parasomnier" icon="magnifying-glass">
          <p>
            Parasomnier er unormale atferdsmønstre eller fenomener som oppstår
            under søvn, som natteskrekk, søvngjengeri, og mareritt.
          </p>
        </PosterBox>
      </div>
    </section>
  );
};

export default PosterSection;
