import { createContext, useState } from 'react'

const DevicePageContext = createContext()

export const DevicePageProvider = ({ children }) => {
    const [cartButton, setCartButton] = useState(false)
    const [paymentState, setPaymentState] = useState('')
    const [colorState, setColorState] = useState('')
    const [creditState, setCreditState] = useState(0)
    const [deviceInfo, setDeviceInfo] = useState({})

    return (
        <DevicePageContext.Provider
            value={{
                cartButton,
                setCartButton,
                paymentState,
                setPaymentState,
                colorState,
                setColorState,
                creditState,
                setCreditState,
                deviceInfo,
                setDeviceInfo,
            }}
        >
            {children}
        </DevicePageContext.Provider>
    )
}

export default DevicePageContext
