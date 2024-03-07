'use client';

export default function Home() {
  const onNormal = async () => {
    await fetch('/api/data-cache/normal');
  };

  const onTimeBased = async () => {
    await fetch('/api/data-cache/time-based-revalidation');
  };

  const onDemand = async () => {
    await fetch('/api/data-cache/on-demand-revalidation');
  };

  const onOptOut = async () => {
    await fetch('/api/data-cache/opt-out');
  };

  return (
    <div>
      <button onClick={onNormal} className="border bg-yellow-200 mt-3 mx-3 p-2">
        Normal
      </button>
      <button onClick={onTimeBased} className="border bg-blue-200 mx-3 p-2">
        Time-based revalidation
      </button>
      <button onClick={onDemand} className="border bg-green-200 mx-3 p-2">
        On-demand revalidation
      </button>
      <button onClick={onOptOut} className="border bg-red-200 mx-3 p-2">
        Opt-out
      </button>
    </div>
  );
}
