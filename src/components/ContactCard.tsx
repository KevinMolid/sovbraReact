interface ContactCardInterface {
  name: string;
  mail: string;
  phone: string;
  img: string;
}

const ContactCard = ({ name, mail, phone, img }: ContactCardInterface) => {
  return (
    <article className="bg-slate-100 p-2 grid grid-cols-[160px_auto]">
      <img className="h-56 object-cover" src={img} alt="" />
      <div className="flex flex-col gap-4 justify-center p-6">
        <h1 className="uppercase font-medium text-xl">{name}</h1>
        <p>{mail}</p>
        <div className="flex gap-4 items-center">
          <i className="fa-solid fa-mobile-screen-button text-4xl text-sky-500"></i>
          <div>
            <p>SMS</p>
            <p>(+47) {phone}</p>
          </div>
        </div>
      </div>
    </article>
  );
};

export default ContactCard;
