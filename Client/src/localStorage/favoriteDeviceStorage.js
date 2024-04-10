export const addDeviceToFavorite = (item) => {
    let favoriteItems = JSON.parse(localStorage.getItem('favoriteItems')) || []

    const newItem = Object.assign({}, item)
    delete newItem.comments
    delete newItem.device_chars
    delete newItem.description

    favoriteItems.push(newItem)
    localStorage.setItem('favoriteItems', JSON.stringify(favoriteItems))
}

export const deleteDeviceFromFavorite  = (productId) => {
    let favoriteItems = JSON.parse(localStorage.getItem('favoriteItems')) || []
    console.log(favoriteItems)
    const updatedFavoriteItems = favoriteItems.filter((item) => item.id !== productId)
    localStorage.setItem('favoriteItems', JSON.stringify(updatedFavoriteItems))
}

export const isDeviceInFavorite = (productId) =>{
    let cartItems = JSON.parse(localStorage.getItem('favoriteItems')) || []
    const item = cartItems.find((item) => item.id === productId)
    return item ? true : false
}

export const getDevicesFromFavorite = () => {
    return JSON.parse(localStorage.getItem('favoriteItems'))
}

export const clearDevicesFromFavorite = () => {
    localStorage.removeItem('favoriteItems')
}
