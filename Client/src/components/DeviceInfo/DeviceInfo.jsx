import { useContext, useState } from 'react'
import styles from './DeviceInfo.module.css'

import { BiShoppingBag, BiBadgeCheck, BiBox, BiSolidStar } from 'react-icons/bi'
import DevicePageContext from '../../storage/DevicePageContext'

const DeviceInfo = ({ }) => {
    const {colorState, setColorState, deviceInfo, setDeviceInfo} = useContext(DevicePageContext)

    return (
        <div className={styles.InfoBlock}>
            <div className={styles.Name}>{deviceInfo.name}</div>
            <div className={styles.RateRow}>
                <div className={styles.Rate}>
                    <BiSolidStar />
                    {deviceInfo.rating}
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
                                ? '#594ae3 solid 2px'
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
                                ? '#594ae3 solid 2px'
                                : '#7171715b solid 2px',
                    }}
                >
                    {colorState === 'black' ? '✔' : ''}
                </div>
            </div>

            <div className={styles.ShortInfo}>
                {deviceInfo?.device_chars?.map((inf, i) => (
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
