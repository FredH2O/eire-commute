"use client";

import { useState } from "react";

import type { LuasData } from "@/types/luas";
import { luasStop } from "@/data/luasStop";

type SearchStopProps = {
  onResults: (data: LuasData) => void;
};

export default function SearchStop({ onResults }: SearchStopProps) {
  const [stop, setStop] = useState("");

  async function handleSearch() {
    if (!stop) return;

    const response = await fetch(`/api/luas?stop=${stop}`);
    const data = await response.json();

    onResults(data);
  }

  return (
    <div className="mx-auto mt-8 px-4">
      <p className="mb-2 text-sm font-medium text-slate-300">Select stop</p>

      <div className="flex gap-2">
        <select
          className="min-w-0 flex-1 rounded-lg border border-slate-700 bg-slate-900 px-4 py-3 text-white outline-none focus:border-slate-500"
          value={stop}
          onChange={(event) => setStop(event.target.value)}
        >
          <option value="">Choose a stop</option>

          {luasStop.map((stop) => (
            <option key={stop.shortName} value={stop.shortName}>
              {stop.displayName}
            </option>
          ))}
        </select>

        <button
          className="rounded-lg bg-emerald-500 px-5 py-3 font-medium text-slate-950 transition hover:bg-emerald-400"
          type="button"
          onClick={handleSearch}
        >
          Search
        </button>
      </div>
    </div>
  );
}
