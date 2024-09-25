import { ReactNode } from "react";

interface PosterBoxInterface {
  children: ReactNode;
  heading: string;
  icon: string;
}

const PosterBox = ({ children, heading, icon }: PosterBoxInterface) => {
  return (
    <div className="p-4 rounded-lg flex flex-col gap-4 justify-center text-center hover:bg-white/10 hover:cursor-pointer">
      <i className={"text-4xl text-sky-300 fa-solid fa-" + icon}></i>
      <h2 className="uppercase font-medium text-xl">{heading}</h2>
      <p>{children}</p>
    </div>
  );
};

export default PosterBox;
