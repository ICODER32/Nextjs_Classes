import React from "react";

export default async function page() {
  // Get Request
  const response = await fetch(`http://localhost:3000/api/users`);
  const data = await response.json();

  // POST request
  const response2 = await fetch("http://localhost:3000/api/users/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      id: "100",
      name: "xyz",
    }),
  });

  const data2 = await response2.json();
  console.log(data2);

  return <div>page</div>;
}
