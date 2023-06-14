import { Link, useLocation } from "react-router-dom";


export const Header = () => {
  const location = useLocation();
    const isDetailsPage = location.pathname.startsWith("/details");
     const isFavoritePage = location.pathname.startsWith("/favorites");
  return (
    <header>
      <div>
        <img className="chef" src="src\images\Cartoon-Funny-chef-for-culinary-business-and-restaurant-on-transparent-background-PNG.png" />
      </div>
      {isFavoritePage ? <h1 className="favoritesh1">Favorites</h1> : <h1 className="titleApp">L'Addition</h1>}

      <div className="header-links">
        {isFavoritePage ? (
          <Link to="/">Home</Link>
        ) : (
          <Link to="/favorites">Favorites</Link>
        )}
      </div>
    </header>
  );
};
