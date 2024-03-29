import { yupResolver } from "@hookform/resolvers/yup";
import { registrationSchema } from "../../helpers/validation";
import { useForm } from "react-hook-form";
import { useState } from "react";
import * as s from "./Registration.styled";
import sprite from "../../assets/icons/sprite.svg";
import { InputForm } from "../InputForm/InputForm";

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
    setShowPassword((prevState) => !prevState);
  };

  return (
    <s.Wrapper>
      <s.Title>Registration</s.Title>
      <s.Text>
        Thank you for your interest in our platform! In order to register, we
        need some information. Please provide us with the following information.
      </s.Text>
      <s.Forma onSubmit={handleSubmit(onSubmit)}>
        {/* <s.InputWrap>
          <s.Input type="text" placeholder="Name" {...register("username")} />
          <s.ErrorText>{errors.username?.message}</s.ErrorText>
        </s.InputWrap>
        <s.InputWrap>
          <s.Input type="text" placeholder="Email" {...register("email")} />
          <s.ErrorText>{errors.email?.message}</s.ErrorText>
        </s.InputWrap>
        <s.InputWrap>
          <s.Input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            {...register("password")}
          />
          {showPassword ? (
            <s.Eyes
              width="20"
              height="20"
              onClick={() => togglePasswordVisibility()}
            >
              <use href={`${sprite}#icon-eye`} />
            </s.Eyes>
          ) : (
            <s.Eyes
              width="20"
              height="20"
              onClick={() => togglePasswordVisibility()}
            >
              <use href={`${sprite}#icon-eye-off`} />
            </s.Eyes>
          )}
          <s.ErrorText>{errors.password?.message}</s.ErrorText>
        </s.InputWrap> */}
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
        />
        <s.Btn type="submit">Sign Up</s.Btn>
      </s.Forma>
    </s.Wrapper>
  );
};
