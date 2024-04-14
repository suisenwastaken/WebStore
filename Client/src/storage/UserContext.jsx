import { createContext, useState } from 'react'
import { makeAutoObservable } from 'mobx'

class User {
    constructor() {
        this._isAuth = false
        this._user = {
            id: null,
            email: null,
            role: null,
        }
        makeAutoObservable(this)
    }

    setIsAuth(bool) {
        this._isAuth = bool
    }

    setUser(user) {
        this._user = user
    }

    get isAuth() {
        return this._isAuth
    }

    get user() {
        return this._user
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
