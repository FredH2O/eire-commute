type StopResultsProps = {
  results: any;
};

export default function StopResults({ results }: StopResultsProps) {
  return (
    <div>
      <p>{results.stopInfo["@_stop"]}</p>
    </div>
  );
}
