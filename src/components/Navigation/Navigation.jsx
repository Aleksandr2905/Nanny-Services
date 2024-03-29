import * as s from "./Navigation.styled";

export const Navigation = () => {
  const isLoggedIn = false;
  return (
    <s.NavMenu>
      <s.NavBtn to="/"> Home</s.NavBtn>
      <s.NavBtn to="/nannies">Nannies</s.NavBtn>
      {isLoggedIn && <s.NavBtn to="/favorites">Favorites</s.NavBtn>}
    </s.NavMenu>
  );
};
