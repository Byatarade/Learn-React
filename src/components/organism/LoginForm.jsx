import { useState } from "react";
import InputField from "../molecules/InputField";
import Button from "../atoms/Button";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ email, password });
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <h1 className="text-xl font-bold text-center">Login Yaa</h1>

      <InputField
        label="Email"
        type="email"
        placeholder="Masukkan email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <InputField
        label="Password"
        type="password"
        placeholder="Masukkan password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <Button>Login</Button>
    </form>
  );
};

export default LoginForm;