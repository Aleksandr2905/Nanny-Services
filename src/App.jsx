import { Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/Home/HomePage";
import { NanniesPage } from "./pages/Nannies/NanniesPage";
import { FavoritesPage } from "./pages/Favorites/FavoritesPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/nannies" element={<NanniesPage />} />
      <Route path="/favorites" element={<FavoritesPage />} />
      <Route path="*" element={<HomePage />} />
    </Routes>
  );
}

export default App;
