import { UserMenu } from "../UserMenu/UserMenu";
import { AuthMenu } from "../AuthMenu/AuthMenu";
import { Logo, NavBtn, NavMenu, Wrapper } from "./Header.styled";

export const Header = ({ backgroundColor }) => {
  const isLoggedIn = false;
  return (
    <Wrapper
      backgroundColor={backgroundColor}
      style={{ textAlign: isLoggedIn ? "center" : "right" }}
    >
      <Logo>Nanny.Services</Logo>
      <NavMenu>
        <NavBtn to="/"> Home</NavBtn>
        <NavBtn to="/nannies">Nannies</NavBtn>
        {isLoggedIn && <NavBtn to="/favorites">Favorites</NavBtn>}
      </NavMenu>
      {isLoggedIn ? <UserMenu /> : <AuthMenu />}
    </Wrapper>
  );
};
