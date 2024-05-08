import styles from './CardSlider.module.css'
import { useContext, useState, useEffect } from 'react'
import Card from '../Card/Card'
import { Link, redirect, useNavigate } from 'react-router-dom'
import Carousel from 'nuka-carousel'
import { GET, Request } from '../../api/APIFile'
import { DEVICE_PROMO_URL } from '../../api/Urls'
import { devicePageURL } from '../../hoc/routerLinks'
import { BiLeftArrowAlt } from "react-icons/bi";
import { BiRightArrowAlt } from "react-icons/bi";

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
        <div className={styles.Slider}>
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
                    prevButtonText: <BiLeftArrowAlt/>,
                    nextButtonText: <BiRightArrowAlt/>,
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
        </div>
    )
}

export default CardSlider
