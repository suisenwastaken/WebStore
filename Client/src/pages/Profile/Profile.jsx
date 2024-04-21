import { useContext, useEffect, useState } from 'react'
import styles from './Profile.module.css'
import UserContext from '../../storage/UserContext'
import { GET, Request } from '../../api/APIFile.js'
import { ORDER_URL } from '../../api/Urls.js'
import LoadingComponent from '../../components/LoadingComponent/LoadingComponent.jsx'

const Profile = () => {
    const { user } = useContext(UserContext)
    const [loading, setLoading] = useState(false)
    const [orders, setOrders] = useState()

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
                        <div className={styles.UserInfoText}>{user?.email}</div>
                        <div className={styles.UserInfoText}>
                            Заказы: {orders?.length}
                        </div>
                    </div>
                </div>
                <div className={styles.Orders}></div>
            </div>
        )
    }
}

export default Profile
