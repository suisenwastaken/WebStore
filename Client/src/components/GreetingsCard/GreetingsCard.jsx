import { useNavigate } from 'react-router-dom'
import Button from '../Button/Button'
import styles from './GreetingsCard.module.css'
import LoginModalContext from '../../storage/LoginModalContext'
import { useContext } from 'react'
import Carousel from 'nuka-carousel';
import {GreetingSliderCards} from '../GreetingSliderCards/GreetingSliderCards'


const GreetingsCard = () => {
    const navigate = useNavigate()

    // return (
    //     <div className={styles.Card}>
    //         <div className={styles.LeftInfo}>
    //             <div className={styles.Text}>
    //                 <div className={styles.h1}>Магазин WebStore</div>
    //                 <div className={styles.h2}>
    //                     "Как говорится всем привет!"
    //                 </div>
    //             </div>
    //             <Button
    //                 text="О нас"
    //                 className={styles.Button}
    //                 onClick={() => navigate('/about')}
    //                 // styles={{ backgroundColor: '#ee7300' }}
    //             />
    //         </div>
    //         <div className={styles.Picture}>
    //             <img src="HomeLaptops.png" alt="Picture" />
    //         </div>
    //     </div>
    // )
    return(
        <Carousel
            // autoplay={true}
            autoplayInterval={5000}
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
