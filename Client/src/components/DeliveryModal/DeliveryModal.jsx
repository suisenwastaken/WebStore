import { useContext, useEffect, useState } from 'react'
import styles from './DeliveryModal.module.css'
import { GET, POST, Request } from '../../api/APIFile'
import { DELIVERY_POINT_URL, ORDER_URL } from '../../api/Urls'
import CustomSelect from '../CustomSelect/CustomSelect'
import CustomInput from '../CustomInput/CustomInput'
import CustomButton from '../CustomButton/CustomButton'
import { validateDate } from '../../publicFunctions'
import AlertContext from '../../storage/AlertContext'
import AlertState from '../Alert/AlertState'
import { useNavigate } from 'react-router-dom'
import { storeURL } from '../../hoc/routerLinks'
import CartContext from '../../storage/CartContext'
import DeliveryPointsContext from '../../storage/deliveryPointsContext'

const DeliveryModal = ({
    isModalShown,
    setIsModalShown,
    deliveryDates,
    setIsNextModalShown,
    setOrder,
}) => {
    const { deliveryPoints } = useContext(DeliveryPointsContext)
    const [modalData, setModalData] = useState({
        deliveryPoint: '',
        homeDeliveryAddress: '',
        deliveryDate: '',
    })

    const [errors, setErrors] = useState({
        deliveryPoint: '',
        homeDeliveryAddress: '',
    })
    const [isButtonDisabled, setIsButtonDisabled] = useState(false)

    const { setAlert } = useContext(AlertContext)
    const { clearCartDevices } = useContext(CartContext)
    const navigate = useNavigate()

    useEffect(() => {
        if (modalData.deliveryPoint && errors.deliveryPoint) {
            setErrors((prevErrors) => ({
                ...prevErrors,
                deliveryPoint: '',
            }))
            setIsButtonDisabled(false)
        }

        if (modalData.deliveryPoint !== 1) {
            setErrors((prevErrors) => ({
                ...prevErrors,
                homeDeliveryAddress: '',
            }))
            setIsButtonDisabled(false)
        }

        if (
            modalData.deliveryPoint === 1 &&
            modalData.homeDeliveryAddress &&
            errors.homeDeliveryAddress
        ) {
            setErrors((prevErrors) => ({
                ...prevErrors,
                homeDeliveryAddress: '',
            }))
            setIsButtonDisabled(false)
        }
    }, [modalData.deliveryPoint, modalData.homeDeliveryAddress])

    const handleChangeData = (name, value) => {
        setModalData((prevData) => ({
            ...prevData,
            [name]: value,
        }))
    }

    const handleChangeDeliveryPoint = (obj) => {
        if (obj.value === 1) {
            handleChangeData('deliveryDate', deliveryDates.deliveryHome)
        } else {
            handleChangeData('deliveryDate', deliveryDates.deliveryPoint)
        }
        setModalData((prevData) => ({
            ...prevData,
            deliveryPoint: obj.value,
        }))
    }

    const handlePostOrder = async () => {
        if (!modalData.deliveryPoint) {
            setErrors((prevErrors) => ({
                ...prevErrors,
                deliveryPoint: 'Выберите пункт выдачи',
            }))
            setIsButtonDisabled(true)
            return
        }

        if (modalData.deliveryPoint === 1 && !modalData.homeDeliveryAddress) {
            setErrors((prevErrors) => ({
                ...prevErrors,
                homeDeliveryAddress: 'Введите адрес доставки',
            }))
            setIsButtonDisabled(true)
            return
        }

        try {
            const postOrderResponse = await Request.send({
                method: POST,
                url: ORDER_URL,
                data: {
                    deliveryPointId: modalData.deliveryPoint,
                    homeDeliveryAddress: modalData.homeDeliveryAddress,
                    deliveryDate: modalData.deliveryDate,
                },
                useToken: true,
            })

            if (postOrderResponse) {
                clearCartDevices()
                setOrder(postOrderResponse.data)
                setIsNextModalShown(true)
                setIsModalShown(false)
            }
        } catch (error) {
            setAlert(AlertState.unhandledError)
            console.error(error)
        }
    }

    if (isModalShown)
        return (
            <>
                <div
                    className={styles.ModalWindow}
                    onClick={() => setIsModalShown(false)}
                >
                    <div
                        className={styles.CenterBlock}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className={styles.h2}>Выберите пункт выдачи</div>
                        <div className={styles.inputSection}>
                            <CustomSelect
                                placeholder={'Пункт выдачи'}
                                name={'deliveryPoint'}
                                value={modalData.deliveryPoint}
                                onChange={handleChangeDeliveryPoint}
                                options={deliveryPoints}
                                error={errors.deliveryPoint}
                            />
                            {modalData?.deliveryPoint === 1 ? (
                                <CustomInput
                                    name={'homeDeliveryAddress'}
                                    value={modalData.homeDeliveryAddress}
                                    onChange={handleChangeData}
                                    placeHolder={'Адрес доставки'}
                                    error={errors.homeDeliveryAddress}
                                />
                            ) : (
                                ''
                            )}
                            {modalData.deliveryPoint ? (
                                <div className={styles.DeliveryDate}>
                                    Дата доставки:{' '}
                                    {validateDate(modalData.deliveryDate)}
                                </div>
                            ) : (
                                ''
                            )}
                        </div>
                        <CustomButton
                            text={'Оформить заказ'}
                            style={{ width: '100%' }}
                            onClick={handlePostOrder}
                            disabled={isButtonDisabled}
                        />
                    </div>
                </div>
            </>
        )
}

export default DeliveryModal
