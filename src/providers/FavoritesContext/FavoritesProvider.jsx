import React from "react";
import { createContext, useState, useEffect } from "react";

export const FavoritesContext = createContext(null);

export const FavoritesProvider = ({ children }) => {
  const savedFavorites = JSON.parse(
    localStorage.getItem(process.env.REACT_APP_LS_FAVORITES_KEY)
  );
  const initialState = savedFavorites ?? [];
  const [favorites, setFavorites] = useState(initialState);

  useEffect(() => {
    localStorage.setItem(
      process.env.REACT_APP_LS_FAVORITES_KEY,
      JSON.stringify(favorites)
    );
  });

  function addFavorites(id) {
    setFavorites([...favorites, id]);
  }

  function removeFavorites(id) {
    setFavorites(favorites.filter((item) => item !== id));
  }

  function isFavorite(id) {
    return favorites.includes(id);
  }

  const contextValue = {
    favorites,
    setFavorites,
    addFavorites,
    removeFavorites,
    isFavorite,
  };
  console.log(favorites);
  return (
    <FavoritesContext.Provider value={contextValue}>
      {children}
    </FavoritesContext.Provider>
  );
};
