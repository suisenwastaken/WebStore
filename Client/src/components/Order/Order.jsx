import { validateDate, validatePrice } from '../../publicFunctions'
import { useNavigate } from 'react-router-dom'
import styles from './Order.module.css'
import { devicePageURL } from '../../hoc/routerLinks'
const Order = ({ orderInfo }) => {
    const navigate = useNavigate()
    return (
        <div className={styles.Card}>
            <div className={styles.TopRow}>
                <div className={styles.OrderDate}>
                    Заказ от {validateDate(orderInfo.createdAt)}
                </div>
                <div className={styles.OrderPrice}>
                    {validatePrice(orderInfo.totalPrice) + '  ₽'}
                </div>
            </div>
            <div className={styles.BottomRow}>
                {/* <div className={styles.DeliveryDate}></div> */}
                <div className={styles.Devices}>
                    {orderInfo.devices.map((device, i) => {
                        return <img src={device.img} alt={device.name} key={i} onClick={() => navigate(devicePageURL + device.id)}/>
                    })}
                </div>
            </div>
        </div>
    )
}

export default Order
