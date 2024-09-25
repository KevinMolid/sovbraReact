import { ReactNode } from "react";

interface BoxInterface {
  icon: string;
  heading: string;
  children: ReactNode;
  img?: string;
}

const Box = ({ children, icon, heading, img }: BoxInterface) => {
  return (
    <article
      className={
        img
          ? "h-72 bg-slate-600 text-white grid grid-col-1 grid-row-1"
          : "h-72 bg-sky-200 grid grid-col-1 grid-row-1"
      }
    >
      {img && (
        <img
          className="col-start-1 row-start-1 h-72 w-full object-cover object-bottom"
          src={img}
          alt="background image"
        />
      )}
      {img && <div className="bg-black/50 col-start-1 row-start-1"></div>}
      <div className="flex flex-col justify-around py-10 items-center col-start-1 row-start-1">
        <i className={"text-4xl fa-solid fa-" + icon}></i>
        <h2 className="uppercase font-medium text-3xl">{heading}</h2>
        {children}
      </div>
    </article>
  );
};

export default Box;
