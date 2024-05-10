import { useNavigate } from 'react-router-dom'
import styles from './GreetingsCard.module.css'
import { useContext } from 'react'
import Carousel from 'nuka-carousel'
import Card from '../GreetingSliderCards/GreetingSliderCards'
import { DiscountPageURL } from '../../hoc/routerLinks'

const GreetingsCard = () => {
    const navigate = useNavigate()
    return (
        <Carousel
            autoplay={true}
            autoplayInterval={4000}
            speed={1000}
            disableEdgeSwiping={true}
            className={styles.Carousel}
            wrapAround={true}
            withoutControls={true}
        >
            <Card
                slideId={'Slide 1'}
                image={'add1.png'}
                key={1}
                onClick={() => navigate(DiscountPageURL + 1)}
            />
            <Card
                slideId={'Slide 2'}
                image={'add2.png'}
                key={2}
                onClick={() => navigate(DiscountPageURL + 2)}
            />
            <Card
                slideId={'Slide 3'}
                image={'add3.png'}
                key={3}
                onClick={() => navigate(DiscountPageURL + 3)}
            />
        </Carousel>
    )
}

export default GreetingsCard
