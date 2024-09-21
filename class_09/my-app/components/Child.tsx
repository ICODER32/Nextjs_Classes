import React from "react";
import GrandChild from "./GrandChild";

export default function Child({ data }) {
  return (
    <div>
      Child:
      <GrandChild data={data} />
    </div>
  );
}
