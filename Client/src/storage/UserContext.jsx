import { createContext, useState } from 'react'

const UserContext = createContext()

export const UserContextProvider = ({ children }) => {
    const [globalUser, setGlobalUser] = useState(null)
    return (
        <UserContext.Provider
            value={[globalUser, setGlobalUser]}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContext
