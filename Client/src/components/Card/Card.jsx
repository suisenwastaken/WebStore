import styles from './Card.module.css'
import { BiSolidStar } from 'react-icons/bi'
import { useContext, useEffect, useState } from 'react'
import { RiFireFill } from 'react-icons/ri'
import { BiHeart, BiCart } from 'react-icons/bi'
import { PiShare } from 'react-icons/pi'
import CustomButton from '../CustomButton'
import {
    BrandEnum,
    TypeEnum,
    getBrandName,
    getTypeName,
    validatePrice,
} from '../../publicFunctions'
import CartContext from '../../storage/CartContext'
import FavoriteContext from '../../storage/FavoriteContext'
import { POST, Request } from '../../api/APIFile'
import { BASKET_URL, FAVORITES_URL } from '../../api/Urls'

const Card = ({ device, onClick, place }) => {
    const [hoverState, setHoverState] = useState(false)
    const [cartState, setCartState] = useState(false)
    const [favoriteState, setFavoriteState] = useState(false)
    const {
        deleteDeviceFromCart,
        addDeviceToCart,
        isDeviceInCart,
        cartDevices,
    } = useContext(CartContext)
    const {
        addDeviceToFavorite,
        deleteDeviceFromFavorite,
        isDeviceInFavorite,
    } = useContext(FavoriteContext)
    const [deviceType, setDeviceType] = useState()
    const [deviceBrand, setDeviceBrand] = useState()

    useEffect(() => {
        setDeviceType(getTypeName(device.typeId))
        setDeviceBrand(getBrandName(device.brandId))
    }, [])

    useEffect(() => {
        setCartState(isDeviceInCart(device.id))
        setFavoriteState(isDeviceInFavorite(device.id))
    }, [cartDevices])

    const handleChangeInCart = async () => {
        if (cartState) {
            setCartState(false)
            deleteDeviceFromCart(device.id)
        } else {
            setCartState(true)
            addDeviceToCart(device)
        }
    }

    const handleChangeInFavorite = async () => {
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
            style={
                place !== 'slider' && !favoriteState
                    ? { display: 'none' }
                    : { display: 'flex' }
            }
        >
            {place === 'slider' ? (
                <div className={styles.PromoTag}>
                    <RiFireFill /> РАСПРОДАЖА
                </div>
            ) : (
                ''
            )}

            <div className={styles.PictureContainer} onClick={onClick}>
                <img src={device.img} alt="DevicePicture" draggable="false" />
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
                    deviceType + ' ' + deviceBrand + ' ' + device.name
                ) : cartDevices ? (
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
                ) : (
                    ''
                )}
            </div>
        </div>
    )
}

export default Card
