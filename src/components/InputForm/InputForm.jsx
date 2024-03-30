import sprite from "../../assets/icons/sprite.svg";
import * as s from "./InputForm.styled";

export const InputForm = ({
  name,
  placeholder,
  type,
  register,
  errors,
  onClick,
  showPassword,
}) => {
  return (
    <s.Wrapper>
      <s.Input
        name={name}
        type={type}
        placeholder={placeholder}
        {...register(name)}
      />
      <s.ErrorText>{errors[name]?.message}</s.ErrorText>
      {name === "password" && (
        <s.Eyes width="20" height="20" onClick={onClick}>
          <use
            href={`${sprite}#${showPassword ? "icon-eye" : "icon-eye-off"}`}
          />
        </s.Eyes>
      )}
    </s.Wrapper>
  );
};
