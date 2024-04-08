import { useSelector } from "react-redux";
import { Header } from "../../components/Header/Header";
import { selectIsAuth } from "../../redux/auth/selectors";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { FavoritesList } from "../../components/FavoritesList/FavoritesList";

export const FavoritesPage = () => {
  const navigation = useNavigate();
  const isAuth = useSelector(selectIsAuth);

  useEffect(() => {
    if (!isAuth) {
      navigation("/");
    }
  }, [isAuth, navigation]);

  return (
    <div>
      <Header backgroundColor />
      <FavoritesList />
    </div>
  );
};
