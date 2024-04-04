import { useDispatch, useSelector } from "react-redux";
import sortNannies from "../../redux/nannies/selectors";
import { NanniesItem } from "../NanniesItem/NanniesItem";
import * as s from "./NanniesList.styled";
import { SelectFilter } from "../SelectFilter/SelectFilter";
import { setCurrentPage } from "../../redux/nannies/reducer";

export const NanniesList = () => {
  const dispatch = useDispatch();
  const filterNannies = useSelector(sortNannies);

  return (
    <>
      <SelectFilter />
      <s.Wrapper>
        {filterNannies?.map((nannies, index) => (
          <NanniesItem key={index} nannies={nannies} />
        ))}
      </s.Wrapper>
      {filterNannies.length < 27 && (
        <s.Button
          onClick={() => {
            dispatch(setCurrentPage());
          }}
        >
          Load more
        </s.Button>
      )}
    </>
  );
};
