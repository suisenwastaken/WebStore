import styles from './CategoryCard.module.css';
const CategoryCard = ({text, icon, onClick}) => {
    return (
        <div className={styles.Card} onClick={onClick}>
            <div className={styles.Icon}>{icon}</div>
            <div className={styles.Text}>{text}</div>
        </div>
    );
}

export default CategoryCard;