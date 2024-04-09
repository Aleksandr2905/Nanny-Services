import { variables } from "../../stylesheet/variables";

export const customStyles = {
  container: (provided) => ({
    ...provided,
    width: "226px",
    height: "48px",
  }),

  control: (provided) => ({
    ...provided,
    width: "226px",
    height: "48px",
    border: "none",
    boxShadow: "none",
    cursor: "pointer",
    borderRadius: "14px",
    background: `${variables.color.accent}`,
    fontFamily: `${variables.fonts.medium}`,
    fontSize: "18px",
    fontWeight: "500",
    lineHeight: "1.11",
    transition: `${variables.animations.transition}`,
    "&, &:is(:hover, :focus)": {
      outline: "none",
      border: "none",
    },

    svg: {
      cursor: "pointer",
      color: `${variables.color.textMainPage}`,
    },
  }),

  menu: (provided) => ({
    ...provided,
    borderRadius: "14px",
    background: "#FFF",
    fontFamily: `${variables.fonts.medium}`,
    fontSize: "18px",
    fontWeight: "500",
    lineHeight: "1.11",
    boxShadow: "0 20px 69px 0 rgba(0, 0, 0, 0.07)",
  }),

  option: (provided, state) => ({
    ...provided,
    backgroundColor: "none",
    color: state.isSelected
      ? `${variables.color.textPrimary}`
      : `${variables.color.textSelect}`,
    "&:hover": {
      cursor: "pointer",
      color: `${variables.color.textPrimary}`,
    },
  }),

  placeholder: (provided) => ({
    ...provided,
    color: `${variables.color.textMainPage}`,
  }),

  singleValue: (provided) => ({
    ...provided,
    color: `${variables.color.textMainPage}`,
    fontFamily: `${variables.fonts.medium}`,
    fontSize: "18px",
    padding: "14px 10px",
    fontWeight: "500",
    lineHeight: "1.11",
  }),

  dropdownIndicator: (provided, state) => ({
    ...provided,
    padding: "14px",
    transform: state.selectProps.menuIsOpen ? "rotate(180deg)" : "rotate(0deg)",
  }),

  indicatorSeparator: (provided) => ({
    ...provided,
    display: "none",
  }),
};
