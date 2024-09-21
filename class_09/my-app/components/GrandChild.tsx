import React, { useState } from "react";
import { useContext } from "react";
import { myContext } from "@/stateProvider/Provider";

export default function GrandChild({ data }) {
  const state = useContext(myContext);
  console.log(state);
  //   function abc() {
  //     useState(2);
  //   }
  //   abc();
  return <div>GrandChild :{data}</div>;
}
