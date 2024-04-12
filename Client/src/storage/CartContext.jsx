import { createContext, useState } from 'react'
import Cart from './Cart'

const CartContext = createContext()

export const CartProvider = ({ children }) => {
    const [devices, setDevices] = useState([])

    return (
        <CartContext.Provider value={{ devices, setDevices }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContext
