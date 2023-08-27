import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './components/Header'
import Router from './Router'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Header />
    <Router />
  </React.StrictMode>,
)
