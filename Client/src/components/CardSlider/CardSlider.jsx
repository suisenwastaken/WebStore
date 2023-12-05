import styles from './CardSlider.module.css'
import { useContext, useState, useEffect } from 'react'
import { Context } from '../../storage/Context'
import Card from '../Card/Card'
import { Link, redirect, useNavigate } from 'react-router-dom'
import { getDevices } from '../../api/devices/getDevices'
import { getDeviceById } from '../../api/devices/getDeviceById'

const CardSlider = ({ SliderName }) => {

    const navigate = useNavigate()
    const [data, setData] = useState([]);

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
            <div className={styles.CardLine}>
                {data.map((d, i) => (
                    <Card
                        key={i}
                        img={d.img}
                        // brandName={d.brand.name}
                        brandName={d.brand}
                        deviceName={d.name}
                        devicePrice={d.price}
                        deviceRate={d.rating}
                        onClick={() => navigate('/device/' + d.id)}
                    />
                ))}
            </div>
        </>
    )
}

export default CardSlider
