import Input from "../atoms/Input";

const InputField = ({ label, type, placeholder, value, onChange }) => {
  return (
    <div className="flex flex-col gap-1">
      <label className="text-sm">{label}</label>
      <Input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default InputField;