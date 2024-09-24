interface ButtonInterface {
  children: string;
}

const Button = ({ children }: ButtonInterface) => {
  return (
    <button className="text-white bg-sky-500 hover:bg-sky-600 px-8 py-4 uppercase rounded-lg font-bold">
      {children}
    </button>
  );
};

export default Button;
