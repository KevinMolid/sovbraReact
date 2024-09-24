const ReviewSection = () => {
  return (
    <section className="flex flex-col gap-4 justify-center text-center px-24 py-24 bg-sky-200">
      <h2 className="text-4xl uppercase pb-4">Hva sier pasientene våre?</h2>
      <div className="p-24 bg-white">
        <h3 className="font-semibold text-lg">June Pune</h3>
        <small>2023-08-31</small>
        <p>
          Jeg begynte hos Laila for noe helt annet enn søvn (som jeg ikke sliter
          med). En skulder som var vond i årevis ble bra etter 4 behandlinger!
          Og jeg hadde gått til fysio og osteopat hundre ganger. Legen sa jeg
          måtte leve med det, at det var normalt med slitasje. Så jeg hadde ikke
          troa, men nå er det ett år siden og jeg er fortsatt bra! Egentlig gikk
          jeg dit for å balansere hormoner, og det klarte hun også. Jeg er
          ganske frelst på denne behandlingsformen, og Laila er fantastisk!
        </p>
      </div>
      <p>
        <strong>Google</strong> samlet vurdering <strong>4.9</strong> av 5,
        ifølge <strong>29 anmeldelser</strong>
      </p>
    </section>
  );
};

export default ReviewSection;
