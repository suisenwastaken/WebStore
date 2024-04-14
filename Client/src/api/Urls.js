export const LOGIN_URL = import.meta.env.VITE_API + '/user/login'
export const LOGIN_REFRESH = import.meta.env.VITE_API + '/user/auth'
export const GET_USER_URL = import.meta.env.VITE_API + '/user'
export const REGISTRATION_URL = import.meta.env.VITE_API + '/user/registration'

export const DEVICE_URL = import.meta.env.VITE_API + '/device'
export const DEVICE_BY_ID_URL = (id) => import.meta.env.VITE_API + '/device/' + id

export const TYPE_URL = import.meta.env.VITE_API + '/type'
export const BRAND_URL = import.meta.env.VITE_API + '/brand'

export const ADD_FAVORITES_URL = (id) => import.meta.env.VITE_API + '/favorites' + id
export const FAVORITES_URL = import.meta.env.VITE_API + '/favorites'

export const ORDER_URL = import.meta.env.VITE_API + '/order'
