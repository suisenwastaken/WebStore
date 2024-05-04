import styles from './CommentModal.module.css'
import CustomButton from '../CustomButton/CustomButton'
import CustomInput from '../CustomInput/CustomInput'
import CustomTextArea from '../CustomTextArea/CustomTextArea'
import RatingStars from '../RatingStars/RatingStars'
import { POST, Request } from '../../api/APIFile'
import { useContext, useState } from 'react'
import UserContext from '../../storage/UserContext'
import AlertContext from '../../storage/AlertContext'
import AlertState from '../Alert/AlertState'
import { DEVICE_BY_ID_URL } from '../../api/Urls'
import { useParams } from 'react-router-dom'
const CommentModal = ({ isModalShown, setIsModalShown }) => {
    const { user } = useContext(UserContext)
    const { setAlert } = useContext(AlertContext)
    const { id } = useParams()
    const [commentData, setCommentData] = useState({
        rating: 0,
        title: '',
        text: '',
    })

    const changeCommentData = (name, data) => {
        setCommentData((prev) => ({
            ...prev,
            [name]: data,
        }))
    }

    const handleClick = async () => {
        if (!user) {
            setAlert(AlertState.notAuthorized)
            return
        } else {
            try {
                const commentResponse = await Request.send({
                    method: POST,
                    url: DEVICE_BY_ID_URL(id),
                    useToken: true,
                    data: {
                        rate: commentData.rating,
                        title: commentData.title,
                        description: commentData.text
                    }
                })
                if (commentResponse) {
                    setAlert(AlertState.commentAdded)
                    setIsModalShown(false)
                }
            } catch (error) {
                setAlert(AlertState.unhandledError)
            }
        }
    }

    if (isModalShown) {
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
                        <div className={styles.h2}>Отзыв на товар</div>
                        <div className={styles.RateBlock}>
                            Оценка:{' '}
                            <RatingStars
                                style={{ fontSize: '28px' }}
                                type={'active'}
                                rating={commentData.rating}
                                setRating={changeCommentData}
                            />
                        </div>
                        <div className={styles.InputBlock}>
                            <div className={styles.h3}>Заголовок:</div>
                            <CustomInput
                                placeHolder={'Выделите главную мысль'}
                                value={commentData.title}
                                onChange={changeCommentData}
                                name={'title'}
                            />
                        </div>
                        <div className={styles.InputBlock}>
                            <div className={styles.h3}>Основной текст:</div>
                            <CustomTextArea
                                placeHolder={
                                    'Распишите все что думаете о товаре'
                                }
                                value={commentData.text}
                                onChange={changeCommentData}
                                name={'text'}
                            />
                        </div>
                        <CustomButton
                            text={'Отправить отзыв'}
                            onClick={handleClick}
                        />
                    </div>
                </div>
            </>
        )
    }
}

export default CommentModal
