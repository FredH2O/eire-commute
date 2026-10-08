"use client";

import { useState } from "react";

import type { LuasData } from "@/types/luas";
import { luasStop } from "@/data/luasStop";

type SearchStopProps = {
  onResults: (data: LuasData) => void;
};

export default function SearchStop({ onResults }: SearchStopProps) {
  const [stop, setStop] = useState("");

  async function handleSearch(value: string) {
    setStop(value);

    if (!value) return;

    const response = await fetch(`/api/luas?stop=${value}`);
    const data = await response.json();

    onResults(data);
  }

  return (
    <div className="mx-auto mt-8 px-4">
      <p className="mb-2 text-sm font-medium text-slate-400">Select stop</p>

      <div className="flex gap-2">
        <select
          className="min-w-0 flex-1 rounded-lg border border-slate-700 bg-slate-900 px-4 py-3 text-white outline-none focus:border-slate-500"
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
      </div>
    </div>
  );
}
