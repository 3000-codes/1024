import React from 'react'
import ReactDOM, { createRoot } from 'react-dom/client'
import 'reset-css';
import App from './App'
import './index.css'


createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
