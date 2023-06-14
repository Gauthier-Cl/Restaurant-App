import React, { useContext, useState } from "react";
import { Restaurant } from "../../../models/Restaurant";
import "./Card.css";
import { Link } from "react-router-dom";
import { FavoritesContext } from "../../../context/FavoritesContext";

export const Card = ({
  restaurant,
  isFavorite,
}: {
  restaurant: Restaurant;
  isFavorite: boolean;
}) => {
  const { id, name, img, description_short } = restaurant;

  const { addToFavorites, setRestaurantIdToDelete, setShowModal } =
    useContext(FavoritesContext);

  return (
    <div className="all">
      <li className="cards_item" key={id}>
        <div className="card">
          
          <div className="card_image">
            <img src={img} alt={name} />
          </div>
          <div className="card_content">
            <h2 className="card_title">{name}</h2>
            <div className="card_text">
              <p>{description_short}</p>
              {/* careful here it is not a <p> */}
              <p>
                <Link to={`/details/${id}`} className="card-hover__link">
                  View Details
                </Link>
              </p>
              <p>
                {isFavorite ? (
                  <button
                    className="del"
                    onClick={() => {
                      setRestaurantIdToDelete(id);
                      setShowModal(true);
                    }}
                  >
                    Delete
                  </button>
                ) : (
                  <button className="addFav" onClick={() => addToFavorites(id)}>
                    Add to Favorites
                  </button>
                )}
              </p>
            </div>
          </div>
        </div>
      </li>
    </div>
  );
};
