"use client";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, reset } from "@/store/counter/counterSlice";

export default function Home() {
  const state = useSelector((state) => state.counter);

  const dispatch = useDispatch();
  console.log(state);
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h1>Abc {state}</h1>

      <button
        onClick={() => {
          dispatch(increment(10));
        }}
      >
        Increment{" "}
      </button>
    </div>
  );
}
