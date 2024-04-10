import { useSelector } from "react-redux";
import { Header } from "../../components/Header/Header";
import { selectIsAuth } from "../../redux/auth/selectors";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { FavoritesList } from "../../components/FavoritesList/FavoritesList";
import * as s from "../Nannies/NanniesPage.styled";

export const FavoritesPage = () => {
  const navigation = useNavigate();
  const isAuth = useSelector(selectIsAuth);

  useEffect(() => {
    if (!isAuth) {
      navigation("/");
    }
  }, [isAuth, navigation]);

  return (
    <s.Wrapper>
      <s.Container>
        <Header backgroundColor />
        <FavoritesList />
      </s.Container>
    </s.Wrapper>
  );
};
