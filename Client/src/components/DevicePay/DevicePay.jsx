import styles from './DevicePay.module.css'
import { BiSolidDiscount } from 'react-icons/bi'
import { useContext, useEffect, useState } from 'react'
import AlertContext from '../../storage/AlertContext'
import CustomButton from '../CustomButton'
import { validateDate, validatePrice } from '../../publicFunctions'
import CustomButtonCounter from '../CustomButtonCounter'
import CartContext from '../../storage/CartContext'
import UserContext from '../../storage/UserContext'
import AlertState from '../Alert/AlertState'

const DevicePay = ({
    deviceInfo,
    style,
    buttonText,
    type,
    setDeliveryModal,
}) => {
    const { setAlert } = useContext(AlertContext)
    const { addDeviceToCart, getDeviceCountInCart, editDeviceCountInCart } =
        useContext(CartContext)
    const { user } = useContext(UserContext)

    const [deviceCount, setDeviceCount] = useState(null)

    useEffect(() => {
        const count = getDeviceCountInCart(deviceInfo?.id)
        setDeviceCount(count)
    }, [deviceInfo?.id])

    const handleCreateOrder = () => {
        setDeliveryModal(true)
    }

    const handleAddToCart = () => {
        if (!user) {
            setAlert(AlertState.notAuthorized)
            return
        }
        addDeviceToCart(deviceInfo)
        setDeviceCount((prevCount) => (prevCount === null ? 1 : prevCount + 1))
        setAlert(AlertState.addedToCart)
    }

    const handleChangeCount = (newCount) => {
        if (!user) {
            setAlert(AlertState.notAuthorized)
            return
        }
        if (newCount === 0) {
            setAlert(AlertState.deletedFromCart)
        }
        setDeviceCount(newCount)
        editDeviceCountInCart(deviceInfo.id, newCount)
    }

    return (
        <>
            <div className={styles.PriceBlock} style={style}>
                <div className={styles.Prices}>
                    <div className={styles.PriceRow}>
                        <div
                            className={styles.PriceText}
                            style={
                                type === 'cart'
                                    ? { display: 'flex' }
                                    : { display: 'none' }
                            }
                        >
                            Итого:
                        </div>
                        <div className={styles.PriceNow}>
                            ₽ {validatePrice(deviceInfo?.price)}
                        </div>
                        {deviceInfo?.salePercent ? (
                            <div className={styles.Discount}>
                                <BiSolidDiscount />-{deviceInfo?.salePercent}%
                            </div>
                        ) : (
                            ''
                        )}
                    </div>
                    {deviceInfo?.salePercent ? (
                        <div className={styles.LastPrice}>
                            ₽{' '}
                            {validatePrice(
                                Math.round(
                                    deviceInfo.price /
                                        (1 - deviceInfo.salePercent * 0.01)
                                )
                            )}
                        </div>
                    ) : (
                        ''
                    )}
                </div>

                <div className={styles.Delivery}>
                    Доставка:
                    <div className={styles.DeliveryRow}>
                        <div className={styles.DeliveryVariant}>
                            В пункт выдачи
                        </div>
                        <div className={styles.Dots}></div>
                        <div className={styles.DeliveryData}>
                            {validateDate(deviceInfo?.deliveryPoint)}
                        </div>
                    </div>
                    <div className={styles.DeliveryRow}>
                        <div className={styles.DeliveryVariant}>
                            Курьером на дом
                        </div>
                        <div className={styles.Dots}></div>
                        <div className={styles.DeliveryData}>
                            {validateDate(deviceInfo?.deliveryHome)}
                        </div>
                    </div>
                </div>

                <div className={styles.Buttons}>
                    {deviceCount !== 0 ? (
                        <CustomButtonCounter
                            type={'light'}
                            deviceId={deviceInfo?.id}
                            count={deviceCount}
                            setCount={handleChangeCount}
                        />
                    ) : (
                        <CustomButton
                            className={styles.Button}
                            onClick={
                                type === 'cart'
                                    ? () => handleCreateOrder()
                                    : () => handleAddToCart()
                            }
                            type={'purple'}
                            text={buttonText ?? 'Купить'}
                        />
                    )}
                </div>

                <div className={styles.DeliveryData}>
                    Оформляя заказ вы соглашаетесь с условиями использования
                    сервиса "WebStore"
                </div>
            </div>
        </>
    )
}

export default DevicePay
