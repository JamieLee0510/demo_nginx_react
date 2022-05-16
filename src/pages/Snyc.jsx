import React, { useEffect, useState } from "react";
import Layout from "../layout/Layout";

export default function Snyc() {
  const [count, setCount] = useState(0);

  const myEffect = () => {
    const I = setInterval(() => {
      setCount((x) => x + 1);
      console.log(count);
    }, 1000);
    return () => {
      clearInterval(I);
    };
  };

  useEffect(myEffect, [count]);
  return (
    <Layout>
      <h1>Sync: {count}</h1>
    </Layout>
  );
}
