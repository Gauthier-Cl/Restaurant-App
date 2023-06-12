import { useContext } from "react";
import { RestaurantContext } from "../../../context/RestaurantContext";
import { Card } from "./Card";
import "./CardsList.css";
import { FavoritesContext } from "../../../context/FavoritesContext";
export const CardsList = () => {
  const { restaurants } = useContext(RestaurantContext);
  const { favoritesIds } = useContext(FavoritesContext);

  return (
    <div className="Resto-List">
      <div className="main">
        <ul className="cards">
          {restaurants.map((restaurant) =>  (
            <Card
              key={restaurant.id}
              restaurant={restaurant}
              isFavorite={favoritesIds.includes(restaurant.id)}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};
