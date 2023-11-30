import styles from './DevicePay.module.css'
import { BiSolidDiscount } from 'react-icons/bi'
import Button from '../../../components/Button/Button'
import { useContext, useState } from 'react'
import { observer } from 'mobx-react-lite'
import AlertContext from '../../../storage/AlertContext'
import AlertState from '../../Alert/AlertState'
import DevicePageContext from '../../../storage/DevicePageContext'
import CreditRowMonth from '../CreditRowMonth/CreditRowMonth'

const DevicePay = ({ data, cart }) => {
    const {
        cartButton,
        setCartButton,
        paymentState,
        setPaymentState,
        colorState,
        setColorState,
        creditState,
        setCreditState,
    } = useContext(DevicePageContext)
    const [,setAlert] = useContext(AlertContext)

    const HandleAddToCart = (data) => {
        if (!cartButton) {

            if(!colorState){
                setAlert(AlertState['dontChooseColor'])
                return
            }

            if (!paymentState) {
                setAlert(AlertState['dontChoosePayMethod'])
                return
            }

            if (!creditState && paymentState === 'later') {
                setAlert(AlertState['dontChooseCreditDate'])
                return
            }

            setAlert(AlertState['addedToCart'])
            cart.addDeviceToCart(data)
            setCartButton(true)
        } else {
            setAlert(AlertState['deletedFromCart'])
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
                    >
                        {paymentState === 'now' ? '✔' : ''}
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
                    >
                        {paymentState === 'later' ? '✔' : ''}
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
                <CreditRowMonth number={3}/>
                <CreditRowMonth number={6}/>
                <CreditRowMonth number={9}/>
                <CreditRowMonth number={12}/>
                
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
