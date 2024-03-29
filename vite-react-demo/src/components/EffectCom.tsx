import { useState, useEffect } from "react";

export default function EffectCom(props: any) {
  const [count, setCount] = useState(props.count || 0);
  const [num, setNum] = useState(0)
  useEffect(() => {
    console.log('effect00');
    // return () => {
    //   console.log('unmount01');
    // }
  })
  useEffect(() => {
    console.log('effect01');
    // return () => {
    //   console.log('unmount01');
    // }
  }, [])
  useEffect(() => {
    console.log("effect02");
    return () => {
      console.log("unmount02");
    };
  }, [count]);
  useEffect(() => {
    console.log("effect03");
    return () => {
      console.log("unmount03");
    };
  }, [num]);
  return (
    <div>
      <p>count: {count}</p>
      <button onClick={() => setCount(10)}>add</button>
      <p>num: {num}</p>
      <button onClick={() => setNum(num + 1)}>add</button>
    </div>
  );
}