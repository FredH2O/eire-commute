"use client";

import { useState } from "react";
import SearchStop from "@/components/SearchStop";
import StopResults from "@/components/StopResults";
import type { LuasData } from "@/types/luas";

export default function Home() {
  const [results, setResults] = useState<LuasData | null>(null);

  function handleResults(data: LuasData) {
    setResults(data);
  }

  return (
    <main>
      <h1>Eire Commute</h1>
      <p>Your simple Luas commute checker.</p>
      <SearchStop onResults={handleResults} />

      {results && <StopResults results={results} />}
    </main>
  );
}
