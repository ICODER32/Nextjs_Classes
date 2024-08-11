"use client";

export default function Button() {
  return (
    <button
      onClick={() => {
        console.log("Button clicked");
      }}
    >
      Click me
    </button>
  );
}
