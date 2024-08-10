"use client";
export default function page() {
  const a = "abc";
  console.log(a);
  return (
    <>
      <h1>Hello World</h1>
      <h2>Abc</h2>
      <button
        onClick={() => {
          console.log("Button clicked");
        }}
      >
        Click me
      </button>
    </>
  );
}
