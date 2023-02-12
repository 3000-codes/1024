import { useState } from 'react'
import './App.css'

// import List from './components/List'
// import RefCom from './components/RefCom'
// import StateCom from './components/StateCom'
// import TouchCom from './components/TouchCom'
import LoopBinding from './components/LoopBinding'

function App() {
  const [count, setCount] = useState(0)
  // return <List />
  // return <RefCom />
  // return <StateCom />
  // return <TouchCom />
  return <LoopBinding />
}


export default App
