import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "../../helpers/validation";
import { useForm } from "react-hook-form";
import { useState } from "react";
import * as s from "../Registration/Registration.styled";
import sprite from "../../assets/icons/sprite.svg";

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
        </s.InputWrap>
        <s.Btn type="submit">Log In</s.Btn>
      </s.Forma>
    </s.Wrapper>
  );
};
