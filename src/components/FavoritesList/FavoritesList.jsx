import { useSelector } from "react-redux";
import { sortFavoritesArray } from "../../redux/favorites/selectors";
import { SelectFilter } from "../SelectFilter/SelectFilter";
import { NanniesItem } from "../NanniesItem/NanniesItem";
import * as s from "./FavoritesList.styled";
import child from "../../assets/image/child.png";

export const FavoritesList = () => {
  const filterFavorites = useSelector(sortFavoritesArray);

  return (
    <>
      {filterFavorites.length <= 0 ? (
        <s.ImgWrap>
          <s.Img src={child} alt="child" />
        </s.ImgWrap>
      ) : (
        <>
          <SelectFilter typeSelect="Favorites" />
          <s.Wrapper>
            {filterFavorites.map((favorite, index) => (
              <NanniesItem key={index} nannies={favorite} />
            ))}
          </s.Wrapper>
        </>
      )}
    </>
  );
};
