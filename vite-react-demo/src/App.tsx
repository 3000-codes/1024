import { useState } from 'react'
import './App.css'

// import List from './components/List'
// import RefCom from './components/RefCom'
import StateCom from './components/StateCom'

function App() {
  const [count, setCount] = useState(0)
  // return <List />
  // return <RefCom />
  return <StateCom />
}


export default App
