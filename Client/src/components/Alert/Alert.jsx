import { useState } from 'react'
import styles from './Alert.module.css'

const Alert = ({headText, mainText, color}) => {

    const backgroundColor ={
        'green' : 'rgb(161, 255, 185)',
        'red' : 'rgb(255, 161, 161)'
    }

    const textColor ={
        'green' : 'rgb(0, 139, 35)',
        'red' : 'rgb(139, 0, 0)'
    }

    const [showState, setShowState] = useState(true)

    headText = 'Внимание'
    mainText= 'Привет всем а как же у вас делишки?'

    return (
        <div className={styles.Alert}
            style={{
                backgroundColor: backgroundColor[color],
                color: textColor[color],
                display: showState? 'flex' : 'none'
            }}
        >
            <div className={styles.Head}>
                <div className={styles.h1}>{headText}</div>
                <div className={styles.CloseButton} onClick={() => setShowState(false)}>✖</div>
            </div>
            <div className={styles.Text}>{mainText}</div>
        </div>
    );
}

export default Alert;