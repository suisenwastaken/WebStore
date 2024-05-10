import styles from './GreetingSliderCards.module.css'

const Card = ({ className, slideId, image, onClick }) => (
    <div data-slide={slideId} className={styles.SliderCard} onClick={onClick}>
        <img src={image} alt="add" />
    </div>
)

export default Card