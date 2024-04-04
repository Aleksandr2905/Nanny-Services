import Select from "react-select";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { options } from "../../helpers/data";
import { setFavoriteFilter, setFilter } from "../../redux/filter/reducer";
import * as s from "./SelectFilter.styled";
import { customStyles } from "./SelectFilterCustomStyle";

export const SelectFilter = ({ typeSelect }) => {
  const [selectedOption, setSelectedOption] = useState(options[6]);
  const dispatch = useDispatch();

  const handleChange = (selected) => {
    setSelectedOption(selected);
  };

  useEffect(() => {
    dispatch(
      typeSelect === "Favorites"
        ? setFavoriteFilter(selectedOption)
        : setFilter(selectedOption)
    );
  }, [dispatch, typeSelect, selectedOption]);

  return (
    <s.Wrapper>
      <s.Title>Filters</s.Title>
      <Select
        options={options}
        styles={customStyles}
        value={selectedOption}
        onChange={handleChange}
      />
    </s.Wrapper>
  );
};
