import { useSelector } from "react-redux";
import { Header } from "../../components/Header/Header";
import { selectIsAuth } from "../../redux/auth/selectors";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { FavoritesList } from "../../components/FavoritesList/FavoritesList";

export const FavoritesPage = () => {
  const navigation = useNavigate();
  const location = useLocation();
  const isAuth = useSelector(selectIsAuth);

  useEffect(() => {
    if (!isAuth) {
      navigation("/" && location.pathname);
    }
  }, [isAuth, navigation]);

  return (
    <div>
      <Header backgroundColor />
      <FavoritesList />
    </div>
  );
};
