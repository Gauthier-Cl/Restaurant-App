import React, { useContext } from "react";
import { Restaurant } from "../../models/Restaurant";
import { Card } from "../homepage/components/Card";
import "./favorite.css"
// import "../homepage/components/Card.css"
import { Header } from "../../shared/Header";
import { FavoritesContext } from "../../context/FavoritesContext";
import { RestaurantContext } from "../../context/RestaurantContext";
const Favorites = () => {
const { restaurants } = useContext(RestaurantContext);
const { favoritesIds } = useContext(FavoritesContext);

const favoriteRestaurants = restaurants.filter((restaurant) =>
  favoritesIds.includes(restaurant.id)
);

  return (
    <div className="favorite_Page">
      
        <div id="container" >
          <div className="cards">
            {favoriteRestaurants.map((restaurant: Restaurant) => (
              <Card 
                key={restaurant.id}
                restaurant={restaurant}
                isFavorite={true}
              />
            ))}
          </div>
        </div>
      </div>
    
  );
};

export default Favorites;
