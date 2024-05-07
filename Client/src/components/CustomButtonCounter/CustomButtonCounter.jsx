import { useEffect, useState } from 'react'
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
    deviceId,
    actionType = 'active',
}) => {
    let subClass = ''
    switch (type) {
        case 'lightNoBorder':
            subClass = styles.lightNoBorderButton
            break
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
            onClick={onClick}
        >
            <div className={styles.text} style={pStyle}>
                {actionType === 'active' ? (
                    <div
                        className={styles.Control}
                        onClick={() => setCount(count - 1)}
                    >
                        -
                    </div>
                ) : (
                    ''
                )}

                <div className={styles.ControlCount}>{count}</div>
                {actionType === 'active' ? (
                    <div
                        className={styles.Control}
                        onClick={() => setCount(count + 1)}
                    >
                        +
                    </div>
                ) : (
                    ''
                )}
            </div>
        </div>
    )
}

export default CustomButtonCounter
