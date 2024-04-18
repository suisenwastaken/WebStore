import { createContext, useState } from 'react'

import { makeAutoObservable } from 'mobx'
import { POST, Request } from '../api/APIFile'
import { BASKET_UPDATE_COUNT_URL, BASKET_URL } from '../api/Urls'

class Cart {
    constructor() {
        this._cartDevices = null
        makeAutoObservable(this)
    }

    setDevicesInCart = (devices) => {
        this._cartDevices = devices
    }

    addDeviceToCart = async (device) => {
        this._cartDevices.push({ count: 1, ...device })
        const response = await Request.send({
            method: POST,
            url: BASKET_URL,
            data: { deviceId: device.id },
            useToken: true,
        })
    }

    deleteDeviceFromCart = async (deviceId) => {
        const index = this._cartDevices.findIndex(
            (device) => device.id === deviceId
        )
        if (index !== -1) {
            this._cartDevices.splice(index, 1)
            const response = await Request.send({
                method: POST,
                url: BASKET_URL,
                data: { deviceId },
                useToken: true,
            })
        }
    }

    isDeviceInCart = (deviceId) => {
        const item = this._cartDevices?.find((item) => item.id === deviceId)
        return item ? true : false
    }

    getDeviceCountInCart = (deviceId) => {
        const item = this._cartDevices?.find((item) => item.id === deviceId)
        return item ? item.count : 0
    }

    editDeviceCountInCart = async (deviceId, newCount) => {
        console.log(deviceId, newCount)
        const index = this._cartDevices?.findIndex(
            (item) => item.id === deviceId
        )
        if (index !== -1) {
            if (newCount === 0) {
                this.deleteDeviceFromCart(deviceId)
            } else {
                this._cartDevices[index].count = newCount
                const response = await Request.send({
                    method: POST,
                    url: BASKET_UPDATE_COUNT_URL,
                    data: { deviceId, count: newCount },
                    useToken: true,
                })
            }
        }
    }

    get cartDevices() {
        return JSON.parse(JSON.stringify(this._cartDevices))
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
