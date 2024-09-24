import { ReactNode } from "react";

interface BoxInterface {
  children: ReactNode;
}

const Box = ({ children }: BoxInterface) => {
  return <div>{children}</div>;
};

export default Box;
