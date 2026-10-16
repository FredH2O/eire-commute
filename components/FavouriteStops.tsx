"use client";

import type { FavouriteStop } from "@/hooks/useFavouriteStops";

type FavouriteStopsProps = {
  favourites: FavouriteStop[];
  loaded: boolean;
  onSelect: (stop: string) => void;
};

export default function FavouriteStops({
  favourites,
  loaded,
  onSelect,
}: FavouriteStopsProps) {
  if (!loaded) return null;

  return (
    <section>
      <h2>Favourite stops</h2>
      {favourites.length === 0 ? (
        <p>No favourite stops yet. Save a stop for quicker access next time.</p>
      ) : (
        <div>
          {favourites.map((item) => (
            <button
              key={item.stop}
              type="button"
              onClick={() => onSelect(item.stop)}
              className="rounded-xl border p-3"
            >
              ⭐ {item.name}
            </button>
          ))}
        </div>
      )}
    </section>
  );
}
