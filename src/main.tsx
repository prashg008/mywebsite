import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

console.log('%c☕  Hey there, fellow inspector.', 'color: #c96442; font-size: 16px; font-weight: bold;')
console.log(
  '%c   Built with React + Vite + too much coffee.\n   Want to work together? → prashanthg008@gmail.com',
  'color: #87867f; font-size: 13px;',
)
console.log('%c   (psst: try the Konami code ↑↑↓↓←→←→BA)', 'color: #5e5d59; font-size: 11px; font-style: italic;')
