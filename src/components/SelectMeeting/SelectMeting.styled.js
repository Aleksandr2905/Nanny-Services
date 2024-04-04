import { variables } from "../../stylesheet/variables";

export const customStyles = ({ error }) => ({
  container: (provided) => ({
    ...provided,
    width: "100%",
  }),

  control: (provided) => ({
    ...provided,
    height: "52px",
    borderRadius: "12px",
    border: `1px solid ${variables.color.borderInput}`,
    color: `${variables.color.textPrimary}`,
    fontFamily: `${variables.fonts.regular}`,
    fontSize: "16px",
    fontWeight: "400",
    lineHeight: "1.25",
    transition: `${variables.animations.transition}`,
    padding: "10px 18px",

    input: {
      display: "none",
    },

    svg: {
      cursor: "pointer",
      color: `${variables.color.textPrimary}`,
    },

    "&:hover": {
      boxShadow: `0px 4px 14px 0px ${variables.color.borderInput}`,
    },
  }),

  menu: (provided) => ({
    ...provided,
    marginLeft: "90px",
    width: "60%",
    height: "180px",
    borderRadius: "12px",
    background: "#FFF",
    boxShadow: "0px 20px 69px 0px rgba(0, 0, 0, 0.3)",
  }),

  option: (provided, state) => ({
    ...provided,
    backgroundColor: "none",
    color: state.isSelected
      ? `${variables.color.textPrimary}`
      : `${variables.color.textSelect}`,
    "&:hover": {
      color: `${variables.color.textPrimary}`,
    },
    width: "max-content",
    padding: "6px 0",
    marginLeft: "auto",
    marginRight: "auto",
    fontFamily: `${variables.fonts.medium}`,
    fontSize: "16px",
    fontWeight: "500",
    lineHeight: "1.25",

    ...(state.isDisabled && {
      pointerEvents: "none",
    }),

    ...(state.data &&
      state.data.value === "meeting_time_header" && {
        fontFamily: `${variables.fonts.medium}`,
        color: `${variables.color.textPrimary}`,
        fontSize: "16px",
        fontWeight: "500",
        lineHeight: "1.5",
      }),
  }),

  placeholder: (provided) => ({
    ...provided,
    color: `${variables.color.textPrimary}`,
  }),

  singleValue: (provided) => ({
    ...provided,
    color: `${variables.color.textPrimary}`,
    fontFamily: `${variables.fonts.regular}`,
    fontSize: "16px",
    fontWeight: "400",
    lineHeight: "1.25",
  }),

  indicatorSeparator: (provided) => ({
    ...provided,
    display: "none",
  }),

  dropdownIndicator: (provided) => ({
    ...provided,
    padding: "0",
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
  }),
});
