import Button from "./Button";

const CtaSection = () => {
  return (
    <section className="grid grid-cols-1 grid-rows-1 h-96">
      <img
        className="row-start-1 col-start-1 w-full h-full object-cover"
        src="src\assets\sover-scaled.jpeg"
        alt=""
      />
      <div className="row-start-1 col-start-1 bg-slate-900/50"></div>
      <div className="row-start-1 col-start-1 flex flex-col p-24 gap-6 text-center text-white justify-center">
        <h2 className="text-4xl uppercase font-semibold">
          Har du søvnproblemer?
        </h2>
        <p>
          Ta kontakt med oss for en uforpliktende samtale, eller for
          timebestilling.
        </p>
        <div className="flex gap-6 justify-center mt-4">
          <Button>Kontakt oss</Button>
          <Button>Bestill time</Button>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
