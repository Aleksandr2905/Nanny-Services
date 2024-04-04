import * as s from "./Indicator.styled";
import sprite from "../../../assets/icons/sprite.svg";

export const Indicator = ({ onToggleMenu }) => {
  return (
    <s.Button type="button" onClick={onToggleMenu}>
      <svg width={20} height={20}>
        <use href={`${sprite}#icon-clock`} />
      </svg>
    </s.Button>
  );
};
