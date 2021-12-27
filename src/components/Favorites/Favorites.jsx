import { useState, useEffect } from "react";

function useFavorites() {
    const [favorites, setfavorites] = useState(() => {
      const ls = localStorage.getItem("favorites");
      if (ls) return JSON.parse(ls);
      else return [];
    });
  
    const toggleItemInLocalStorage = (id) => () => {
      const isBookmarked = favorites.includes(id);
      if (isBookmarked) setfavorites((prev) => prev.filter((b) => b !== id));
      else setfavorites((prev) => [...prev, id]);
    };
  
    useEffect(() => {
      localStorage.setItem("favorites", JSON.stringify(favorites));
    }, [favorites]);
  
    return [favorites, toggleItemInLocalStorage];
  }

  export default useFavorites;