import React from 'react'
import ReactDOM from 'react-dom/client'
import { loadSlim } from "@tsparticles/slim";
import { tsParticles } from "@tsparticles/engine";
import App from './App.tsx'
import './index.css'

loadSlim(tsParticles);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)