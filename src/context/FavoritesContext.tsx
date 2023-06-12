import React, { createContext, useEffect, useState } from "react";

interface FavoritesContextType {
  favoritesIds: number[];
  addToFavorites: (restaurantId: number) => void;
  deleteFromFavorites: (restaurantId: number) => void;
}

const FavoritesContext = createContext({} as FavoritesContextType);


//  const handleAddToFavorites = () => {
//    const favoriteRestaurantsJson = localStorage.getItem("favorites");
//    const isDetailsPage = location.pathname.startsWith("/details");
//    const favoriteRestaurants = favoriteRestaurantsJson
//      ? JSON.parse(favoriteRestaurantsJson)
//      : [];
//    const isAlreadyFavorite = favoriteRestaurants.some(
//      (favorite: { id: number }) => favorite.id === restaurant.id
//    );

//    if (isAlreadyFavorite) {
//      window.alert("Restaurant already exists in favorites");
//    } else {
//      favoriteRestaurants.push(restaurant.id);
//      localStorage.setItem("favorites", JSON.stringify(favoriteRestaurants));
//    }
//  };

const FavoritesProvider = ({ children }: { children: React.ReactNode }) => {
  const [favoritesIds, setFavoritesIds] = useState<number[]>([]);

  const getFavoriteIds = () => {
    const favorites = localStorage.getItem("favorites");
    const parsedFavorites = JSON.parse(favorites ? favorites : "");
    setFavoritesIds(parsedFavorites);
  };

  useEffect(() => {
    getFavoriteIds();
  }, []);

  const addToFavorites = (restaurantId: number) => {
    // Ajouter l'id au local storage
    // Mettre à jour la variable d'état
  };
  const deleteFromFavorites = (restaurantId: number) => {
    // Supprimer du local storage
    // Mettre à jour la variable d'état
  };

  return (
    <FavoritesContext.Provider
      value={{ favoritesIds, addToFavorites, deleteFromFavorites }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};

export { FavoritesContext, FavoritesProvider };
