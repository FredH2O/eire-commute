"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import type { LuasData } from "@/types/luas";
import { luasStop } from "@/data/luasStop";
import { FiChevronDown } from "react-icons/fi";
import FavouriteStops from "./FavouriteStops";

type SearchStopProps = {
  onResults: (data: LuasData | null) => void;
  onLoading: (loading: boolean) => void;
  onError: (error: string) => void;
};

export default function SearchStop({
  onResults,
  onLoading,
  onError,
}: SearchStopProps) {
  const [stop, setStop] = useState("");
  const router = useRouter();

  // On first load, read ?stopID= from the URL and load that stopppp
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const stopFromUrl = params.get("stopID")?.toUpperCase();

    if (!stopFromUrl) return;

    const isRealStop = luasStop.some((item) => item.shortName === stopFromUrl);

    if (isRealStop) {
      handleSearch(stopFromUrl);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function handleSearch(value: string) {
    setStop(value);

    // reset when -choose a stop- is selected

    if (!value) {
      router.replace("/", { scroll: false });
      onResults(null);
      onError("");
      onLoading(false);
      return;
    }

    const selectedStop = luasStop.find(
      (pickedStop) => pickedStop.shortName === value,
    );

    if (selectedStop) {
      router.replace(`/?stopID=${value}`, { scroll: false });
    }

    onLoading(true);

    try {
      const response = await fetch(`/api/luas?stop=${value}`);

      if (!response.ok) {
        throw new Error("Failed to load departures");
      }

      const data = await response.json();
      onResults(data);
    } catch (error) {
      console.log(error);
      onError("Couldn't load departures. Please try again.");
    } finally {
      onLoading(false);
    }
  }

  return (
    <div className="mx-auto mt-8 px-4">
      <FavouriteStops onSelect={handleSearch} />

      <label
        htmlFor="luas-stop"
        className="text-sm font-medium text-text-muted"
      >
        Select stop
      </label>

      <div className="relative flex gap-2 mt-2">
        <select
          id="luas-stop"
          className="min-w-0 cursor-pointer appearance-none px-4 py-3
          transition-all duration-150 flex-1 border
          rounded-control
          border-control-border 
          bg-control-bg
          text-white 
          outline-none 
          active:border-brand
          hover:bg-control-hover 
          focus-visible:ring-2 
          focus-visible:ring-brand 
          focus-visible:ring-offset-2 
          focus-visible:ring-offset-control-bg"
          value={stop}
          onChange={(event) => handleSearch(event.target.value)}
        >
          <option value="">Choose a stop</option>

          {luasStop.map((item) => (
            <option key={item.shortName} value={item.shortName}>
              {item.displayName}
            </option>
          ))}
        </select>

        <FiChevronDown
          className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-slate-400"
          size={20}
        />
      </div>
    </div>
  );
}
