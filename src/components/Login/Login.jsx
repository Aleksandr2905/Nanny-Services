import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "../../helpers/validation";
import { useForm } from "react-hook-form";
import { useState } from "react";
import * as s from "../Registration/Registration.styled";
import { InputForm } from "../InputForm/InputForm";

export const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(loginSchema),
  });

  const onSubmit = handleSubmit((data) => {
    console.log(data);
    reset();
  });

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  return (
    <s.Wrapper>
      <s.Title>Log In</s.Title>
      <s.Text>
        Welcome back! Please enter your credentials to access your account and
        continue your babysitter search.
      </s.Text>
      <s.Forma onSubmit={onSubmit}>
        <InputForm
          name="email"
          type="text"
          placeholder="Email"
          register={register}
          errors={errors}
        />
        <InputForm
          name="password"
          type={showPassword ? "text" : "password"}
          placeholder="Password"
          register={register}
          errors={errors}
          onClick={togglePasswordVisibility}
          showPassword={showPassword}
        />
        <s.Btn type="submit">Log In</s.Btn>
      </s.Forma>
    </s.Wrapper>
  );
};
