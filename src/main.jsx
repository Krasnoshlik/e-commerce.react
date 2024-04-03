import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ToastContainer } from 'react-toastify'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <ToastContainer  autoClose={1000} hideProgressBar={true} newestOnTop={false} closeOnClick/>
  </React.StrictMode>,
)
