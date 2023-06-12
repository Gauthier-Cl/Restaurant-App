import "./App.css";
import { Route, Routes } from "react-router-dom";
import { RestaurantProvider } from "./context/RestaurantContext";
import { HomePage } from "./pages/homepage/Homepage";

import { Details } from "./pages/details/Details";

import Favorite from "./pages/favorite/Favorite";
import { FavoritesProvider } from "./context/FavoritesContext";

function App() {
  return (
    <RestaurantProvider>
      <FavoritesProvider>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/favorites" element={<Favorite />} />
          <Route path="/details/:restaurantId" element={<Details />} />
        </Routes>
      </FavoritesProvider>
    </RestaurantProvider>
  );
}

export default App;
