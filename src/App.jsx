import { Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/Home/HomePage";
import { NanniesPage } from "./pages/Nannies/NanniesPage";
import { FavoritesPage } from "./pages/Favorites/FavoritesPage";
import { Layout } from "./components/Layout/Layout";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/nannies" element={<NanniesPage />} />
        <Route
          path="/favorites"
          element={
            <PrivateRoute>
              <FavoritesPage />
            </PrivateRoute>
          }
        />
        <Route path="*" element={<HomePage />} />
      </Route>
    </Routes>
  );
};

export default App;
