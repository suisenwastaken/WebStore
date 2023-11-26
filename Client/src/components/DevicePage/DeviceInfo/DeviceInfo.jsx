import { useState } from 'react'
import styles from './DeviceInfo.module.css'

import { BiShoppingBag, BiBadgeCheck, BiBox, BiSolidStar } from 'react-icons/bi'

const DeviceInfo = ({ data, deviceInfo, setData }) => {
    const [colorState, setColorState] = useState('')

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
                    <BiShoppingBag className={styles.Icon} /> В наличии
                </div>
                <div className={styles.StatusGroup}>
                    <BiBadgeCheck className={styles.Icon} /> Гарантия
                </div>
                <div className={styles.StatusGroup}>
                    <BiBox className={styles.Icon} /> Бесплатная доставка
                </div>
            </div>

            <div className={styles.SelectColor}>
                Цвет
                <div
                    className={styles.SelectColorRound}
                    onClick={() => {
                        setColorState('gray')
                    }}
                    style={{
                        border:
                            colorState === 'gray'
                                ? '#0c68f4 solid 2px'
                                : '#7171715b solid 2px',
                    }}
                >
                    {colorState === 'gray' ? '✔' : ''}
                </div>
                <div
                    className={styles.SelectColorRound}
                    onClick={() => setColorState('black')}
                    style={{
                        border:
                            colorState === 'black'
                                ? '#0c68f4 solid 2px'
                                : '#7171715b solid 2px',
                    }}
                >
                    {colorState === 'black' ? '✔' : ''}
                </div>
            </div>

            <div className={styles.ShortInfo}>
                {deviceInfo.map((inf, i) => (
                    <div className={styles.ShortInfoRow} key={i}>
                        <div className={styles.InfoKey}>• {inf.title}</div>
                        <div className={styles.InfoValue}>{inf.name}</div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default DeviceInfo
