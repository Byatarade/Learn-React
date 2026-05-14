const Button = ({ children, variant = "bg-blue-500" }) => {
  return (
    <button
      className={`w-full py-2 rounded text-white ${variant}`}
    >
      {children}
    </button>
  );
};

export default Button;