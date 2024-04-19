import React, { useState, useEffect, useContext } from 'react'
import styles from './Alert.module.css'
import AlertContext from '../../storage/AlertContext'
import { useIsMount } from '../../hooks/useIsMount'

const Alert = () => {
    const backgroundColor = {
        green: 'rgb(161, 255, 185)',
        red: 'rgb(255, 161, 161)',
        purple: '#d7d3ff'
    }

    const textColor = {
        green: 'rgb(0, 139, 35)',
        red: 'rgb(139, 0, 0)',
        purple: '#594ae3'
    }

    // headText = 'Приветики у вас ошибка'
    // mainText = 'У вас проблема пипец!'

    const { alert, setAlert } = useContext(AlertContext)
    const isMount = useIsMount()

    useEffect(() => {
        if (!isMount) {
            const timer = setTimeout(() => {
                setAlert(null)
            }, 5000)
            return () => clearTimeout(timer)
        }
    }, [alert])

    if (alert) {
        return (
            <div
                className={styles.Alert}
                style={{
                    backgroundColor: backgroundColor[alert.color],
                    color: textColor[alert.color],
                }}
            >
                <div className={styles.Head}>
                    <div className={styles.h1}>{alert.headText}</div>
                    <div
                        className={styles.CloseButton}
                        onClick={() => setAlert(null)}
                    >
                        ✖
                    </div>
                </div>
                <div className={styles.Text}>{alert.mainText}</div>
                <div
                    className={styles.Timer}
                    style={{
                        backgroundColor: textColor[alert.color],
                    }}
                />
            </div>
        )
    }
}

export default Alert
