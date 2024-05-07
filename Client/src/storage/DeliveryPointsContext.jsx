import { createContext, useState } from 'react'
import { makeAutoObservable } from 'mobx'

class deliveryPoints {
    constructor() {
        this._deliveryPoints = null
        makeAutoObservable(this)
    }

    setDeliveryPoints = (deliveryPoints) => {
        this._deliveryPoints = deliveryPoints
    }

    get deliveryPoints() {
        return JSON.parse(JSON.stringify(this._deliveryPoints))
    }
}

const DeliveryPointsContext = createContext()

export const DeliveryPointsContextProvider = ({ children }) => {
    return (
        <DeliveryPointsContext.Provider value={new deliveryPoints()}>
            {children}
        </DeliveryPointsContext.Provider>
    )
}

export default DeliveryPointsContext
