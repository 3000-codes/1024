import { useState } from 'react'
import Board from './components/Board'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="game">
      <div className="game-board">
        <Board />
      </div>
      <div className="game-info">
        <div>{/* status */}</div>
        <ol>{/* TODO */}</ol>
      </div>
    </div>
  )
}

export default App
