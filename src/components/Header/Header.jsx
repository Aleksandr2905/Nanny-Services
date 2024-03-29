import { UserMenu } from "../UserMenu/UserMenu";
import { AuthMenu } from "../AuthMenu/AuthMenu";
import * as s from "./Header.styled";
import { Navigation } from "../Navigation/Navigation";

export const Header = ({ backgroundColor }) => {
  const isLoggedIn = false;
  return (
    <s.Wrapper $backgroundColor={backgroundColor}>
      <s.Logo>Nanny.Services</s.Logo>

      {isLoggedIn ? (
        <>
          <Navigation />
          <UserMenu />
        </>
      ) : (
        <AuthMenu />
      )}
    </s.Wrapper>
  );
};
