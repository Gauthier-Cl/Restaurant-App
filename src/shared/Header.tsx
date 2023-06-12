import { Link, useLocation } from "react-router-dom";

import "./Header.css";
export const Header = () => {
  const location = useLocation();
    const isDetailsPage = location.pathname.startsWith("/details");
     const isFavoritePage = location.pathname.startsWith("/favorites");
  return (
    <header>
      {isFavoritePage ? <h1>Favorites</h1> : <h1>Restaurant-App</h1>}

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