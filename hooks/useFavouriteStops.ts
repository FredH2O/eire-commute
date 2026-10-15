"use client";

import { useEffect, useState } from "react";

export type FavouriteStop = { stop: string; name: string };

export function useFavouriteStops() {
  const [favourites, setFavourites] = useState<FavouriteStop[]>([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    try {
      const saved = localStorage.getItem("favouriteStops");
      //eslint-disable-next-line
      if (saved) setFavourites(JSON.parse(saved));
    } catch (error) {
      console.log(error);
    }

    setLoaded(true);
  }, []);

  return { favourites, loaded };
}
