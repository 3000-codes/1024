import { useState } from 'react'
import { flushSync } from 'react-dom'

export default function StateFCCom() {
  const [count, setCount] = useState(function () {
    console.log('init');
    return 0
  })
  console.log('render');
  const handle = () => {
    console.log(count, 'before flushSync');
    flushSync(() => {
      setCount(count + 1)
      setCount(count + 1)
      setCount(count + 1)
    })
    console.log(count, 'after flushSync');
    setCount(count + 1)
    console.log(count, 'before prev');
    // setCount(prev => {
    //   return prev + 1
    // })
    setCount(prev => {
      return prev + 1
    })
    console.log(count, 'after prev');
  }
  return (
    <>
      <p>{count}</p>
      <button onClick={handle}>点击</button>
    </>

  )
}