"use client";
import { createContext, useState } from "react";

export const myContext = createContext();

export default function ContextProvider({ children }: any) {
  const [count, setCount] = useState(0);
  return (
    <myContext.Provider value={{ name: "abc", count, setCount }}>
      {children}
    </myContext.Provider>
  );
}
