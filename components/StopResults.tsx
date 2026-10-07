import type { LuasData } from "@/types/luas";

type StopResultsProps = {
  results: LuasData;
};

export default function StopResults({ results }: StopResultsProps) {
  return (
    <div className="mt-8 mx-auto px-4 max-w-lg">
      <div className="mb-6">
        <h2 className="text-2xl font-semibold text-white">
          {results.stopInfo["@_stop"]}
        </h2>

        <p className="mt-1 text-sm text-slate-400">
          {results.stopInfo.message}
        </p>
      </div>

      <div className="space-y-4">
        {results.stopInfo.direction.map((direction) => (
          <div
            key={direction["@_name"]}
            className="rounded-xl border border-slate-800 bg-slate-900 p-4"
          >
            <h3 className="mb-3 text-sm font-medium uppercase tracking-wide text-slate-400">
              {direction["@_name"]}
            </h3>

            <ul className="space-y-3">
              {direction.tram.map((tram) => (
                <li
                  key={`${tram["@_destination"]}-${tram["@_dueMins"]}`}
                  className="flex items-center justify-between"
                >
                  <span className="font-medium text-white">
                    {tram["@_destination"]}
                  </span>

                  <span className="text-sm text-emerald-400">
                    {tram["@_dueMins"]} min
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
