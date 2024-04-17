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
    const navigate = useNavigate()
    const { setUser } = useContext(UserContext)
    const {setDevicesInCart} = useContext(CartContext)
    const {setDevicesInFavorite} = useContext(FavoriteContext)

    useEffect(() => {
        const getUser = async () => {
            try {
                const userResponse = await Request.send({
                    method: GET,
                    url: GET_USER_URL,
                    useToken: true,
                })
                if (userResponse) {
                    setUser(userResponse.data.userInfo.user)
                    setDevicesInCart(userResponse.data.userInfo.basketDevices)
                    setDevicesInFavorite(userResponse.data.userInfo.basketDevices)
                    SetAccessTokenCookie(userResponse.data.token)
                }
            } catch (error) {
                RemoveAccessTokenCookie()
            }
        }

        getUser()
    }, [navigate, setUser])

    return children
}

export default AuthorizedPage
