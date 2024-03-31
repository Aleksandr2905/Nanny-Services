import { Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/Home/HomePage";
import { NanniesPage } from "./pages/Nannies/NanniesPage";
import { FavoritesPage } from "./pages/Favorites/FavoritesPage";
import { Layout } from "./components/Layout/Layout";
import { useDispatch, useSelector } from "react-redux";
import { refreshUser } from "./redux/auth/operations";
import { useEffect } from "react";
import { selectIsLoading } from "./redux/auth/selectors";
import { Loader } from "./components/Loader/Loader";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<HomePage />} />
              <Route path="/nannies" element={<NanniesPage />} />
              <Route path="/favorites" element={<FavoritesPage />} />
              <Route path="*" element={<HomePage />} />
            </Route>
          </Routes>
        </>
      )}
      <ToastContainer position="top-center" autoClose={5000} />
    </>
  );
};

export default App;
