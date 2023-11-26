import styles from './DevicePay.module.css'
import { BiSolidDiscount } from 'react-icons/bi'
import Button from '../../../components/Button/Button'
import { useContext, useState } from 'react'
import { Context } from '../../../storage/Context'
import { observer } from 'mobx-react-lite'

const DevicePay = ({ data, cart }) => {
    const [cartButton, setCartButton] = useState(false)
    const [paymentState, setPaymentState] = useState('')
    const [creditState, setCreditState] = useState(0)
    // console.log(cart)

    const HandleAddToCart = (data) => {
        if (!cartButton) {
            cart.addDeviceToCart(data)
            setCartButton(true)
        } else {
            setCartButton(false)
            cart.deleteDeviceFromCart(data)
        }
    }

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
                    $ {Math.round(data.price * 1.12)}
                </div>
            </div>

            <div className={styles.PayDataChoose}>
                <div className={styles.PayDataCheckRow}>
                    <div
                        className={styles.CustomCheckBox}
                        onClick={() => {
                            setPaymentState('now')
                            setCreditState(0)
                        }}
                        style={{
                            backgroundColor:
                                paymentState === 'now' ? '#0c68f4' : 'white',
                        }}
                    >{paymentState === 'now' ? '✔' : ''}
                    </div>
                    Заплатить сейчас
                </div>
                <div className={styles.PayDataCheckRow}>
                    <div
                        className={styles.CustomCheckBox}
                        onClick={() => {
                            setPaymentState('later')
                        }}
                        style={{
                            backgroundColor:
                                paymentState === 'later' ? '#0c68f4' : 'white',
                        }}
                    >{paymentState === 'later' ? '✔' : ''}
                    </div>
                    Купить в расрочку
                </div>
            </div>

            <div
                className={styles.CreditRowChoose}
                style={
                    paymentState === 'later'
                        ? {
                              display: 'flex',
                          }
                        : {
                              display: 'none',
                          }
                }
            >
                <div
                    className={styles.CreditRowMonth}
                    onClick={() => {
                        setCreditState(3)
                    }}
                    style={
                        creditState === 3
                            ? {
                                  border: '#0c68f4 solid 2px',
                                  color: '#0c68f4',
                              }
                            : {
                                  border: '#7171715b solid 2px',
                                  color: '#717171',
                              }
                    }
                >
                    <div className={styles.CrediRowNumber}>3</div> Месяцев
                </div>
                <div
                    className={styles.CreditRowMonth}
                    onClick={() => {
                        setCreditState(6)
                    }}
                    style={
                        creditState === 6
                            ? {
                                  border: '#0c68f4 solid 2px',
                                  color: '#0c68f4',
                              }
                            : {
                                  border: '#7171715b solid 2px',
                                  color: '#717171',
                              }
                    }
                >
                    <div className={styles.CrediRowNumber}>6</div> Месяцев
                </div>
                <div
                    className={styles.CreditRowMonth}
                    onClick={() => {
                        setCreditState(9)
                    }}
                    style={
                        creditState === 9
                            ? {
                                  border: '#0c68f4 solid 2px',
                                  color: '#0c68f4',
                              }
                            : {
                                  border: '#7171715b solid 2px',
                                  color: '#717171',
                              }
                    }
                >
                    <div className={styles.CrediRowNumber}>9</div> Месяцев
                </div>
                <div
                    className={styles.CreditRowMonth}
                    onClick={() => {
                        setCreditState(12)
                    }}
                    style={
                        creditState === 12
                            ? {
                                  border: '#0c68f4 solid 2px',
                                  color: '#0c68f4',
                              }
                            : {
                                  border: '#7171715b solid 2px',
                                  color: '#717171',
                              }
                    }
                >
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
                    onClick={() => HandleAddToCart()}
                    style={
                        cartButton
                            ? {
                                  backgroundColor: '#ee7300',
                                  border: '#ee7300 solid 2px',
                                  color: 'white',
                              }
                            : {
                                  backgroundColor: 'white',
                                  border: '#0c68f4 solid 2px',
                                  color: '#0c68f4',
                              }
                    }
                    text={cartButton ? 'Добавлено!' : 'Добавить в корзину'}
                />
            </div>
        </div>
    )
}

export default observer(DevicePay)
