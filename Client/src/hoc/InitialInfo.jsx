import { useNavigate } from 'react-router-dom'
import UserContext from '../storage/UserContext'
import { useContext, useEffect, useState } from 'react'
import {
    GET,
    RemoveAccessTokenCookie,
    Request,
    SetAccessTokenCookie,
} from '../api/APIFile'
import { GET_USER_URL } from '../api/Urls'
import LoadingComponent from '../components/LoadingComponent/LoadingComponent'
import CartContext from '../storage/CartContext'
import FavoriteContext from '../storage/FavoriteContext'

const AuthorizedPage = ({ children }) => {
    const { setUser } = useContext(UserContext)
    const { setDevicesInCart, cartDevices } = useContext(CartContext)
    const { setDevicesInFavorite } = useContext(FavoriteContext)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        const getUser = async () => {
            setLoading(true)
            try {
                const userResponse = await Request.send({
                    method: GET,
                    url: GET_USER_URL,
                    useToken: true,
                })
                if (userResponse) {
                    setLoading(false)
                    setUser(userResponse.data.userInfo.user)
                    setDevicesInCart(userResponse.data.userInfo.basketDevices)
                    setDevicesInFavorite(
                        userResponse.data.userInfo.favoriteDevices
                    )
                    SetAccessTokenCookie(userResponse.data.token)
                }
            } catch (error) {
                setLoading(false)
                RemoveAccessTokenCookie()
            }
        }

        getUser()
    }, [setUser])

    return loading ? <LoadingComponent /> : children
}

export default AuthorizedPage
