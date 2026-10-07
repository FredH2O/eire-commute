import type { LuasData } from "@/types/luas";

type StopResultsProps = {
  results: LuasData;
};

export default function StopResults({ results }: StopResultsProps) {
  return (
    <div>
      <p>{results.stopInfo["@_stop"]}</p>
    </div>
  );
}
