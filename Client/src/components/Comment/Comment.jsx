import RatingStars from '../RatingStars/RatingStars'
import styles from './Comment.module.css'

const Comment = ({ commentData }) => {
    return (
        <>
            <div className={styles.Comment}>
                <div className={styles.UserInfoSection}>
                    <div className={styles.ProfilePic}>
                        <img
                            src={commentData.user.ProfilePicURL}
                            alt="ProfilePicture"
                        />
                    </div>
                    <div className={styles.UserName}>
                        {commentData.user.name}
                    </div>
                    <div className={styles.Rating}>
                        <RatingStars rating={commentData.rate} />
                    </div>
                </div>
                <div className={styles.CommentTextSection}>
                    <div className={styles.h1}>{commentData.title}</div>
                    <div className={styles.Text}>{commentData.description}</div>
                </div>
            </div>
        </>
    )
}

export default Comment
