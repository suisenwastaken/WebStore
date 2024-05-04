import { useContext, useEffect, useState } from 'react'
import Comment from '../Comment/Comment'
import styles from './CommentSection.module.css'
import DevicePageContext from '../../storage/DevicePageContext'
import CustomButton from '../CustomButton/CustomButton'
import { BiSolidStar } from 'react-icons/bi'
import CommentModal from '../CommentModal/CommentModal'
import UserContext from '../../storage/UserContext'
import AlertContext from '../../storage/AlertContext'
import AlertState from '../Alert/AlertState'

const CommentSection = () => {
    const { deviceInfo } = useContext(DevicePageContext)
    const { user } = useContext(UserContext)
    const { setAlert } = useContext(AlertContext)
    const [isCommentModalShown, setIsCommentModalShown] = useState(false)
    return (
        <>
            <div className={styles.InfoCommentBlock}>
                <div className={styles.InfoBlock}>
                    <div className={styles.Description}>
                        <div className={styles.h1}>Описание</div>
                        <div className={styles.DescriptionText}>
                            {deviceInfo.description}
                        </div>
                    </div>
                    <div className={styles.AddCommentSection}>
                        <CustomButton
                            text={'Оставить отзыв'}
                            style={{ width: '100%', borderRadius: '25px' }}
                            onClick={() => {
                                if (user) {
                                    setIsCommentModalShown(true)
                                } else {
                                    setAlert(AlertState.notAuthorized)
                                }
                            }}
                        />
                        <div className={styles.RatingSection}>
                            Оценка
                            <div className={styles.Rate}>
                                {deviceInfo.rating}
                                <BiSolidStar />
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.CommentBlock}>
                    <div className={styles.h1}>Отзывы</div>
                    {deviceInfo.comments?.map((e) => (
                        <Comment commentData={e} key={e.id} />
                    ))}
                </div>
            </div>
            <CommentModal
                isModalShown={isCommentModalShown}
                setIsModalShown={setIsCommentModalShown}
            />
        </>
    )
}

export default CommentSection
