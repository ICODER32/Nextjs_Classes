"use client";
import Parent from "@/components/Parent";
import React, { useState } from "react";

export default function page() {
  const [data, setData] = useState("123");
  return (
    <div>
      <Parent data={data} />
    </div>
  );
}
