import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles.css'
import { Header } from './components/Header'
import { Calculadora } from './components/Calculadora'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header/>
    <Calculadora/>
  </React.StrictMode>
)
