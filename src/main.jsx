import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles.css'
import { GrasaCorporalApp } from './GrasaCorporalApp'
import { GrasaCorporalProvider } from './context/GrasaCorporalProvider'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GrasaCorporalProvider>
      <GrasaCorporalApp />
    </GrasaCorporalProvider>
  </React.StrictMode>
)
