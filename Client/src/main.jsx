import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { AlertProvider } from './storage/AlertContext.jsx'
import { UserContextProvider } from './storage/UserContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
        <UserContextProvider>
                <AlertProvider>
                    <React.StrictMode>
                        <App />
                    </React.StrictMode>
                </AlertProvider>
        </UserContextProvider>
)
