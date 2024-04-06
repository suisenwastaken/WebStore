import styles from './CommentModal.module.css'
const CommentModal = ({ isModalShown, setIsModalShown }) => {
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
                    
                </div>
            </div>
        </>
    )
}

export default CommentModal
