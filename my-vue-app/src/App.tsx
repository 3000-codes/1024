import { useState, useEffect } from 'react'
import { Viewer } from "cesium";
import "cesium/Build/Cesium/Widgets/widgets.css";

function App() {
  const [count, setCount] = useState(0)
  useEffect(() => {
    const viewer = new Viewer("cesiumContainer");
  }, [])


  return (
    <div id="cesiumContainer"></div>
  )
}

export default App
