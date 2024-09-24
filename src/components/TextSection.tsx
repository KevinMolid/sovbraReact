const TextSection = () => {
  return (
    <section className="grid grid-cols-2">
      <div className="px-24 py-12 flex flex-col gap-4">
        <h2 className="text-2xl uppercase">Derfor er søvn viktig</h2>
        <p className="mb-4">
          Søvn er avgjørende for god helse og reduserer risikoen for alvorlige
          sykdommer. Søvnen styrker immunsystemet, hjelper kroppen med å
          reparere celler, og bidrar til å opprettholde hormonbalansen. Under
          dyp søvn bearbeider hjernen minner og styrker hukommelsen. I tillegg
          bidrar søvn til å holde hjertet sunt, redusere stress og stabilisere
          blodsukkeret, noe som legger grunnlaget for et langt og sykdomsfritt
          liv.
        </p>
        <h2 className="text-2xl uppercase">
          Kroppslige plager kan påvirke søvn
        </h2>
        <p>
          Søvnproblemer kan være en indikasjon på at kroppen ikke fungerer
          optimalt. Alt fra stress og tankekjør til fordøyelsesproblemer og
          hormonelle forandringer kan bidra til dårlig søvn. Vår tilnærming
          fokuserer på å identifisere og behandle de underliggende årsakene til
          søvnproblemene. Dette kan bidra til å fremme en mer naturlig og
          uforstyrret søvn. En kropp som er i balanse, har bedre forutsetninger
          for å oppnå god søvnkvalitet om natten.
        </p>
      </div>
      <img
        className="h-full object-cover object-right"
        src="src\assets\promobilder_sovnklinikken-3104-Edit.jpg"
        alt="promobilde"
      />
      <img
        className="h-full object-cover object-right"
        src="src\assets\promobilder_sovnklinikken-3220-Edit-kopi-2.jpg"
        alt="promobilde"
      />
      <div className="px-24 py-12 flex flex-col gap-4">
        <h2 className="text-2xl uppercase">
          Behandling for søvnproblemer uten medisiner
        </h2>
        <p className="mb-4">
          På Søvnklinikken tar vi søvnproblemer på alvor. Vi vet at god søvn er
          nøkkelen til bedre helse og økt livskvalitet. Gjennom skreddersydd og
          medisinfri behandling legger vi til rette for at du finner tilbake til
          en naturlig søvn. Vår tilnærming inkluderer fysisk behandling som
          hjelper kroppen å slappe av, samt personlig veiledning om hvordan du
          kan forbedre søvnkvaliteten. Les mer om hvordan vi jobber med
          behandling for søvnproblemer her.
        </p>
        <h2 className="text-2xl uppercase">
          FOR ALLE ALDRE OG SØVNUTFORDRINGER
        </h2>
        <p>
          Vi jobber med pasienter i alle aldre med ulike typer søvnproblemer. Vi
          tilpasser behandlingen direkte til dine behov og utfordringer. Våre
          terapeuter har bred erfaring med alt fra søvnløshet og oppvåkninger
          til snorking og nattskrekk. Les om søvnproblemene vi har erfaring med
          her.
        </p>
      </div>
    </section>
  );
};

export default TextSection;
