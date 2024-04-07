import styles from './Card.module.css'
import { BiSolidStar } from 'react-icons/bi'
import { useState } from 'react'
import { RiFireFill } from 'react-icons/ri'
import { BiHeart, BiCart } from 'react-icons/bi'
import { PiShare } from 'react-icons/pi'
import CustomButton from '../CustomButton'
import { validatePrice } from '../../publicFunctions'

const Card = ({ device, onClick }) => {
    const [hoverState, setHoverState] = useState(false)
    return (
        <div
            className={styles.Card}
            onMouseOver={() => setHoverState(true)}
            onMouseOut={() => setHoverState(false)}
        >
            <div className={styles.PromoTag}>
                <RiFireFill /> РАСПРОДАЖА
            </div>

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
                            style={{
                                backgroundColor: '#594ae3',
                            }}
                            pStyle={{ fontSize: '20px' }}
                        />
                        <CustomButton
                            icon={<BiHeart />}
                            className={styles.Button}
                            style={{
                                backgroundColor: 'transparent',
                                color: '#594ae3',
                                border: '2px solid transparent',
                            }}
                            pStyle={{ fontSize: '20px' }}
                        />
                        <CustomButton
                            icon={<PiShare />}
                            className={styles.Button}
                            style={{
                                backgroundColor: 'transparent',
                                color: '#594ae3',
                                border: '2px solid transparent',
                            }}
                            pStyle={{ fontSize: '20px' }}
                        />
                    </div>
                )}
            </div>
        </div>
    )
}

export default Card
