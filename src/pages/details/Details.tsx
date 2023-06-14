import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { RestaurantContext } from "../../context/RestaurantContext";
import { Header } from "../../shared/Header";
import "./Details.css";
import { FavoritesContext } from "../../context/FavoritesContext";

export const Details = () => {
  const { restaurantId } = useParams<{ restaurantId?: string }>();
  const { restaurants } = useContext(RestaurantContext);
  const {
    addToFavorites,
    
    favoritesIds,
    setRestaurantIdToDelete,
    setShowModal,
  } = useContext(FavoritesContext);

  if (!restaurantId) {
    return <div>Restaurant ID not provided</div>;
  }

  const restaurant = restaurants.find(
    (r) => r.id === parseInt(restaurantId, 10)
  );

  if (restaurant == null) {
    return <div>Restaurant not found</div>;
  }

  const { name, img, description_long, address, menu } = restaurant;
  const id = restaurant.id;
  const isFavorite = favoritesIds.includes(restaurant.id);

  // N'hésite pas à bien utiliser les balises sémantiques (section, main, article etc.)
  return (
    <>
      <div className="allDetails">
        <div className="card">
          <div className="card_image">
            <img src={img} alt={name} />
          </div>
          <div className="card_content">
            <h2 className="card_title">{name}</h2>
            <div className="card_text">
              <p>{description_long}</p>
              <h3>Address</h3>
              <p>{address}</p>
              <h3>Menu</h3>
              <div className="menuList">
                <div>
                  <ul>
                    <h4>Entrées</h4>
                    {menu.entrees.map((entree, index) => (
                      <li key={index}>{entree}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <ul>
                    <h4>Plats</h4>
                    {menu.dishes.map((dish, index) => (
                      <li key={index}>{dish}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <ul>
                    <h4>Desserts</h4>
                    {menu.deserts.map((dessert, index) => (
                      <li key={index}>{dessert}</li>
                    ))}
                  </ul>
                </div>
              </div>
              <p>
                {isFavorite ? (
                  <button
                    className="detailsButtonDelete"
                    onClick={() => {
                      setRestaurantIdToDelete(id);
                      setShowModal(true);
                    }}
                  >
                    Delete
                  </button>
                ) : (
                  <button
                    className="detailsButton"
                    onClick={() => addToFavorites(id)}
                  >
                    Add to Favorites
                  </button>
                )}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
