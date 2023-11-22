import styles from './Card.module.css'
import { BiSolidStar } from 'react-icons/bi'

const Card = ({ img, brandName, deviceName, devicePrice, deviceRate, onClick }) => {
    return (
        <div className={styles.Card} onClick={onClick}>
            <div className={styles.PictureContainer}>
                <img src={img} alt="DevicePicture" />
            </div>
            <div className={styles.DeviceName}>
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
