"use client";

import { useState, type ChangeEvent } from "react";

export default function SearchStop() {
  const [stop, setStop] = useState("");
  const [results, setResults] = useState(null);

  async function handleSearch() {
    if (!stop) return;

    const response = await fetch(`/api/luas?stop=${stop}`);
    const data = await response.json();

    console.log(data);
    setResults(data);
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
