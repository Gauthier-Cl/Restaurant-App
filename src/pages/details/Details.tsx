import { useContext } from "react";
import { useParams } from "react-router-dom";
import { RestaurantContext } from "../../context/RestaurantContext";
import { Header } from "../../shared/Header";
import "./Details.css";

export const Details = () => {
  const { restaurantId } = useParams<{ restaurantId?: string }>();

  if (!restaurantId) {
    return <div>Restaurant ID not provided</div>;
  }

  const { restaurants } = useContext(RestaurantContext);

  const restaurant = restaurants.find(
    (r) => r.id === parseInt(restaurantId, 10)
  );

  if (restaurant == null) {
    return <div>Restaurant not found</div>;
  }

  const { name, img, description_long, address, menu } = restaurant;
  const handleAddToFavorites = () => {
    const favoriteRestaurantsJson = localStorage.getItem("favoriteRestaurants");
    const favoriteRestaurants = favoriteRestaurantsJson
      ? JSON.parse(favoriteRestaurantsJson)
      : [];
    const isAlreadyFavorite = favoriteRestaurants.some(
      (favorite: { id: number }) => favorite.id === restaurant.id
    );

    if (isAlreadyFavorite) {
      window.alert("Restaurant already exists in favorites");
    } else {
      favoriteRestaurants.push(restaurant);
      localStorage.setItem(
        "favoriteRestaurants",
        JSON.stringify(favoriteRestaurants)
      );
    }
  };
  return (
    <>
      <Header />
      <div className="card">
        <div className="card_image">
          <img src={img} alt={name} />
        </div>
        <div className="card_content">
          <h2 className="card_title">{name}</h2>
          <div className="card_text">
            <p>{description_long}</p>
            <h3>Adress</h3>
            <p>{address}</p>
            <div>
              <h3>Menu</h3>
              <div>
                <h4>Entrées</h4>
                <ul>
                  {menu.entrees.map((entree, index) => (
                    <li key={index}>{entree}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h4>Plats</h4>
                <ul>
                  {menu.dishes.map((dish, index) => (
                    <li key={index}>{dish}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h4>Desserts</h4>
                <ul>
                  {menu.deserts.map((desert, index) => (
                    <li key={index}>{desert}</li>
                  ))}
                </ul>
              </div>
            </div>
            <p>
              <button onClick={handleAddToFavorites}>Add to Favorites</button>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
