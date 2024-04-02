import { useNavigate } from 'react-router-dom'
import styles from './GreetingsCard.module.css'
import LoginModalContext from '../../storage/LoginModalContext'
import { useContext } from 'react'
import Carousel from 'nuka-carousel';
import {GreetingSliderCards} from '../GreetingSliderCards/GreetingSliderCards'


const GreetingsCard = () => {
    const navigate = useNavigate()
    return(
        <Carousel
            autoplay={true}
            autoplayInterval={4000}
            speed={1000}
            disableEdgeSwiping={true}
            className={styles.Carousel}
            wrapAround={true}
            withoutControls={true}
        >
            {GreetingSliderCards}
        </Carousel>
    )

}

export default GreetingsCard
