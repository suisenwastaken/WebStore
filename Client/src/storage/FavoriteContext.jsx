import { createContext, useState } from 'react'

import { makeAutoObservable } from 'mobx'
import { POST, Request } from '../api/APIFile'
import { FAVORITES_URL } from '../api/Urls'

class Favorite {
    constructor() {
        this._favoriteDevices = null
        makeAutoObservable(this)
    }

    setDevicesInFavorite = (devices) => {
        this._favoriteDevices = devices
    }

    addDeviceToFavorite = async (device) => {
        this._favoriteDevices.push(device)
        const response = await Request.send({
            method: POST,
            url: FAVORITES_URL,
            data: { deviceId: device.id },
            useToken: true,
        })
    }

    deleteDeviceFromFavorite = async (deviceId) => {
        const index = this._favoriteDevices.findIndex(
            (device) => device.id === deviceId
        )
        if (index !== -1) {
            this._favoriteDevices.splice(index, 1)
            const response = await Request.send({
                method: POST,
                url: FAVORITES_URL,
                data: { deviceId },
                useToken: true,
            })
        }
    }

    isDeviceInFavorite = (deviceId) => {
        const item = this._favoriteDevices?.find((item) => item.id === deviceId)
        return item ? true : false
    }

    get favoriteDevices() {
        console.log(this._favoriteDevices)
        return JSON.parse(JSON.stringify(this._favoriteDevices))
    }
}

const FavoriteContext = createContext()

export const FavoriteProvider = ({ children }) => {
    return (
        <FavoriteContext.Provider value={new Favorite()}>
            {children}
        </FavoriteContext.Provider>
    )
}

export default FavoriteContext
