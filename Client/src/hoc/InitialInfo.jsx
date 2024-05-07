import { useNavigate } from 'react-router-dom'
import UserContext from '../storage/UserContext'
import { useContext, useEffect, useState } from 'react'
import {
    GET,
    RemoveAccessTokenCookie,
    Request,
    SetAccessTokenCookie,
} from '../api/APIFile'
import { DELIVERY_POINT_URL, GET_USER_URL } from '../api/Urls'
import LoadingComponent from '../components/LoadingComponent/LoadingComponent'
import CartContext from '../storage/CartContext'
import FavoriteContext from '../storage/FavoriteContext'
import DeliveryPointsContext from '../storage/deliveryPointsContext'

const AuthorizedPage = ({ children }) => {
    const { setUser } = useContext(UserContext)
    const { setDevicesInCart, cartDevices } = useContext(CartContext)
    const { setDevicesInFavorite } = useContext(FavoriteContext)
    const { setDeliveryPoints } = useContext(DeliveryPointsContext)
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
                    setUser(userResponse.data.userInfo.user)
                    setDevicesInCart(userResponse.data.userInfo.basketDevices)
                    setDevicesInFavorite(
                        userResponse.data.userInfo.favoriteDevices
                    )
                    SetAccessTokenCookie(userResponse.data.token)
                }

                const deliveryPointsResponse = await Request.send({
                    method: GET,
                    url: DELIVERY_POINT_URL,
                    useToken: false,
                })

                if (deliveryPointsResponse) {
                    setLoading(false)
                    const formattedDeliveryPoints =
                        deliveryPointsResponse.data.map((point) => ({
                            value: point.id,
                            label:
                                point.id === 1
                                    ? `${point.name}`
                                    : `${point.name} - ${point.address}`,
                        }))
                    setDeliveryPoints(formattedDeliveryPoints)
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
