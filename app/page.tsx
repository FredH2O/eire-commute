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
    <main className="min-h-screen  px-4 py-12 text-white sm:py-16">
      <section className="mx-auto max-w-lg">
        <div className="text-center">
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-emerald-400">
            Dublin transport
          </p>

          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Eire Commute
          </h1>

          <p className="mx-auto mt-3 max-w-sm text-slate-400">
            Your simple Luas commute checker.
          </p>
        </div>

        <SearchStop onResults={handleResults} />

        {results && <StopResults results={results} />}
      </section>
    </main>
  );
}
