import styles from './DeviceInfo.module.css'
import {
    BiShoppingBag,
    BiBadgeCheck,
    BiBox,
    BiSolidStar,
} from 'react-icons/bi'

const DeviceInfo = ({data, deviceInfo}) => {
    return (
        <div className={styles.InfoBlock}>
            <div className={styles.Name}>{data.name}</div>
            <div className={styles.RateRow}>
                <div className={styles.Rate}>
                    <BiSolidStar />
                    {data.rating}
                </div>
                <div className={styles.SoldCount}> | продано 125</div>
            </div>
            <div className={styles.Statuses}>
                <div className={styles.StatusGroup}>
                    <BiShoppingBag className={styles.Icon}/> В наличии
                </div>
                <div className={styles.StatusGroup}>
                    <BiBadgeCheck className={styles.Icon}/> Гарантия
                </div>
                <div className={styles.StatusGroup}>
                    <BiBox className={styles.Icon}/> Бесплатная доставка
                </div>
            </div>
            <div className={styles.SelectColor}>
                Цвет
                <div className={styles.SelectColorRound}></div>
                <div className={styles.SelectColorRound}></div>
            </div>
            {console.log(deviceInfo)}
            <div className={styles.ShortInfo}>
                {deviceInfo.map((inf) => (
                    <div className={styles.ShortInfoRow}>
                        <div className={styles.InfoKey}>• {inf.title}</div>
                        <div className={styles.InfoValue}>{inf.name}</div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default DeviceInfo
