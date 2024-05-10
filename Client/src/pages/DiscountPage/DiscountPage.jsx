import { useParams } from 'react-router-dom'
import styles from './DiscountPage.module.css'
import Card from '../../components/GreetingSliderCards/GreetingSliderCards'
import DiscountPageText from './DiscountPageText'
const DiscountPage = () => {
    const { id } = useParams()
    return (
        <div className={styles.Page}>
            <Card slideId={'Slide ' + id} image={`/add${id}.png`} key={id} />
            <div className={styles.h1}>{DiscountPageText[id - 1].h1}</div>
            <div className={styles.Steps}>
                {DiscountPageText[id - 1].steps.map((el) => (
                    <div className={styles.Step}>
                        <div className={styles.StepNumber}>{el.number}</div>
                        <div className={styles.StepText}>{el.text}</div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default DiscountPage
