"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function page() {
  const [counter, setCounter] = useState(0);
  useEffect(() => {
    console.log("Mounted");
    return () => {
      console.log("Unmounted");
    };
  }, []);

  useEffect(() => {
    console.log("Updating on count");

    return () => {
      console.log("component will unmount");
    };
  }, [counter]);
  return (
    <div>
      <h1>Counter value :{counter}</h1>
      <button
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        Increase
      </button>
      <Link href={"/"}>Home</Link>
    </div>
  );
}
