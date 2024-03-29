import { UserMenu } from "../UserMenu/UserMenu";
import { AuthMenu } from "../AuthMenu/AuthMenu";
import * as s from "./Header.styled";

export const Header = ({ backgroundColor }) => {
  const isLoggedIn = false;
  return (
    <s.Wrapper $backgroundColor={backgroundColor}>
      <s.Logo>Nanny.Services</s.Logo>
      <s.NavMenu>
        <s.NavBtn to="/"> Home</s.NavBtn>
        <s.NavBtn to="/nannies">Nannies</s.NavBtn>
        {isLoggedIn && <s.NavBtn to="/favorites">Favorites</s.NavBtn>}
      </s.NavMenu>
      {isLoggedIn ? <UserMenu /> : <AuthMenu />}
    </s.Wrapper>
  );
};
