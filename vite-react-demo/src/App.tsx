import { useState } from 'react'
import './App.css'

// import List from './components/List'
// import RefCom from './components/RefCom'
// import StateCom from './components/StateCom'
// import TouchCom from './components/TouchCom'
// import LoopBinding from './components/LoopBinding'
// import EventCom from './components/EventCom'
// import EffectCom from './components/EffectCom'
// import LayoutEfCom from './components/LayoutEfCom'
import Form from './components/Form'
function App() {
  const [count, setCount] = useState(0)
  // return <List />
  // return <RefCom />
  // // return <StateCom />
  // return <TouchCom />
  // return <LoopBinding />
  // return <EventCom />
  // return <EffectCom  count={18}/>
  // return <LayoutEfCom count={count} />
  return <Form />
}


export default App
