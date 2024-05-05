import { useContext, useEffect, useState } from 'react'
import styles from './Profile.module.css'
import UserContext from '../../storage/UserContext'
import { GET, RemoveAccessTokenCookie, Request } from '../../api/APIFile.js'
import { ORDER_URL } from '../../api/Urls.js'
import LoadingComponent from '../../components/LoadingComponent/LoadingComponent.jsx'
import Order from '../../components/Order/Order.jsx'
import EmptyComponent from '../../components/EmptyComponent/EmptyComponent.jsx'
import CustomButton from '../../components/CustomButton/CustomButton.jsx'
import { BiLogOut } from 'react-icons/bi'
import AlertContext from '../../storage/AlertContext.jsx'
import AlertState from '../../components/Alert/AlertState.js'
import { useNavigate } from 'react-router-dom'
import { storeURL } from '../../hoc/routerLinks.js'

const Profile = () => {
    const { user } = useContext(UserContext)
    const [loading, setLoading] = useState(false)
    const [orders, setOrders] = useState()
    const {setAlert} = useContext(AlertContext)
    const {setUser} = useContext(UserContext)
    const navigate = useNavigate()
    useEffect(() => {
        const getOrders = async () => {
            setLoading(true)
            try {
                const orderResponse = await Request.send({
                    method: GET,
                    url: ORDER_URL,
                    useToken: true,
                })
                if (orderResponse) {
                    setOrders(orderResponse.data)
                }
                setLoading(false)
            } catch {
                setLoading(false)
            }
        }
        getOrders()
    }, [])

    if (loading) {
        return <LoadingComponent />
    } else {
        return (
            <div className={styles.Page}>
                <div className={styles.LeftSide}>
                    <div className={styles.PersonalInfo}>
                        <div className={styles.UserHeader}>
                            <img
                                src={
                                    'https://api.dicebear.com/8.x/initials/svg?seed=' +
                                    user?.name
                                }
                                alt="Profile picture"
                            />
                            <div className={styles.UserName}>{user?.name}</div>
                        </div>
                        <div className={styles.UserInfo}>
                            <div className={styles.UserInfoText}>
                                {user?.email}
                            </div>
                            <div className={styles.UserInfoText}>
                                Заказы: {orders?.length}
                            </div>
                        </div>
                    </div>
                    <CustomButton
                        text={'Выйти из аккаунта'}
                        type={'lightRed'}
                        icon={<BiLogOut />}
                        style={{width: '100%',}}
                        pStyle={{ display: 'flex', flexDirection: 'row-reverse',}}
                        onClick={() => {
                            RemoveAccessTokenCookie()
                            setAlert(AlertState.logoutSuccess)
                            setUser(null)
                            navigate(storeURL)
                        }}
                    />
                </div>
                {orders?.length === 0 ||
                orders === undefined ||
                orders === null ? (
                    <EmptyComponent type={'orders'} />
                ) : (
                    <div className={styles.Orders}>
                        <div className={styles.h1}>Ваши заказы:</div>
                        <div className={styles.OrderList}>
                            {orders?.map((order, i) => (
                                <Order orderInfo={order} key={i} />
                            ))}
                        </div>
                    </div>
                )}
            </div>
        )
    }
}

export default Profile
