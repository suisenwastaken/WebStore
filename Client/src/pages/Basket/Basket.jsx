import { useEffect, useState } from 'react'
import styles from './Basket.module.css'
import { getDevicesFromCart } from '../../localStorage/cartDeviceStorage'
import CardSmall from '../../components/CardSmall/CardSmall'
import DevicePay from '../../components/DevicePay/DevicePay'

const Basket = () => {
    const [devices, setDevices] = useState([])
    const [payObject, setPayObject] = useState()

    useEffect(() => {
        setDevices(getDevicesFromCart())
    }, [])

    useEffect(() => {
        setPayObject({
            id: 0,
            price: totalPrice,
            deliveryHome: latestDates?.deliveryHome,
            deliveryPoint: latestDates?.deliveryPoint,
        })
    }, [devices])

    const totalPrice = devices?.reduce((price, item) => {
        return price + item.price * item.count
    }, 0)

    const latestDates = devices?.reduce(
        (latest, currentItem) => {
            const homeDate = currentItem.deliveryHome
            const pointDate = currentItem.deliveryPoint

            if (!latest.deliveryHome || homeDate > latest.deliveryHome) {
                latest.deliveryHome = homeDate
            }

            if (!latest.deliveryPoint || pointDate > latest.deliveryPoint) {
                latest.deliveryPoint = pointDate
            }

            return latest
        },
        { deliveryHome: null, deliveryPoint: null }
    )

    return (
        <div className={styles.Page}>
            <div className={styles.h1}>Корзина</div>
            <div className={styles.CenterBlock}>
                <div className={styles.LeftBlock}>
                    <div className={styles.h2}>
                        Доставка курьером или в пункт выдачи
                    </div>
                    <div className={styles.deviceRows}>
                        {devices &&
                            devices.map((e) => (
                                <CardSmall device={e} key={e.id} />
                            ))}
                    </div>
                </div>
                {payObject && (
                    <DevicePay
                        type={'cart'}
                        deviceInfo={payObject}
                        buttonText={'Оформить заказ'}
                        style={{ boxShadow: 'none' }}
                    />
                )}
            </div>
        </div>
    )
}

export default Basket
