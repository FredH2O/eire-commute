"use client";

import { useState, type ChangeEvent } from "react";
import type { LuasData } from "@/types/luas";

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

  function handleOnChange(event: ChangeEvent<HTMLInputElement>) {
    setStop(event.target.value);
  }

  return (
    <div>
      <p>Search stop: </p>

      <input
        className="bg-white text-black"
        type="text"
        value={stop}
        onChange={handleOnChange}
      />

      <button type="button" onClick={handleSearch}>
        Search
      </button>
    </div>
  );
}
