import "./App.css";
import { Route, Routes } from "react-router-dom";
import { RestaurantProvider } from "./context/RestaurantContext";
import { HomePage } from "./pages/homepage/Homepage";

import { Details } from "./pages/details/Details";

import Favorite from "./pages/favorite/Favorite";
import { FavoritesProvider } from "./context/FavoritesContext";
import { Header } from "./shared/Header";
import Modal from "./shared/Modal";

function App() {
  return (
    <RestaurantProvider>
      <FavoritesProvider>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/favorites" element={<Favorite />} />
          <Route path="/details/:restaurantId" element={<Details />} />
        </Routes>
        <Modal />
      </FavoritesProvider>
    </RestaurantProvider>
  );
}

export default App;
