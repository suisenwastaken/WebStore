import styles from './CardSmall.module.css';

const CardSmall = () => {
    return (
        <>
        <div className={styles.Card}>
            <div className={styles.Picture}></div>
            <div className={styles.Info}>
                <div className={styles.Name}></div>
                <div className={styles.Price}></div>
            </div>
        </div>
        </>
    );
}

export default CardSmall;