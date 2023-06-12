import React, { createContext } from "react";
import { restaurants } from "../data/data";
import { Restaurant } from "../models/Restaurant";

interface RestaurantContextType {
  restaurants: Restaurant[];
}

const RestaurantContext = createContext<RestaurantContextType>({
  restaurants: [],
});

const RestaurantProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <RestaurantContext.Provider value={{ restaurants }}>
      {children}
    </RestaurantContext.Provider>
  );
};

export { RestaurantContext, RestaurantProvider };
