import { useEffect, useState } from 'react'
import { editDeviceCountInCart } from '../../localStorage/deviceStorage'
import styles from './CustomButtonCounter.module.css'

const CustomButtonCounter = ({
    className,
    style,
    onClick,
    text,
    icon,
    pStyle,
    disabled,
    type,
    count,
    setCount,
    deviceId
}) => {
    let subClass = ''
    switch (type) {
        case 'white':
            subClass = styles.asd
            break
        case 'light':
            subClass = styles.lightButton
            break
        default:
            subClass = ''
            break
    }


    return (
        <div
            className={[styles.button, className, subClass].join(' ')}
            style={style}
            disabled={disabled}
        >
            <div className={styles.text} style={pStyle}>
                <div className={styles.Control} onClick={() => setCount(count - 1)}>-</div>
                <div className={styles.ControlCount}>{count}</div>
                <div className={styles.Control} onClick={() => setCount(count + 1)} >+</div>    
            </div>
        </div>
    )
}

export default CustomButtonCounter
