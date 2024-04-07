import { useContext, useEffect } from 'react'
import Comment from '../Comment/Comment'
import styles from './CommentSection.module.css'
import DevicePageContext from '../../storage/DevicePageContext'
import CustomButton from '../CustomButton/CustomButton'
import { BiSolidStar } from 'react-icons/bi'

const CommentSection = () => {
    const { deviceInfo } = useContext(DevicePageContext)
    return (
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
                        style={{ width: '100%', borderRadius: '25px'}}
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
    )
}

export default CommentSection
