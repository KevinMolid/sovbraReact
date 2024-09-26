import HeaderSection from "../components/HeaderSection";
import PosterSection from "../components/PosterSection";
import PosterBox from "../components/PosterBox";

const Problems = () => {
  return (
    <main>
      <HeaderSection>Søvnproblemer</HeaderSection>
      <PosterSection heading="Vanlige årsaker til søvnproblemer">
        <PosterBox heading="Stress" icon="chart-column">
          <p>
            Stresshormonet kortisol gjør oss våken og fokusert. Når det er for
            mye av dette blir det vanskelig å sove.
          </p>
        </PosterBox>
        <PosterBox heading="Pust" icon="wind">
          <p>
            Tett nese og problemer med muskulatur og slimhinner i halsen kan
            redusere oksygeninntaket og føre til dårlig søvnkvalitet.
          </p>
        </PosterBox>
        <PosterBox heading="Hormoner" icon="street-view">
          <p>
            Overgangsalder, menstruasjonsplager, graviditet, stoffskifte og
            andre hormonelle forandringer kan forstyrre søvnmønsteret vårt.
          </p>
        </PosterBox>
        <PosterBox heading="Mage / Tarm" icon="poop">
          <p>
            Problemer i fordøyelsen og organsystemet kan føre til oppvåkninger
            og uro i kroppen.
          </p>
        </PosterBox>
        <PosterBox heading="Immunforsvar" icon="viruses">
          <p>
            Et overaktivt immunsystem skaper uro i kroppen. Mange kan få
            problemer med søvnen i etterkant av store infeksjoner.
          </p>
        </PosterBox>
        <PosterBox heading="Muskulatur" icon="person-walking">
          <p>
            Spenninger i kroppen kan gjøre det vanskelig å slappe av og finne
            rett sovestilling.
          </p>
        </PosterBox>
        <PosterBox heading="Tankekjør" icon="brain">
          <p>
            Når tankene spinner ukontrollert klarer ikke hjernen å gå over i
            nattmodus.
          </p>
        </PosterBox>
        <PosterBox heading="Koffein" icon="mug-hot">
          <p>
            Kaffe, brus og te med koffein gjør at vi bruker lengre tid på å
            sovne og at vi får mindre dyp søvn.
          </p>
        </PosterBox>
        <PosterBox heading="Skjerm" icon="mobile-screen-button">
          <p>
            Hjernen må jobbe mye for å prosessere all informasjon som kommer fra
            skjermen. Blått lys fra skjermer kan også lure hjernen vår til å tro
            at det er dag.
          </p>
        </PosterBox>
      </PosterSection>
    </main>
  );
};

export default Problems;
