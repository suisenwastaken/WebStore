import styles from './RatingStars.module.css'
import { BiSolidStar } from 'react-icons/bi'
const RatingStars = ({ rating }) => {
    return (
        <div className={styles.RatingContainer}>
            {console.log(rating)}
            <BiSolidStar className={rating > 0 ? styles.YellowStar : styles.Star} />
            <BiSolidStar className={rating > 1 ? styles.YellowStar : styles.Star} />
            <BiSolidStar className={rating > 2 ? styles.YellowStar : styles.Star} />
            <BiSolidStar className={rating > 3 ? styles.YellowStar : styles.Star} />
            <BiSolidStar className={rating > 4 ? styles.YellowStar : styles.Star} />
        </div>
    )
}

export default RatingStars
