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

  function save(next: FavouriteStop[]) {
    setFavourites(next);
    localStorage.setItem("favouriteStops", JSON.stringify(next));
  }

  function addFavourite(fav: FavouriteStop) {
    if (favourites.some((f) => f.stop === fav.stop)) return;
    save([...favourites, fav]);
  }

  function removeFavourite(stop: string) {
    save(favourites.filter((f) => f.stop !== stop));
  }

  return { favourites, loaded, addFavourite, removeFavourite };
}
