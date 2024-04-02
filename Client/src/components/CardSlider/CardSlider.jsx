import styles from './CardSlider.module.css'
import { useContext, useState, useEffect } from 'react'
import { Context } from '../../storage/Context'
import Card from '../Card/Card'
import { Link, redirect, useNavigate } from 'react-router-dom'
import { getDevices } from '../../api/devices/getDevices'
import Carousel from 'nuka-carousel'

const CardSlider = ({ SliderName }) => {
    const navigate = useNavigate()
    const [data, setData] = useState([])

    useEffect(() => {
        const getData = async () => {
            const result = await getDevices()
            setData(result)
        }
        getData()
    }, [])

    return (
        <>
            {/* {console.log(data)} */}
            <div className={styles.Category}>{SliderName}</div>
            <Carousel
                speed={1000}
                disableEdgeSwiping={true}
                className={styles.CardLine}
                wrapAround={true}
                slidesToScroll={2}
                defaultControlsConfig={{
                    pagingDotsClassName: styles.Dots,
                    prevButtonClassName: styles.Arrow,
                    nextButtonClassName: styles.Arrow,
                    prevButtonText: '<',
                    nextButtonText: '>',
                }}
            >
                {data.map((d, i) => (
                    <Card
                        key={i}
                        img={d.img}
                        type={d.type}
                        brandName={d.brand}
                        deviceName={d.name}
                        devicePrice={d.price}
                        deviceRate={d.rating}
                        onClick={() => navigate('/device/' + d.id)}
                    />
                ))}
            </Carousel>
        </>
    )
}

export default CardSlider
