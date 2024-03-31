import { useDispatch, useSelector } from "react-redux";
import sprite from "../../assets/icons/sprite.svg";
import * as s from "./UserMenu.styled";
import { selectUser } from "../../redux/auth/selectors";
import { logOut } from "../../redux/auth/operations";

export const UserMenu = () => {
  const { username } = useSelector(selectUser);
  const dispatch = useDispatch();

  return (
    <s.Wrapper>
      <s.WrappName>
        <s.IconUser width={24} height={24}>
          <use href={`${sprite}#icon-user`} />
        </s.IconUser>
        <s.Name>{username}</s.Name>
      </s.WrappName>
      <s.Btn
        onClick={() => {
          dispatch(logOut());
        }}
      >
        Log out
      </s.Btn>
    </s.Wrapper>
  );
};
