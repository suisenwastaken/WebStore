import { createContext } from 'react'
import UserStore from './UserStore.js'
import DeviceStore from './DeviceStore.js'

const Context = createContext()

const ContextProvider = ({ children }) => {
  return (
    <Context.Provider
      value={{
        user: new UserStore(),
        device: new DeviceStore(),
      }}
    >
      {children}
    </Context.Provider>
  )
}

export { Context, ContextProvider }
