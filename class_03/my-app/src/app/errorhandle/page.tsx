import React from "react";

export default async function page() {
  //   throw new Error("I crashed!");
  await delay();
  return <div>page </div>;
}

const delay = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("done");
    }, 3000);
  });
};
