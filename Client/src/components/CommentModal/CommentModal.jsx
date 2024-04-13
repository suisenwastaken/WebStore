import styles from './CommentModal.module.css'
import CustomButton from '../CustomButton/CustomButton'
import CustomInput from '../CustomInput/CustomInput'
import CustomTextArea from '../CustomTextArea/CustomTextArea'
import RatingStars from '../RatingStars/RatingStars'
const CommentModal = ({ isModalShown, setIsModalShown }) => {
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
                            Оценка: <RatingStars style={{fontSize: '28px'}} type={'active'}/>
                        </div>
                        <div className={styles.InputBlock}>
                            <div className={styles.h3}>Заголовок:</div>
                            <CustomInput placeHolder={'Выделите главную мысль'}/>
                        </div>
                        <div className={styles.InputBlock}>
                            <div className={styles.h3}>Основной текст:</div>
                            <CustomTextArea placeHolder={'Распишите все что думаете о товаре'} />
                        </div>
                        <CustomButton  text={'Отправить отзыв'}/>
                    </div>
                </div>
            </>
        )
    }
}

export default CommentModal
