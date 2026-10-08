"use client";

import { useState } from "react";

import type { LuasData } from "@/types/luas";
import { luasStop } from "@/data/luasStop";
import { FiChevronDown } from "react-icons/fi";

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

      <div className="relative flex gap-2 ">
        <select
          className="min-w-0 cursor-pointer appearance-none px-4 py-3
          transition-all duration-150 flex-1 rounded-lg border
          border-slate-700 bg-slate-900  
          text-white outline-none focus:border-slate-500 
          active:border-green-500 hover:bg-slate-800"
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
