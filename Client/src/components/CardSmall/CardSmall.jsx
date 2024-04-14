import { useEffect, useState } from 'react'
import CustomButtonCounter from '../CustomButtonCounter'
import styles from './CardSmall.module.css'
import {
    deleteDeviceFromCart,
    editDeviceCountInCart,
    getDeviceCountInCart,
} from '../../localStorage/cartDeviceStorage'
import { Link, redirect, useNavigate } from 'react-router-dom'
import { BiSolidDiscount } from 'react-icons/bi'
import { validatePrice } from '../../publicFunctions'
import { BiSolidTrash, BiHeart, BiSolidHeart } from 'react-icons/bi'
import CustomButton from '../CustomButton'
import {
    addDeviceToFavorite,
    deleteDeviceFromFavorite,
    isDeviceInFavorite,
} from '../../localStorage/favoriteDeviceStorage'

const CardSmall = ({ device, onCountChange }) => {
    const [deviceCount, setDeviceCount] = useState(null)
    const [favoriteState, setFavoriteState] = useState(false)
    const [deleteState, setDeleteState] = useState(false)
    const navigate = useNavigate()

    useEffect(() => {
        setDeviceCount(getDeviceCountInCart(device.id))
        setFavoriteState(isDeviceInFavorite(device.id))
    }, [])

    const handleChangeCount = (newCount) => {
        setDeviceCount(newCount)
        editDeviceCountInCart(device.id, newCount)
        if (onCountChange) onCountChange()
    }

    const handleDeleteItemFromCart = () => {
        setDeleteState(true)
        deleteDeviceFromCart(device.id)
    }

    const handleChangeInFavorite = () => {
        if (favoriteState) {
            setFavoriteState(false)
            deleteDeviceFromFavorite(device.id)
        } else {
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
                    onClick={() => navigate('/device/' + device.id)}
                >
                    <img src={device.img} alt="device image" draggable="false"/>
                </div>
                <div className={styles.Info}>
                    <div
                        className={styles.DeviceName}
                        onClick={() => navigate('/device/' + device.id)}
                    >
                        {device.type + ' ' + device.brand + ' ' + device.name}
                    </div>
                    <div className={styles.Delivery}>
                        <div className={styles.DeliveryRow}>
                            Пункты выдачи: {device.deliveryPoint}
                        </div>
                        <div className={styles.DeliveryRow}>
                            Доставка курьером: {device.deliveryHome}
                        </div>
                    </div>
                </div>
                <div className={styles.Count}>
                    <CustomButtonCounter
                        style={{ borderRadius: '30px' }}
                        type={'lightNoBorder'}
                        count={deviceCount}
                        setCount={handleChangeCount}
                    />
                </div>
                <div className={styles.Prices}>
                    <div className={styles.PriceNow}>
                        ₽ {validatePrice(device.price * deviceCount)}
                    </div>
                    {device.salePercent ? (
                        <div className={styles.LastPrice}>
                            ₽{' '}
                            {validatePrice(
                                Math.round(
                                    device.price *
                                        deviceCount *
                                        (1 + device.salePercent * 0.01)
                                )
                            )}
                        </div>
                    ) : (
                        ''
                    )}
                </div>

                <div className={styles.ActionButtons}>
                    <CustomButton
                        icon={favoriteState ? <BiSolidHeart /> : <BiHeart />}
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
            </div>
        </>
    )
}

export default CardSmall
