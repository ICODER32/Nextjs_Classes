"use client";
export default function error({ error, reset }: any) {
  return (
    <div>
      <div>
        <h1>Something went wrong!</h1>
        <p>{error.message}</p>
        <button onClick={() => reset()}>Try again</button>
      </div>
    </div>
  );
}
