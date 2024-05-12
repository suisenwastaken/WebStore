import { statusEnum } from '../../publicFunctions'
import styles from './OrderStatus.module.css'

const OrderStatus = ({ statusId }) => {
    switch (statusId) {
        case statusEnum[0].id:
            return <div className={[styles.Pending, styles.Choice].join(' ')}>{statusEnum[0].text}</div>
        case statusEnum[1].id:
            return <div className={[styles.Approved, styles.Choice].join(' ')}>{statusEnum[1].text}</div>
        case statusEnum[2].id:
            return <div className={[styles.Removed, styles.Choice].join(' ')}>{statusEnum[2].text}</div>
        default:
            return <div className={[styles.Pending, styles.Choice].join(' ')}>{statusEnum[0].text}</div>
    }
}

export default OrderStatus
