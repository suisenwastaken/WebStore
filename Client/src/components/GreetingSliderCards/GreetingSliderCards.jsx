import styles from './GreetingSliderCards.module.css'

const Card = ({ className, slideId, image }) => (
    <div data-slide={slideId} className={styles.SliderCard}>
        <img src={image} alt="add" />
    </div>
)

export const GreetingSliderCards = [
    <Card slideId={'Slide 1'} image={'add1.png'} key={1} />,
    <Card slideId={'Slide 2'} image={'add2.png'} key={2} />,
    <Card slideId={'Slide 3'} image={'add3.png'} key={3} />,
]
