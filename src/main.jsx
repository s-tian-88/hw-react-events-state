import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Portfolio } from './components/Portfolio'
import { Store } from './components/Store'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Store />
  </React.StrictMode>,
)
