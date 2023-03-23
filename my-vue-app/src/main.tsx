import React from 'react'
import ReactDOM from 'react-dom/client'
import * as Cesium from 'cesium';
import "cesium/Build/Cesium/Widgets/widgets.css";
import App from './App'
import './index.css'
// window.CESIUM_BASE_URL = '/';
Cesium.Ion.defaultAccessToken = import.meta.env.VITE_CESIUM_TOKEN;
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
