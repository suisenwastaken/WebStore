import { useContext, useEffect, useState } from 'react'
import styles from './DeviceInfo.module.css'

import { BiShoppingBag, BiBadgeCheck, BiBox, BiSolidStar } from 'react-icons/bi'
import DevicePageContext from '../../storage/DevicePageContext'
import { getBrandName, getTypeName } from '../../publicFunctions'

const DeviceInfo = ({deviceInfo}) => {

    const [deviceType, setDeviceType] = useState()
    const [deviceBrand, setDeviceBrand] = useState()

    useEffect(() => {
        setDeviceType(getTypeName(deviceInfo.typeId))
        setDeviceBrand(getBrandName(deviceInfo.brandId))
    }, [deviceInfo])

    return (
        <div className={styles.InfoBlock}>
            <div className={styles.Name}>{deviceType + ' ' + deviceBrand + ' ' + deviceInfo.name}</div>
            <div className={styles.RateRow}>
                <div className={styles.Rate}>
                    <BiSolidStar />
                    {deviceInfo.rating}
                </div>
                <div className={styles.SoldCount}>
                    {' '}
                    | продано {deviceInfo.soldCount}
                </div>
            </div>

            {/* <div className={styles.Statuses}>
                <div className={styles.StatusGroup}>
                    <BiShoppingBag className={styles.Icon} /> В наличии
                </div>
                <div className={styles.StatusGroup}>
                    <BiBadgeCheck className={styles.Icon} /> Гарантия
                </div>
                <div className={styles.StatusGroup}>
                    <BiBox className={styles.Icon} /> Бесплатная доставка
                </div>
            </div> */}

            {/* <div className={styles.SelectColor}>
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
            </div> */}

            <div className={styles.ShortInfo}>
                {deviceInfo?.info?.map((inf, i) => (
                    <div className={styles.ShortInfoRow} key={i}>
                        <div className={styles.InfoKey}>• {inf.title}</div>
                        <div className={styles.InfoValue}>{inf.description}</div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default DeviceInfo
