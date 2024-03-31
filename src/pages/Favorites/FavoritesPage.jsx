import { useSelector } from "react-redux";
import { Header } from "../../components/Header/Header";
import { selectIsAuth } from "../../redux/auth/selectors";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";

export const FavoritesPage = () => {
  const navigation = useNavigate();
  const location = useLocation();
  const isAuth = useSelector(selectIsAuth);

  useEffect(() => {
    if (!isAuth) {
      navigation(location.state ?? "/");
    }
  }, [isAuth, navigation]);

  return (
    <div>
      <Header backgroundColor />
      FavoritesPage
    </div>
  );
};
