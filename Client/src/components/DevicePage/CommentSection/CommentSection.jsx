import styles from './CommentSection.module.css'
const CommentSection = () => {
    return (
        <>
            <div className={styles.CommentBlock}>
                <div className={styles.WriteCommentBlock}>
                    <div className={styles.LeftBlock}>
                        <div className={styles.UserInfo}>
                            <div className={styles.Avatar}></div>
                            <div className={styles.Name}></div>
                        </div>
                        <div className={styles.Rating}></div>
                    </div>
                    <div className={styles.CommentBlock}>
                        
                    </div>
                </div>
                <div className={styles.UsersComments}></div>
            </div>
        </>
    )
}

export default CommentSection
