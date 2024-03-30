import { yupResolver } from "@hookform/resolvers/yup";
import { registrationSchema } from "../../helpers/validation";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { InputForm } from "../InputForm/InputForm";
import * as s from "./Registration.styled";

export const Registration = ({ onCloseModal }) => {
  const [showPassword, setShowPassword] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(registrationSchema),
  });

  const onSubmit = (userData) => {
    console.log(userData);
    reset();
    onCloseModal();
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <s.Wrapper>
      <s.Title>Registration</s.Title>
      <s.Text>
        Thank you for your interest in our platform! In order to register, we
        need some information. Please provide us with the following information.
      </s.Text>
      <s.Forma onSubmit={handleSubmit(onSubmit)}>
        <InputForm
          name="username"
          type="text"
          placeholder="Name"
          register={register}
          errors={errors}
        />
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
        <s.Btn type="submit">Sign Up</s.Btn>
      </s.Forma>
    </s.Wrapper>
  );
};
