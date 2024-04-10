export const addDeviceToCart = (item) => {
    let cartItems = JSON.parse(localStorage.getItem('cartItems')) || []

    const newItem = Object.assign({}, item)
    delete newItem.comments
    delete newItem.device_chars
    delete newItem.description
    newItem.count = 1

    cartItems.push(newItem)
    localStorage.setItem('cartItems', JSON.stringify(cartItems))
}

export const deleteDeviceFromCart = (productId) => {
    let cartItems = JSON.parse(localStorage.getItem('cartItems')) || []
    console.log(cartItems)
    const updatedCartItems = cartItems.filter((item) => item.id !== productId)
    localStorage.setItem('cartItems', JSON.stringify(updatedCartItems))
}

export const editDeviceCountInCart = (productId, newCount) => {
    let cartItems = JSON.parse(localStorage.getItem('cartItems')) || []
    const updatedCartItems = cartItems
        .map((item) => {
            if (item.id === productId) {
                if (newCount === 0) {
                    return null
                }
                return { ...item, count: newCount }
            }
            return item
        })
        .filter(Boolean)
    localStorage.setItem('cartItems', JSON.stringify(updatedCartItems))
}

export const getDeviceCountInCart = (productId) => {
    let cartItems = JSON.parse(localStorage.getItem('cartItems')) || []
    const item = cartItems.find((item) => item.id === productId)
    return item ? item.count : 0
}

export const isDeviceInCart = (productId) =>{
    let cartItems = JSON.parse(localStorage.getItem('cartItems')) || []
    const item = cartItems.find((item) => item.id === productId)
    return item ? true : false
}

export const getDevicesFromCart = () => {
    return JSON.parse(localStorage.getItem('cartItems'))
}

export const clearDevicesFromCart = () => {
    localStorage.removeItem('cartItems')
}
