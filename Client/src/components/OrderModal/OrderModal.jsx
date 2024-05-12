import { useContext, useEffect } from 'react'
import { validateDate, validatePrice } from '../../publicFunctions'
import styles from './OrderModal.module.css'
import DeliveryPointsContext from '../../storage/deliveryPointsContext'
import UserContext from '../../storage/UserContext'
import CardSmall from '../CardSmall/CardSmall'
import { useNavigate } from 'react-router-dom'
import { storeURL } from '../../hoc/routerLinks'
import OrderStatus from '../OrderStatus'

const OrderModal = ({ isModalShown, setIsModalShown, orderInfo, type }) => {
    const { deliveryPoints } = useContext(DeliveryPointsContext)
    const { user } = useContext(UserContext)
    const navigate = useNavigate()

    useEffect(() => {
        console.log(isModalShown)
        console.log(orderInfo)
    }, [isModalShown, orderInfo])

    if (isModalShown)
        return (
            <div
                className={styles.ModalWindow}
                onClick={(e) => {
                    e.stopPropagation()
                    setIsModalShown(false)
                    if (type === 'newOrder') {
                        navigate(storeURL)
                    }
                }}
            >
                <div
                    className={styles.CenterBlock}
                    onClick={(e) => e.stopPropagation()}
                >
                    <div className={styles.OrderHead}>
                        <div className={styles.h2}>Заказ </div>
                        <div className={styles.OrderNumber}>
                            № {orderInfo.id}
                        </div>
                        {type === 'newOrder' ? (
                            <div className={styles.h2}> успешно размещен! </div>
                        ) : (
                            <OrderStatus statusId={orderInfo.orderStatus} />
                        )}
                    </div>

                    <div className={styles.OrderInfo}>
                        <div className={styles.h3}>
                            {orderInfo.deliveryPointId === 1
                                ? 'Доставка на дом'
                                : 'Самовывоз из пункта выдачи'}
                        </div>
                        <div className={styles.OrderInfoText}>
                            {validateDate(orderInfo.deliveryDate)}
                        </div>
                    </div>

                    <div className={styles.OrderInfo}>
                        <div className={styles.h3}>Адрес доставки</div>
                        <div className={styles.OrderInfoText}>
                            {orderInfo.deliveryPointId === 1
                                ? orderInfo.homeDeliveryAddress
                                : deliveryPoints?.find(
                                      (el) =>
                                          orderInfo.deliveryPointId === el.value
                                  )?.label}
                        </div>
                    </div>

                    <div className={styles.OrderInfo}>
                        <div className={styles.h3}>Получатель</div>
                        <div className={styles.OrderInfoText}>{user.name}</div>
                    </div>

                    <div className={styles.OrderDevices}>
                        {orderInfo.devices.map((el, i) => (
                            <CardSmall key={i} device={el} type="passive" />
                        ))}
                    </div>

                    <div className={styles.TotalPrice}>
                        <div className={styles.PriceTitle}>Итого</div>
                        <div className={styles.Price}>
                            {'₽ ' + validatePrice(orderInfo.totalPrice)}
                        </div>
                    </div>
                </div>
            </div>
        )
}

export default OrderModal
