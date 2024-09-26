import HeaderSection from "../components/HeaderSection";
import CtaSection from "../components/CtaSection";
import PosterSection from "../components/PosterSection";
import PosterBox from "../components/PosterBox";
import TextSection from "../components/TextSection";

const Treatment = () => {
  return (
    <main>
      <HeaderSection>Behandling for søvnproblemer</HeaderSection>
      <PosterSection heading="SØVNPROBLEMER VI JOBBER MED">
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
      </PosterSection>
      <TextSection></TextSection>
      <CtaSection />
    </main>
  );
};

export default Treatment;
