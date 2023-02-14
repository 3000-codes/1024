import { useLayoutEffect, useState } from "react";

export default function LayoutEfCom(props: any) {
  const [count, setCount] = useState(props.count || 0);
  const [num, setNum] = useState(0)
  useLayoutEffect(() => {
    console.log('layoutEffect00');
    // return () => {
    //   console.log('unmount01');
    // }
  })
  useLayoutEffect(() => {
    console.log('layoutEffect01');
    // return () => {
    //   console.log('unmount01');
    // }
  }, [])
  useLayoutEffect(() => {
    console.log("layoutEffect02");
    return () => {
      console.log("unmount02");
    };
  }, [count]);
  useLayoutEffect(() => {
    console.log("layoutEffect03");
    return () => {
      console.log("unmount03");
    };
  }, [num]);
  return (
    <div>
      <p>count: {count}</p>
      <button onClick={() => setCount(10)}>add</button>
      <p>num: {num}</p></div>
  );
}