"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import type { LuasData } from "@/types/luas";
import { luasStop } from "@/data/luasStop";
import { FiChevronDown } from "react-icons/fi";

type SearchStopProps = {
  onResults: (data: LuasData) => void;
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

  async function handleSearch(value: string) {
    setStop(value);

    const selectedStop = luasStop.find(
      (pickedStop) => pickedStop.shortName === value,
    );

    if (selectedStop) {
      router.replace(`/?stopID=${value}`, { scroll: false });
    }

    if (!value) return;

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
      <label htmlFor="luas-stop" className="text-sm font-medium text-slate-400">
        Select stop
      </label>

      <div className="relative flex gap-2 ">
        <select
          id="luas-stop"
          className="min-w-0 cursor-pointer appearance-none px-4 py-3
          transition-all duration-150 flex-1 rounded-lg border
          border-slate-700 bg-slate-900  
          text-white outline-none active:border-green-500 hover:bg-slate-800 
          focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
          value={stop}
          onChange={(event) => handleSearch(event.target.value)}
        >
          <option value="">Choose a stop</option>

          {luasStop.map((stop) => (
            <option key={stop.shortName} value={stop.shortName}>
              {stop.displayName}
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
