import { useContext } from 'react'
import styles from './CreditRowMonth.module.css'
import DevicePageContext from '../../../storage/DevicePageContext'

const CreditRowMonth = ({number}) => {

    const {creditState, setCreditState} = useContext(DevicePageContext)

    return (
        <div
            className={styles.CreditRowMonth}
            onClick={() => {
                setCreditState(number)
            }}
            style={
                creditState === number
                    ? {
                          border: '#594ae3 solid 2px',
                          color: '#594ae3',
                      }
                    : {
                          border: '#7171715b solid 2px',
                          color: '#717171',
                      }
            }
        >
            <div className={styles.CrediRowNumber}>{number}</div> Месяцев
        </div>
    )
}

export default CreditRowMonth
