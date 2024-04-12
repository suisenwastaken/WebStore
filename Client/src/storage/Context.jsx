import { createContext, useState } from 'react'
import UserStore from './UserStore.js'
import DeviceStore from './DeviceStore.js'
import Cart from './Cart.js'

const Context = createContext()

const ContextProvider = ({ children }) => {
    return (
        <Context.Provider
            value={{
                user: new UserStore(),
                device: new DeviceStore()
            }}
        >
            {children}
        </Context.Provider>
    )
}

export { Context, ContextProvider }
