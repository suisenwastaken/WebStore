import styles from './DevicePay.module.css'
import { BiSolidDiscount } from 'react-icons/bi'
import Button from '../../../components/Button/Button'

const DevicePay = ({ data }) => {
    return (
        <div className={styles.PriceBlock}>
            <div className={styles.Prices}>
                <div className={styles.PriceRow}>
                    <div className={styles.PriceNow}>$ {data.price}</div>
                    <div className={styles.Discount}>
                        <BiSolidDiscount />
                        -12%
                    </div>
                </div>
                <div className={styles.LastPrice}>
                    Обычная цена $ {Math.round(data.price * 1.12)}
                </div>
            </div>
            <div className={styles.PayDataChoose}>
                <div className={styles.PayDataCheckRow}>
                    <div className={styles.CustomCheckBox} />
                    Заплатить сейчас
                </div>
                <div className={styles.PayDataCheckRow}>
                    <div className={styles.CustomCheckBox} />
                    Купить в расрочку
                </div>
            </div>
            <div className={styles.CreditRowChoose}>
                <div className={styles.CreditRowMonth}>
                    <div className={styles.CrediRowNumber}>3</div> Месяцев
                </div>
                <div className={styles.CreditRowMonth}>
                    <div className={styles.CrediRowNumber}>6</div> Месяцев
                </div>
                <div className={styles.CreditRowMonth}>
                    <div className={styles.CrediRowNumber}>9</div> Месяцев
                </div>
                <div className={styles.CreditRowMonth}>
                    <div className={styles.CrediRowNumber}>12</div> Месяцев
                </div>
            </div>
            <div className={styles.Buttons}>
                <Button
                    className={styles.Button}
                    style={{ backgroundColor: '#0C68F4' }}
                    text={'Купить'}
                />

                <Button
                    className={styles.Button}
                    style={{ backgroundColor: 'white', border: '#0c68f4 solid 2px', color: '#0c68f4'}}
                    text={'Добавить в корзину'}
                />
            </div>
        </div>
    )
}

export default DevicePay
