import { useNavigate } from 'react-router-dom'
import UserContext from '../storage/UserContext'
import { useContext, useEffect, useState } from 'react'
import {
    GET,
    RemoveAccessTokenCookie,
    Request,
    SetAccessTokenCookie,
} from '../api/APIFile'
import { GET_USER_URL, LOGIN_REFRESH } from '../api/Urls'
import LoadingComponent from '../components/LoadingComponent/LoadingComponent'
import CartContext from '../storage/CartContext'
import FavoriteContext from '../storage/FavoriteContext'
import { storeURL } from './routerLinks'

const AuthorizedPage = ({ children }) => {
    const navigate = useNavigate()
    const { setUser } = useContext(UserContext)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        const getUser = async () => {
            try {
                setLoading(true)
                const userResponse = await Request.send({
                    method: GET,
                    url: LOGIN_REFRESH,
                    useToken: true,
                })
                if (userResponse) {
                    SetAccessTokenCookie(userResponse.data.token)
                    setLoading(false)
                }
            } catch (error) {
                console.log('Ошибка получения пользователя: ', error)
                RemoveAccessTokenCookie()
                navigate(storeURL)
                setLoading(false)
            }
        }

        getUser()
    }, [navigate, setUser])

    return loading ? <LoadingComponent /> : children
}

export default AuthorizedPage
