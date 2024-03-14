import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "../../helpers/validation";
import { useForm } from "react-hook-form";
import { useState } from "react";
import {
  Btn,
  ErrorText,
  Eyes,
  Forma,
  Input,
  InputWrap,
  Text,
  Title,
  Wrapper,
} from "../Registration/Registration.styled";
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
    <Wrapper>
      <Title>Log In</Title>
      <Text>
        Welcome back! Please enter your credentials to access your account and
        continue your babysitter search.
      </Text>
      <Forma onSubmit={onSubmit}>
        <InputWrap>
          <Input type="text" placeholder="Email" {...register("email")} />
          <ErrorText>{errors.email?.message}</ErrorText>
        </InputWrap>
        <InputWrap>
          <Input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            {...register("password")}
          />
          {showPassword ? (
            <Eyes
              width="20"
              height="20"
              onClick={() => togglePasswordVisibility()}
            >
              <use href={`${sprite}#icon-eye`} />
            </Eyes>
          ) : (
            <Eyes
              width="20"
              height="20"
              onClick={() => togglePasswordVisibility()}
            >
              <use href={`${sprite}#icon-eye-off`} />
            </Eyes>
          )}
          <ErrorText>{errors.password?.message}</ErrorText>
        </InputWrap>
        <Btn type="submit">Log In</Btn>
      </Forma>
    </Wrapper>
  );
};
