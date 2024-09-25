import { ReactNode } from "react";

interface BoxSectionInterface {
  children: ReactNode;
}

const BoxSection = ({ children }: BoxSectionInterface) => {
  return <section className="grid grid-cols-3">{children}</section>;
};

export default BoxSection;
