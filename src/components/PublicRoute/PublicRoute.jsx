import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";
import { selectIsAuth } from "../../redux/auth/selectors";

const PublicRoute = ({ children }) => {
  const isAuth = useSelector(selectIsAuth);
  const location = useLocation();

  return isAuth ? <Navigate to={location.state ?? "/"} /> : children;
};

export default PublicRoute;
