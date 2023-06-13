import React, { createContext, useEffect, useState } from "react";

interface FavoritesContextType {
  favoritesIds: number[];
  addToFavorites: (restaurantId: number) => void;
  deleteFromFavorites: () => void;
  showModal: boolean;
  setShowModal: (show: boolean) => void;
  setRestaurantIdToDelete: (restaurantId: number | null) => void;
}

const FavoritesContext = createContext({} as FavoritesContextType);

const FavoritesProvider = ({ children }: { children: React.ReactNode }) => {
  const [favoritesIds, setFavoritesIds] = useState<number[]>([]);
  const [showModal, setShowModal] = useState(false);
  const [restaurantIdToDelete, setRestaurantIdToDelete] = useState<
    number | null
  >(null);

  const getFavoriteIds = () => {
    const favorites = localStorage.getItem("favorites");
    const parsedFavorites = favorites ? JSON.parse(favorites) : [];
    setFavoritesIds(parsedFavorites);
  };

  useEffect(() => {
    getFavoriteIds();
  }, []);

  const addToFavorites = (restaurantId: number) => {
    const updatedFavorites = [...favoritesIds, restaurantId];
    setFavoritesIds(updatedFavorites);

    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  };
  const deleteFromFavorites = () => {
    const updatedFavorites = favoritesIds.filter(
      (id) => id !== restaurantIdToDelete
    );
    setFavoritesIds(updatedFavorites);

    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
    setShowModal(false);
  };

  return (
    <FavoritesContext.Provider
      value={{
        favoritesIds,
        addToFavorites,
        deleteFromFavorites,
        showModal,
        setShowModal,
        setRestaurantIdToDelete,
      }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};

export { FavoritesContext, FavoritesProvider };
