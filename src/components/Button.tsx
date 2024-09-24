import { ReactNode } from "react";

interface ButtonInterface {
  children: ReactNode;
  onClick?: () => void;
}

const Button = ({ children, onClick }: ButtonInterface) => {
  return (
    <button
      onClick={onClick}
      className="text-white bg-sky-500 hover:bg-sky-600 px-8 py-4 uppercase rounded-lg font-bold"
    >
      {children}
    </button>
  );
};

export default Button;
