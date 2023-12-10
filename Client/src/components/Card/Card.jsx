import styles from './Card.module.css'
import { BiSolidStar } from 'react-icons/bi'
import { useState } from 'react'
import { RiFireFill } from 'react-icons/ri'
import { BiHeart, BiCart } from 'react-icons/bi'
import { PiShare } from 'react-icons/pi'
import Button from '../Button/Button'

const validatePrice = (price) => {
    const str = [...String(price)].reverse().join('')
    const finalStr = []
    for (let i = 0; i < str.length; i++) {
        if (i % 3 === 0 && i !== 0) finalStr.push(' ')
        finalStr.push(str[i])
    }
    return finalStr.reverse().join('')
}

const Card = ({
    img,
    type,
    brandName,
    deviceName,
    devicePrice,
    deviceRate,
    onClick,
}) => {
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
                <img src={'/' + img} alt="DevicePicture" />
            </div>

            <div className={styles.PriceInfo}>
                <div className={styles.Price}>
                    {validatePrice(devicePrice)}₽
                </div>
                <div className={styles.PreviousPrice}>
                    {validatePrice(devicePrice * 1.3)}₽
                </div>
                <div className={styles.Discount}>-13%</div>
            </div>

            <div className={styles.DeviceName}>
                {!hoverState ? (
                    type + ' ' + brandName + ' ' + deviceName
                ) : (
                    <div className={styles.Buttons}>
                        <Button
                            text={<BiCart />}
                            className={styles.Button}
                            style={{
                                backgroundColor: '#594ae3',
                                fontSize: '30px',
                            }}
                        />
                        <Button
                            text={<BiHeart />}
                            className={styles.Button}
                            style={{
                                backgroundColor: 'transparent',
                                color: '#594ae3',
                            }}
                        />
                        <Button
                            text={<PiShare />}
                            className={styles.Button}
                            style={{
                                backgroundColor: 'transparent',
                                color: '#594ae3',
                            }}
                        />
                    </div>
                )}
            </div>

            {/* <div className={styles.Buttons}>
                <Button text={<BiCart/>} className={styles.Button}/>
                <Button text={<BiHeart/>} className={styles.Button}/>
            </div> */}
            {/* <div className={styles.Rate}>
                <BiSolidStar />
                {deviceRate}
            </div> */}
        </div>
    )
}

export default Card
