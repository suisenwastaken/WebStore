import styles from './DevicePay.module.css'
import { BiSolidDiscount } from 'react-icons/bi'
import { useContext, useState } from 'react'
import { observer } from 'mobx-react-lite'
import AlertContext from '../../storage/AlertContext'
import AlertState from '../Alert/AlertState'
import DevicePageContext from '../../storage/DevicePageContext'
import CreditRowMonth from '../CreditRowMonth/CreditRowMonth'
import CustomButton from '../CustomButton'
import {
    addDeviceToCart,
    deleteDeviceFromCart,
} from '../../localStorage/deviceStorage'
import { validatePrice } from '../../publicFunctions'

const DevicePay = ({ cart }) => {
    const { cartButton, setCartButton, colorState, deviceInfo } =
        useContext(DevicePageContext)
    const [, setAlert] = useContext(AlertContext)

    const HandleAddToCart = () => {
        if (!cartButton) {
            if (!colorState) {
                setAlert(AlertState['dontChooseColor'])
                return
            }

            setAlert(AlertState['addedToCart'])
            addDeviceToCart(deviceInfo)
            setCartButton(true)
        } else {
            setAlert(AlertState['deletedFromCart'])
            setCartButton(false)
            deleteDeviceFromCart(deviceInfo)
        }
    }

    return (
        <>
            <div className={styles.PriceBlock}>
                <div className={styles.Prices}>
                    <div className={styles.PriceRow}>
                        <div className={styles.PriceNow}>
                            ₽ {validatePrice(deviceInfo.price)}
                        </div>
                        {deviceInfo.salePercent ? (
                            <div className={styles.Discount}>
                                <BiSolidDiscount />
                                -12%
                            </div>
                        ) : (
                            ''
                        )}
                    </div>
                    {deviceInfo.salePercent ? (
                        <div className={styles.LastPrice}>
                            ₽{' '}
                            {validatePrice(
                                Math.round(
                                    deviceInfo.price *
                                        (1 + deviceInfo.salePercent * 0.01)
                                )
                            )}
                        </div>
                    ) : (
                        ''
                    )}
                </div>

                <div className={styles.Delivery}>
                    <div className={styles.DeliveryRow}>
                        <div className={styles.DeliveryVariant}>
                            В пункт выдачи
                        </div>
                        <div className={styles.Dots}></div>
                        <div className={styles.DeliveryData}>10 июня</div>
                    </div>
                    <div className={styles.DeliveryRow}>
                        <div className={styles.DeliveryVariant}>
                            Курьером на дом
                        </div>
                        <div className={styles.Dots}></div>
                        <div className={styles.DeliveryData}>8 июня</div>
                    </div>
                </div>

                <div className={styles.Buttons}>
                    <CustomButton className={styles.Button} text={'Купить'} />
                    <CustomButton
                        className={styles.Button}
                        onClick={() => HandleAddToCart()}
                        type={cartButton ? 'light' : 'white'}
                        text={cartButton ? 'Добавлено!' : 'Добавить в корзину'}
                    />
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
