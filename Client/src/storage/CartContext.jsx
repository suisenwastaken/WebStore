import { createContext, useState } from 'react'

import { makeAutoObservable } from 'mobx'

class Cart {
    constructor() {
        this._cartDevices = []
        makeAutoObservable(this)
    }

    addDeviceToCart(device) {
        this._cartDevices.push(device)
    }

    deleteDeviceFromCart(data) {
        this._cartDevices.splice(data, 1)
    }

    get cartDevices() {
        return this._cartDevices
    }

    get cartCount() {
        return this._cartDevices.length
    }
}

const CartContext = createContext()

export const CartProvider = ({ children }) => {
    return (
        <CartContext.Provider value={new Cart()}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContext
