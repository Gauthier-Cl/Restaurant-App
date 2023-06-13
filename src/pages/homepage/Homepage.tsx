import { Header } from "../../shared/Header";
// import "./Homepage.css";

import { CardsList } from "./components/CardsList";

export const HomePage = () => {
  return (
    <div className="all">
     
      <div className="container">
        <div id="container">
          <CardsList />
        </div>
      </div>
    </div>
  );
};
