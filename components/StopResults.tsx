import type { LuasData } from "@/types/luas";
import { luasStop } from "@/data/luasStop";

type StopResultsProps = {
  results: LuasData;
};

function toArray<T>(value: T | T[] | undefined): T[] {
  if (!value) return [];
  return Array.isArray(value) ? value : [value];
}

function formatDue(mins?: string) {
  if (!mins) return "";
  return mins.toUpperCase() === "DUE" ? "Due" : `${mins} min`;
}

export default function StopResults({ results }: StopResultsProps) {
  const directions = toArray(results.stopInfo.direction);

  const line = luasStop.find(
    (s) => s.shortName === results.stopInfo["@_stopAbv"],
  )?.line;

  const bgColor =
    line === "Green"
      ? "bg-green-500/20 border-r border-l border-green-500"
      : line === "Red"
        ? "bg-red-500/20 border-r border-l border-red-500"
        : "bg-slate-800";

  return (
    <div className="mx-auto mt-8 px-4">
      <div className={`mb-6 p-3 rounded ${bgColor}`}>
        <h2 className="text-2xl font-semibold text-white">
          {results.stopInfo["@_stop"]}
        </h2>

        <p className="mt-1 text-sm text-slate-400">
          {results.stopInfo.message}
        </p>
      </div>

      <div className="space-y-4">
        {directions.map((direction) => {
          const trams = toArray(direction.tram);

          return (
            <div
              key={direction["@_name"]}
              className="rounded-xl border border-slate-800 bg-slate-900 p-4"
            >
              <h3 className="mb-3 text-sm font-medium uppercase tracking-wide text-slate-400">
                {direction["@_name"]}
              </h3>

              {trams.length === 0 ? (
                <p className="text-sm text-slate-500">No trams forecast</p>
              ) : (
                <ul className="space-y-3">
                  {trams.map((tram, index) => (
                    <li
                      key={`${tram["@_destination"]}-${tram["@_dueMins"]}-${index}`}
                      className="flex items-center justify-between"
                    >
                      <span className="font-medium text-white">
                        {tram["@_destination"]}
                      </span>

                      <span className="text-sm text-emerald-400">
                        {formatDue(tram["@_dueMins"])}
                      </span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
