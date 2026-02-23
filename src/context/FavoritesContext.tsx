import { createContext, useContext, useState, useEffect } from "react";
import type { ReactNode } from "react";
import type { Product } from "../types/Product";

interface FavoriteItem extends Product {
  liked: boolean;
}

interface LikeContextType {
  itemLiked: FavoriteItem[];
  addToFavorites: (product: Product) => void;
  removeFromFavorites: (id: number) => void;
  clearFavorites: () => void;
}

const FavoritesContext = createContext<LikeContextType | undefined>(undefined);

export function FavoritesProvider({ children }: { children: ReactNode }) {
  const [likedItem, setLikedItem] = useState<FavoriteItem[]>(() => {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem("favorites");
      return stored ? JSON.parse(stored) : [];
    }
    return [];
  });

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(likedItem));
  }, [likedItem]);

  // ADD TO FAVORITES (toggle)
  const addToFavorites = (product: Product) => {
    setLikedItem((prev) => {
      const existing = prev.find((item) => item.id === product.id);

      if (existing) {
        // Si ya existe, lo eliminamos (toggle)
        return prev.filter((item) => item.id !== product.id);
      } else {
        // Si no existe, lo agregamos
        return [...prev, { ...product, liked: true }];
      }
    });
  };

  const removeFromFavorites = (id: number) => {
    setLikedItem((prev) => prev.filter((item) => item.id !== id));
  };

  const clearFavorites = () => {
    setLikedItem([]);
  };

  return (
    <FavoritesContext.Provider
      value={{
        itemLiked: likedItem,
        addToFavorites,
        removeFromFavorites,
        clearFavorites,
      }}
    >
      {children}
    </FavoritesContext.Provider>
  );
}

export const useFavorites = () => {
  const context = useContext(FavoritesContext);
  if (!context) {
    throw new Error("useFavorites must be used within FavoritesProvider");
  }
  return context;
};

export default FavoritesProvider;