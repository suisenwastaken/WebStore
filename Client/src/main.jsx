import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { AlertProvider } from './storage/AlertContext.jsx'
import { UserContextProvider } from './storage/UserContext.jsx'
import { CartProvider } from './storage/CartContext.jsx'
import { FavoriteProvider } from './storage/FavoriteContext.jsx'
import InitialInfo from './hoc/InitialInfo.jsx'
import { LoginModalProvider } from './storage/LoginModalContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
    <UserContextProvider>
        <CartProvider>
            <FavoriteProvider>
                <AlertProvider>
                    <LoginModalProvider>
                        <InitialInfo>
                            <React.StrictMode>
                                <App />
                            </React.StrictMode>
                        </InitialInfo>
                    </LoginModalProvider>
                </AlertProvider>
            </FavoriteProvider>
        </CartProvider>
    </UserContextProvider>
)
