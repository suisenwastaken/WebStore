import { createContext, useState } from 'react'
import { makeAutoObservable } from 'mobx'

class User {
    constructor() {
        this._user = null
        makeAutoObservable(this)
    }

    setUser = (user) => {
        this._user = user
    }

    get user() {
        return JSON.parse(JSON.stringify(this._user))
    }
}

const UserContext = createContext()

export const UserContextProvider = ({ children }) => {
    return (
        <UserContext.Provider value={new User()}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContext
