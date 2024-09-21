import React from "react";

export default function Todo({ data, removeTodo }) {
  return (
    <div className="flex w-full items-center justify-between bg-cyan-300">
      <p>{data}</p>
      <button onClick={() => removeTodo(data)}>Delete</button>
      {/* <Component/> */}
    </div>
  );
}
