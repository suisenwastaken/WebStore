import styles from './Card.module.css'
import { BiSolidStar } from 'react-icons/bi'
import { useState } from 'react'

const Card = ({
    img,
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
            onClick={onClick}
            onMouseOver={() => setHoverState(true)}
            onMouseOut={() => setHoverState(false)}
        >
            <div className={styles.PictureContainer}>
                <img src={img} alt="DevicePicture" />
            </div>
            <div
                className={styles.DeviceName}
                style={{
                    color: hoverState ? '#0c68f4' : 'black',
                }}
            >
                {brandName[0].name} - {deviceName}
            </div>
            {devicePrice ? (
                <div className={styles.BottomInfo}>
                    <div className={styles.Price}>${devicePrice}</div>
                    <div className={styles.Rate}>
                        <BiSolidStar />
                        {deviceRate}
                    </div>
                </div>
            ) : (
                ''
            )}
        </div>
    )
}

export default Card
