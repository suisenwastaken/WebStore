export const addDeviceToCart = (item) => {
    let cartItems = JSON.parse(localStorage.getItem('cartItems')) || []
    cartItems.push(item)
    localStorage.setItem('cartItems', JSON.stringify(cartItems))
}

export const deleteDeviceFromCart = (productId) => {
    let cartItems = JSON.parse(localStorage.getItem('cartItems')) || []
    console.log(cartItems)
    const index = cartItems.filter(item => item.id === productId);
    if (index !== -1) {
        cartItems.splice(index, 1)
        localStorage.setItem('cartItems', JSON.stringify(cartItems))
    }
}

export const getDevicesFromCart = () => {
    return JSON.parse(localStorage.getItem('cartItems'))
}

export const clearDevicesFromCart = () => {
    localStorage.removeItem('cartItems')
}
