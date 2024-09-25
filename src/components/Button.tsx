import { ReactNode } from "react";

interface ButtonInterface {
  type?: string;
  children: ReactNode;
  onClick?: () => void;
}

const Button = ({ children, onClick, type = "primary" }: ButtonInterface) => {
  return (
    <button
      onClick={onClick}
      className={
        type === "primary"
          ? "text-white bg-sky-500 hover:bg-sky-600 px-8 py-4 uppercase rounded-lg font-bold"
          : "text-black bg-white hover:bg-slate-100 px-8 py-4 uppercase rounded-lg font-bold"
      }
    >
      {children}
    </button>
  );
};

export default Button;
