import React from "react";

export default function Mobile(props: any) {
  const mobname = props.params.mobilename;
  return <div>{mobname}</div>;
}
