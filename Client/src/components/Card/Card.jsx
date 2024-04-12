import styles from './Card.module.css'
import { BiSolidStar } from 'react-icons/bi'
import { useEffect, useState } from 'react'
import { RiFireFill } from 'react-icons/ri'
import { BiHeart, BiCart } from 'react-icons/bi'
import { PiShare } from 'react-icons/pi'
import CustomButton from '../CustomButton'
import { validatePrice } from '../../publicFunctions'
import {
    addDeviceToCart,
    deleteDeviceFromCart,
    isDeviceInCart,
} from '../../localStorage/cartDeviceStorage'
import {
    addDeviceToFavorite,
    deleteDeviceFromFavorite,
    isDeviceInFavorite,
} from '../../localStorage/favoriteDeviceStorage'

const Card = ({ device, onClick, place }) => {
    const [hoverState, setHoverState] = useState(false)
    const [cartState, setCartState] = useState(false)
    const [favoriteState, setFavoriteState] = useState(false)

    useEffect(() => {
        setCartState(isDeviceInCart(device.id))
        setFavoriteState(isDeviceInFavorite(device.id))
    }, [])

    const handleChangeInCart = () => {
        if (cartState) {
            setCartState(false)
            deleteDeviceFromCart(device.id)
        } else {
            setCartState(true)
            addDeviceToCart(device)
        }
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
        <div
            className={styles.Card}
            onMouseOver={() => setHoverState(true)}
            onMouseOut={() => setHoverState(false)}
            style={place !== 'slider' && !favoriteState ? {display: 'none'} : {display: 'flex' }}
        >
            {place === 'slider' ? (
                <div className={styles.PromoTag}>
                    <RiFireFill /> РАСПРОДАЖА
                </div>
            ) : (
                ''
            )}

            <div className={styles.PictureContainer} onClick={onClick}>
                <img src={'/' + device.img} alt="DevicePicture" />
            </div>

            <div className={styles.PriceInfo}>
                <div className={styles.Price}>
                    {validatePrice(device.price)}₽
                </div>
                {device.salePercent ? (
                    <>
                        <div className={styles.PreviousPrice}>
                            {validatePrice(
                                Math.round(
                                    device.price *
                                        (1 + device.salePercent * 0.01)
                                )
                            )}
                            ₽
                        </div>
                        <div className={styles.Discount}>
                            -{device.salePercent}%
                        </div>
                    </>
                ) : (
                    ''
                )}
            </div>

            <div className={styles.DeviceName}>
                {!hoverState ? (
                    device.type + ' ' + device.brand + ' ' + device.name
                ) : (
                    <div className={styles.Buttons}>
                        <CustomButton
                            icon={<BiCart />}
                            className={styles.Button}
                            type={cartState ? 'default' : 'lightNoBorder'}
                            pStyle={{ fontSize: '20px' }}
                            onClick={handleChangeInCart}
                        />
                        <CustomButton
                            icon={<BiHeart />}
                            className={styles.Button}
                            type={favoriteState ? 'default' : 'lightNoBorder'}
                            pStyle={{ fontSize: '20px' }}
                            onClick={handleChangeInFavorite}
                        />
                        <CustomButton
                            icon={<PiShare />}
                            className={styles.Button}
                            type={'lightNoBorder'}
                            pStyle={{ fontSize: '20px' }}
                        />
                    </div>
                )}
            </div>
        </div>
    )
}

export default Card
