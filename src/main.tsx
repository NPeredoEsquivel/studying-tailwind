import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.js'
import './index.css'

const container: HTMLElement = document.getElementById('root')!
 
ReactDOM.createRoot(container).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
