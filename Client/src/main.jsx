import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { AlertProvider } from './storage/AlertContext.jsx'
import { UserContextProvider } from './storage/UserContext.jsx'
import { CartProvider } from './storage/CartContext.jsx'
import { FavoriteProvider } from './storage/FavoriteContext.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
    <UserContextProvider>
        <CartProvider>
            <FavoriteProvider>
                <AlertProvider>
                    <React.StrictMode>
                        <App />
                    </React.StrictMode>
                </AlertProvider>
            </FavoriteProvider>
        </CartProvider>
    </UserContextProvider>
)
