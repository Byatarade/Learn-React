const Input = ({ type, placeholder, value, onChange }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="w-full border px-3 py-2 rounded"
    />
  );
};

export default Input;