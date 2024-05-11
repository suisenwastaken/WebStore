import { useContext, useEffect, useState } from 'react'
import CustomButtonCounter from '../CustomButtonCounter'
import styles from './CardSmall.module.css'
import { Link, redirect, useNavigate } from 'react-router-dom'
import { BiSolidDiscount } from 'react-icons/bi'
import {
    getBrandName,
    getTypeName,
    validateDate,
    validatePrice,
} from '../../publicFunctions'
import { BiSolidTrash, BiHeart, BiSolidHeart } from 'react-icons/bi'
import CustomButton from '../CustomButton'
import { devicePageURL } from '../../hoc/routerLinks'
import CartContext from '../../storage/CartContext'
import FavoriteContext from '../../storage/FavoriteContext'
import AlertContext from '../../storage/AlertContext'
import AlertState from '../Alert/AlertState'

const CardSmall = ({ device, onCountChange, type = 'active' }) => {
    const [deviceCount, setDeviceCount] = useState(null)
    const [favoriteState, setFavoriteState] = useState(false)
    const [deleteState, setDeleteState] = useState(false)
    const [deviceType, setDeviceType] = useState()
    const [deviceBrand, setDeviceBrand] = useState()
    const navigate = useNavigate()

    const {
        deleteDeviceFromCart,
        getDeviceCountInCart,
        editDeviceCountInCart,
    } = useContext(CartContext)
    const {
        addDeviceToFavorite,
        deleteDeviceFromFavorite,
        isDeviceInFavorite,
    } = useContext(FavoriteContext)
    const { setAlert } = useContext(AlertContext)
    useEffect(() => {
        setDeviceCount(getDeviceCountInCart(device.id))
        setFavoriteState(isDeviceInFavorite(device.id))
        setDeviceType(getTypeName(device.typeId))
        setDeviceBrand(getBrandName(device.brandId))
    }, [])

    const handleChangeCount = (newCount) => {
        setDeviceCount(newCount)
        editDeviceCountInCart(device.id, newCount)
        if (newCount === 0) {
            setAlert(AlertState.deletedFromCart)
        }
        if (onCountChange) onCountChange()
    }

    const handleDeleteItemFromCart = () => {
        setAlert(AlertState.deletedFromCart)
        setDeleteState(true)
        deleteDeviceFromCart(device.id)
        if (onCountChange) onCountChange()
    }

    const handleChangeInFavorite = () => {
        if (favoriteState) {
            setAlert(AlertState.deletedFromFavorite)
            setFavoriteState(false)
            deleteDeviceFromFavorite(device.id)
        } else {
            setAlert(AlertState.addedToFavorite)
            setFavoriteState(true)
            addDeviceToFavorite(device)
        }
    }

    return (
        <>
            <div
                className={styles.Card}
                style={deleteState ? { display: 'none' } : { display: 'flex' }}
            >
                <div
                    className={styles.img}
                    onClick={() => navigate(devicePageURL + device.id)}
                >
                    <img
                        src={device.img}
                        alt="device image"
                        draggable="false"
                    />
                </div>
                <div className={styles.Info}>
                    <div
                        className={styles.DeviceName}
                        onClick={() => navigate(devicePageURL + device.id)}
                    >
                        {deviceType + ' ' + deviceBrand + ' ' + device.name}
                    </div>
                    {type === 'active' ? (
                        <div className={styles.Delivery}>
                            <div className={styles.DeliveryRow}>
                                Пункты выдачи:{' '}
                                {validateDate(device.deliveryPoint)}
                            </div>
                            <div className={styles.DeliveryRow}>
                                Доставка курьером:{' '}
                                {validateDate(device.deliveryHome)}
                            </div>
                        </div>
                    ) : (
                        ''
                    )}
                </div>
                <div className={styles.Count}>
                    <CustomButtonCounter
                        style={{ borderRadius: '30px' }}
                        type={'lightNoBorder'}
                        count={
                            type === 'active'
                                ? deviceCount
                                : device.order_device.count
                        }
                        setCount={handleChangeCount}
                        actionType={type}
                    />
                </div>
                <div className={styles.Prices}>
                    <div className={styles.PriceNow}>
                        ₽{' '}
                        {validatePrice(
                            device.price *
                                (type === 'active'
                                    ? deviceCount
                                    : device.order_device.count)
                        )}
                    </div>
                    {device.salePercent ? (
                        <div className={styles.LastPrice}>
                            ₽{' '}
                            {validatePrice(
                                Math.round(
                                        (type === 'active'
                                            ? device.price * deviceCount /
                                              (1 - device.salePercent * 0.01)
                                            : device.price * device.order_device.count /
                                              (1 - device.salePercent * 0.01))
                                )
                            )}
                        </div>
                    ) : (
                        ''
                    )}
                </div>

                {type === 'active' ? (
                    <div className={styles.ActionButtons}>
                        <CustomButton
                            icon={
                                favoriteState ? <BiSolidHeart /> : <BiHeart />
                            }
                            className={styles.Button}
                            style={{ padding: '6px' }}
                            type={
                                favoriteState
                                    ? 'transparentPurple'
                                    : 'transparentGray'
                            }
                            pStyle={{ fontSize: '20px' }}
                            onClick={handleChangeInFavorite}
                        />
                        <CustomButton
                            icon={<BiSolidTrash />}
                            className={styles.Button}
                            style={{ padding: '6px' }}
                            type={'transparentGray'}
                            pStyle={{ fontSize: '20px' }}
                            onClick={handleDeleteItemFromCart}
                        />
                    </div>
                ) : (
                    ''
                )}
            </div>
        </>
    )
}

export default CardSmall
