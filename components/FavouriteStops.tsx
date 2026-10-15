// FavouriteStops.tsx
"use client";

import { useFavouriteStops } from "@/hooks/useFavouriteStops";

type FavouriteStopsProps = {
  onSelect: (stop: string) => void;
};

export default function FavouriteStops({ onSelect }: FavouriteStopsProps) {
  const { favourites, loaded } = useFavouriteStops();

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
