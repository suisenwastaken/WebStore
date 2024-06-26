import { useContext, useEffect, useState } from 'react'
import styles from './Basket.module.css'
import CardSmall from '../../components/CardSmall/CardSmall'
import DevicePay from '../../components/DevicePay/DevicePay'
import CartContext from '../../storage/CartContext'
import EmptyComponent from '../../components/EmptyComponent'
import DeliveryModal from '../../components/DeliveryModal/DeliveryModal'
import OrderModal from '../../components/OrderModal/OrderModal'
import { useNavigate } from 'react-router-dom'
import { storeURL } from '../../hoc/routerLinks'

const Basket = () => {
    const { cartDevices } = useContext(CartContext)
    const navigate = useNavigate()
    const [devices, setDevices] = useState()
    const [payObject, setPayObject] = useState()
    const [totalPrice, setTotalPrice] = useState()
    const [isDeliveryModalShown, setIsDeliveryModalShown] = useState(false)
    const [isOrderModalShown, setIsOrderModalShown] = useState(false)
    const [order, setOrder] = useState()

    useEffect(() => {
        console.log(order)
        console.log(isOrderModalShown)
    }, [order, isOrderModalShown])

    useEffect(() => {
        setTotalPrice(
            cartDevices?.reduce((price, item) => {
                return price + item.price * item.count
            }, 0)
        )
    }, [devices])

    useEffect(() => {
        setPayObject({
            id: 0,
            price: totalPrice,
            deliveryHome: latestDates?.deliveryHome,
            deliveryPoint: latestDates?.deliveryPoint,
        })
    }, [totalPrice])

    const latestDates = cartDevices?.reduce(
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

    if (
        cartDevices?.length === 0 ||
        cartDevices === undefined ||
        cartDevices === null
    ) {
        return (
            <div className={styles.Page} style={{ justifyContent: 'center' }}>
                <EmptyComponent type={'basket'} />
                <OrderModal
                    isModalShown={isOrderModalShown}
                    setIsModalShown={setIsOrderModalShown}
                    orderInfo={order}
                    type={'newOrder'}
                />
            </div>
        )
    } else {
        return (
            <div className={styles.Page}>
                <div className={styles.h1}>Корзина</div>
                <div className={styles.CenterBlock}>
                    <div className={styles.LeftBlock}>
                        <div className={styles.h2}>
                            Доставка курьером или в пункт выдачи
                        </div>
                        <div className={styles.deviceRows}>
                            {cartDevices?.map((e) => {
                                return (
                                    <CardSmall
                                        device={e}
                                        key={e.id}
                                        onCountChange={() =>
                                            setDevices(cartDevices)
                                        }
                                    />
                                )
                            })}
                        </div>
                    </div>
                    {payObject && (
                        <DevicePay
                            type={'cart'}
                            deviceInfo={payObject}
                            buttonText={'Выбрать доставку'}
                            style={{ boxShadow: 'none' }}
                            setDeliveryModal={setIsDeliveryModalShown}
                        />
                    )}
                </div>
                <DeliveryModal
                    isModalShown={isDeliveryModalShown}
                    setIsModalShown={setIsDeliveryModalShown}
                    deliveryDates={latestDates}
                    setIsNextModalShown={setIsOrderModalShown}
                    setOrder={setOrder}
                />
            </div>
        )
    }
}

export default Basket
