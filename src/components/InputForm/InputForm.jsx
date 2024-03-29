import sprite from "../../assets/icons/sprite.svg";

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
    <div>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        {...register(name)}
        // $errors={!!errors[name]}
      />
      <p>{errors[name]?.message}</p>
      {name === "password" && (
        <>
          {showPassword ? (
            <svg width="20" height="20" onClick={() => onClick()}>
              <use href={`${sprite}#icon-eye`} />
            </svg>
          ) : (
            <svg width="20" height="20" onClick={() => onClick()}>
              <use href={`${sprite}#icon-eye-off`} />
            </svg>
          )}
        </>
      )}
    </div>
  );
};
