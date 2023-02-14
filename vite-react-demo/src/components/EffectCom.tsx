import { useState, useEffect } from "react";

export default function EffectCom(props: any) {
  const [count, setCount] = useState(props.count || 0);
  useEffect(() => {
    console.log('effect01');
    return () => {
      console.log('unmount01');
    }
  })
  useEffect(() => {
    console.log("effect02");
    return () => {
      console.log("unmount02");
    };
  }, [count]);
  return (
    <div>
      <p>count: {count}</p>
      <button onClick={() => setCount(count + 1)}>add</button>
    </div>
  );
}