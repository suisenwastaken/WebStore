import { createContext, useState } from 'react'

import { makeAutoObservable } from 'mobx'
import { POST, Request } from '../api/APIFile'
import { BASKET_URL } from '../api/Urls'

class Cart {
    constructor() {
        this._cartDevices = null
        makeAutoObservable(this)
    }

    setDevicesInCart = (devices) => {
        this._cartDevices = devices
    }

    addDeviceToCart = async (device) => {
        this._cartDevices.push(device)
        const response = await Request.send({
            method: POST,
            url: BASKET_URL,
            data: { deviceId: device.id },
            useToken: true,
        })
    }

    deleteDeviceFromCart = async (deviceId) => {
        this._cartDevices.splice(deviceId, 1)
        const response = await Request.send({
            method: POST,
            url: BASKET_URL,
            data: { deviceId },
            useToken: true,
        })
    }

    isDeviceInCart = (deviceId) => {
        const item = this._cartDevices?.find((item) => item.id === deviceId)
        return item ? true : false
    }

    get cartDevices() {
        return this._cartDevices
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
