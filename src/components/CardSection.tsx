import { ReactNode } from "react";

interface CardSectionInterface {
  children: ReactNode;
}

const CardSection = ({ children }: CardSectionInterface) => {
  return (
    <section className="px-24 py-12 grid grid-cols-2 gap-x-8 gap-y-4">
      {children}
    </section>
  );
};

export default CardSection;
