import { UserMenu } from "../UserMenu/UserMenu";
import { AuthMenu } from "../AuthMenu/AuthMenu";
import * as s from "./Header.styled";
import { Navigation } from "../Navigation/Navigation";
import { useSelector } from "react-redux";
import { selectIsAuth } from "../../redux/auth/selectors";

export const Header = ({ backgroundColor }) => {
  const isAuth = useSelector(selectIsAuth);

  return (
    <s.Wrapper $backgroundColor={backgroundColor}>
      <s.Logo>Nanny.Services</s.Logo>

      {isAuth ? (
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
