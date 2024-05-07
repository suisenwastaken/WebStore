import { validateDate, validatePrice } from '../../publicFunctions'
import { useNavigate } from 'react-router-dom'
import styles from './Order.module.css'
import { devicePageURL } from '../../hoc/routerLinks'
import OrderModal from '../OrderModal/OrderModal'
import { useState } from 'react'
const Order = ({ orderInfo, onClick }) => {
    return (
        <div
            className={styles.Card}
            onClick={onClick}
        >
            <div className={styles.TopRow}>
                <div className={styles.OrderDate}>
                    Заказ от {validateDate(orderInfo.createdAt)}
                </div>
                <div className={styles.OrderPrice}>
                    {validatePrice(orderInfo.totalPrice) + '  ₽'}
                </div>
            </div>
            <div className={styles.BottomRow}>
                <div className={styles.DeliveryDate}>
                    Доставка: {validateDate(orderInfo.deliveryDate)}
                </div>
                <div className={styles.Devices}>
                    {orderInfo.devices.map((device, i) => {
                        return (
                            <img src={device.img} alt={device.name} key={i} />
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Order
