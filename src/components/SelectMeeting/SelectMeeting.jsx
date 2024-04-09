import Select, { components } from "react-select";
import { forwardRef } from "react";
import { useState } from "react";
import { customStyles } from "./SelectMeting.styled";
import { optionsMeeting } from "../../helpers/data";
import { Indicator } from "./Indicator/Indicator";

const { DropdownIndicator } = components;

const CustomDropdownIndicator = (props) => {
  return (
    <DropdownIndicator {...props}>
      <Indicator onToggleMenu={props.selectProps.onToggleMenu} />
    </DropdownIndicator>
  );
};

export const SelectMeeting = forwardRef(
  ({ onChange, onBlur, disabled, name, $error }, ref) => {
    const [isMenuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
      setMenuOpen(!isMenuOpen);
    };

    const handleChange = (selectedOption) => {
      if (selectedOption !== null) {
        onChange(selectedOption.value);
        setMenuOpen(false);
      }
    };

    return (
      <>
        <Select
          ref={ref}
          onBlur={onBlur}
          name={name}
          isDisabled={disabled}
          isSearchable={false}
          options={optionsMeeting}
          placeholder={"00 : 00"}
          styles={customStyles({ error: $error })}
          menuIsOpen={isMenuOpen}
          onMenuOpen={toggleMenu}
          onMenuClose={toggleMenu}
          onChange={handleChange}
          components={{
            DropdownIndicator: CustomDropdownIndicator,
          }}
        />
      </>
    );
  }
);
