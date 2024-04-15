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

const AuthorizedPage = ({ children }) => {
    const navigate = useNavigate()
    const { setUser, user } = useContext(UserContext)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        const getUser = async () => {
            try {
                setLoading(true)
                const userResponse = await Request.send({
                    method: GET,
                    url: GET_USER_URL,
                    useToken: true,
                })
                if (userResponse) {
                    setUser(userResponse.data.user)
                    SetAccessTokenCookie(userResponse.data.token)
                    setLoading(false)
                }
            } catch (error) {
                console.log('Ошибка получения пользователя: ', error)
                RemoveAccessTokenCookie()
                navigate('/')
                setLoading(false)
            }
        }

        getUser()
    }, [navigate, setUser])

    return loading ? <LoadingComponent /> : children
}

export default AuthorizedPage
