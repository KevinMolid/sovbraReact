import { ReactNode } from "react";

interface PosterSectionInterface {
  children: ReactNode;
  heading: string;
}

const PosterSection = ({ children, heading }: PosterSectionInterface) => {
  return (
    <section className="grid grid-cols-1 grid-rows-1">
      <img
        className="col-start-1 row-start-1 w-full h-full object-cover"
        src="src\assets\promobilder_sovnklinikken-3104-Edit.jpg"
        alt="background image"
      />
      <div className="col-start-1 row-start-1 bg-black/75"></div>
      <div className="grid grid-cols-3 text-white col-start-1 row-start-1 p-24 gap-4">
        <h1 className="text-4xl font-medium uppercase text-center col-start-1 row-start-1 col-span-3">
          {heading}
        </h1>
        {children}
      </div>
    </section>
  );
};

export default PosterSection;
