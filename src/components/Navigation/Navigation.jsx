import { useSelector } from "react-redux";
import * as s from "./Navigation.styled";
import { selectIsAuth } from "../../redux/auth/selectors";

export const Navigation = () => {
  const isAuth = useSelector(selectIsAuth);

  return (
    <s.NavMenu>
      <s.NavBtn to="/"> Home</s.NavBtn>
      <s.NavBtn to="/nannies">Nannies</s.NavBtn>
      {isAuth && <s.NavBtn to="/favorites">Favorites</s.NavBtn>}
    </s.NavMenu>
  );
};
