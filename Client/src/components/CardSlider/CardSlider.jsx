import styles from './CardSlider.module.css'
import { useContext, useState, useEffect } from 'react'
import Card from '../Card/Card'
import { Link, redirect, useNavigate } from 'react-router-dom'
import { getDevices } from '../../api/devices/getDevices'
import Carousel from 'nuka-carousel'
import { GET, Request } from '../../api/APIFile'
import { DEVICE_PROMO_URL } from '../../api/Urls'
import { devicePageURL } from '../../hoc/routerLinks'

const CardSlider = ({ SliderName }) => {
    const navigate = useNavigate()
    const [data, setData] = useState([])

    useEffect(() => {
        const getData = async () => {
            const response = await Request.send({
                method: GET,
                url: DEVICE_PROMO_URL,
                useToken: false,
            })
            setData(response.data)
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
                        device={d}
                        onClick={() => navigate(devicePageURL + d.id)}
                        place={'slider'}
                    />
                ))}
            </Carousel>
        </>
    )
}

export default CardSlider
