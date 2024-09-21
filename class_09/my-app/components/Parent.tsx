import React from "react";
import Child from "./Child";

export default function Parent({ data }) {
  return (
    <div>
      Parent:
      <Child data={data} />
    </div>
  );
}
