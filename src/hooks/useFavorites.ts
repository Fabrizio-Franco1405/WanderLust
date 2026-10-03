import { useState, useCallback } from 'react';

export interface FavoriteItem {
  id: string;
  title: string;
  location: string;
  price: number;
  rating: number;
  imageUri: string;
}

export const useFavorites = () => {
  const [favorites, setFavorites] = useState<FavoriteItem[]>([]);

  const toggleFavorite = useCallback((item: FavoriteItem) => {
    setFavorites(prev => {
      const isFavorite = prev.some(fav => fav.id === item.id);
      if (isFavorite) {
        return prev.filter(fav => fav.id !== item.id);
      }
      return [...prev, item];
    });
  }, []);

  const isFavorite = useCallback((id: string) => {
    return favorites.some(fav => fav.id === id);
  }, [favorites]);

  const clearFavorites = useCallback(() => {
    setFavorites([]);
  }, []);

  return {
    favorites,
    toggleFavorite,
    isFavorite,
    clearFavorites,
    count: favorites.length,
  };
};