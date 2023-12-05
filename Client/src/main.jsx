import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Context, ContextProvider } from './storage/Context.jsx'
import { AlertProvider } from './storage/AlertContext.jsx'
import { LoginModalProvider } from './storage/LoginModalContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
    <ContextProvider>
        <LoginModalProvider>
            <AlertProvider>
                <React.StrictMode>
                    <App />
                </React.StrictMode>
            </AlertProvider>
        </LoginModalProvider>
    </ContextProvider>
)
