import * as s from "./NanniesItem.styled";
import sprite from "../../assets/icons/sprite.svg";
import { useDispatch, useSelector } from "react-redux";
import { selectIsAuth } from "../../redux/auth/selectors";
import { selectFavorite } from "../../redux/favorites/selectors";
import {
  addFavoriteNannies,
  removeFavoriteNannies,
} from "../../redux/favorites/operations";
import { toast } from "react-toastify";
import { variables } from "../../stylesheet/variables";
import { Reviews } from "../Reviews/Reviews";
import { useState } from "react";

export const NanniesItem = ({ nannies }) => {
  const dispatch = useDispatch();
  const isAuth = useSelector(selectIsAuth);
  const favorites = useSelector(selectFavorite);
  const [showReviews, setShowReviews] = useState(true);
  const birthday = new Date(nannies.birthday);
  const currentDate = new Date();
  const age = Math.floor(
    (currentDate - birthday) / (1000 * 60 * 60 * 24 * 365.25)
  );

  const isFavorite = isAuth
    ? favorites?.some((favorite) => favorite.name === nannies.name)
    : false;

  const toggleFavorite = (nannies) => {
    if (isAuth) {
      if (isFavorite) {
        dispatch(removeFavoriteNannies(nannies));
      } else {
        dispatch(addFavoriteNannies(nannies));
      }
    } else {
      toast.warn("This functionality is available only to authorized users");
    }
  };

  return (
    <s.ItemWrapper>
      <s.ImgWrap>
        <s.IconOnline width={14} height={14}>
          <use href={`${sprite}#icon-online`} />
        </s.IconOnline>
        <s.Img src={nannies.avatar_url} alt={nannies.name} />
      </s.ImgWrap>
      <s.Descriptions>
        <s.UpperBlock>
          <s.NameWrap>
            <s.Title>Nanny</s.Title>
            <s.Name>{nannies.name}</s.Name>
          </s.NameWrap>
          <s.UpperRight>
            <s.Wrap>
              <s.IconMap width={16} height={16}>
                <use href={`${sprite}#icon-map`} />
              </s.IconMap>
              <s.TextRight>{nannies.location}</s.TextRight>
            </s.Wrap>
            <s.IconLine width={16} height={16}>
              <use href={`${sprite}#icon-line`} />
            </s.IconLine>
            <s.Wrap>
              <s.IconStar width={16} height={16}>
                <use href={`${sprite}#icon-star`} />
              </s.IconStar>
              <s.TextRight>Rating: {nannies.rating.toFixed(1)}</s.TextRight>
            </s.Wrap>
            <s.IconLine width={16} height={16}>
              <use href={`${sprite}#icon-line`} />
            </s.IconLine>
            <s.Wrap>
              <s.TextRight>
                Price / 1 hour: <span>{nannies.price_per_hour}$</span>
              </s.TextRight>
            </s.Wrap>
            <s.BtnHeart type="button" onClick={() => toggleFavorite(nannies)}>
              <svg
                width={24}
                height={24}
                style={{
                  stroke: isFavorite
                    ? `${variables.color.accent}`
                    : `${variables.color.textPrimary}`,
                  fill: isFavorite ? `${variables.color.accent}` : "none",
                }}
              >
                <use href={`${sprite}#icon-heart`} />
              </svg>
            </s.BtnHeart>
          </s.UpperRight>
        </s.UpperBlock>
        <s.DescribeList>
          <s.DescribeItem>
            Age: <s.Age>{age}</s.Age>
          </s.DescribeItem>
          <s.DescribeItem>
            Experience: <span>{nannies.experience}</span>
          </s.DescribeItem>
          <s.DescribeItem>
            Kids Age: <span>{nannies.kids_age}</span>
          </s.DescribeItem>
          <s.DescribeItem>
            Characters: <span>{nannies.characters.join(", ")}</span>
          </s.DescribeItem>
          <s.DescribeItem>
            Education: <span>{nannies.education}</span>
          </s.DescribeItem>
        </s.DescribeList>
        <s.AboutWrap>
          <s.About>{nannies.about}</s.About>
          {showReviews ? (
            <s.BtnReadMore
              type="button"
              onClick={() => setShowReviews(!showReviews)}
            >
              Read more
            </s.BtnReadMore>
          ) : (
            <Reviews
              reviews={nannies.reviews}
              nannies={{
                name: nannies.name,
                avatar_url: nannies.avatar_url,
              }}
            />
          )}
        </s.AboutWrap>
      </s.Descriptions>
    </s.ItemWrapper>
  );
};
