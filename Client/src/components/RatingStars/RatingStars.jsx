import { useState } from 'react'
import styles from './RatingStars.module.css'
import { BiSolidStar } from 'react-icons/bi'
const RatingStars = ({ rating, style, type }) => {
    const [ratingComment, setRatingComment] = useState()
    const [hoverComment, setHoverComment] = useState()
    if (type === 'active') {
        return (
            <div className={styles.RatingContainer}>
                {[1, 2, 3, 4, 5].map((index) => (
                    <BiSolidStar
                        key={index}
                        className={
                            (index <= ratingComment || index <= hoverComment)
                                ? styles.YellowStar
                                : styles.Star
                        }
                        onMouseEnter={() => setHoverComment(index)}
                        onMouseLeave={() => setHoverComment(0)}
                        onClick={() => setRatingComment(index)}
                        style={style}
                    />
                ))}
            </div>
        )
    } else {
        return (
            <div className={styles.RatingContainer}>
                <BiSolidStar
                    className={rating > 0 ? styles.YellowStar : styles.Star}
                    style={style}
                />
                <BiSolidStar
                    className={rating > 1 ? styles.YellowStar : styles.Star}
                    style={style}
                />
                <BiSolidStar
                    className={rating > 2 ? styles.YellowStar : styles.Star}
                    style={style}
                />
                <BiSolidStar
                    className={rating > 3 ? styles.YellowStar : styles.Star}
                    style={style}
                />
                <BiSolidStar
                    className={rating > 4 ? styles.YellowStar : styles.Star}
                    style={style}
                />
            </div>
        )
    }
}

export default RatingStars
