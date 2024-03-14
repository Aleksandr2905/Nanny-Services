import sprite from "../../assets/icons/sprite.svg";
import { Btn, IconUser, Name, WrappName, Wrapper } from "./UserMenu.styled";

export const UserMenu = () => {
  const name = "Ilona";
  return (
    <Wrapper>
      <WrappName>
        <IconUser width={24} height={24}>
          <use href={`${sprite}#icon-user`} />
        </IconUser>
        <Name>{name}</Name>
      </WrappName>
      <Btn type="button">Log out</Btn>
    </Wrapper>
  );
};
