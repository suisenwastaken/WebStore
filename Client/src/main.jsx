import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Context, ContextProvider } from './storage/Context.jsx'
import { AlertProvider } from './storage/AlertContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <ContextProvider>
    <AlertProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
    </AlertProvider>
  </ContextProvider>
)
