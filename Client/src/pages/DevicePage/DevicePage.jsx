import { useParams } from 'react-router-dom'
import styles from './DevicePage.module.css'
import { useEffect, useState } from 'react'
import { getDeviceById } from '../../api/devices/getDeviceById'

const DevicePage = () => {
    const { id } = useParams()
    const [data, setData] = useState({})

    useEffect(() => {
        const getData = async () => {
            const result = await getDeviceById(id)
            setData(result)
        }
        getData()
    }, [])

    return (
        <div className={styles.Page}>
            <div className={styles.TopBlock}>
                <div className={styles.ImageBlock}>
                    {console.log(data)}
                    <img src={'/' + data.img} />
                </div>
                <div className={styles.InfoBlock}>
                    <div className={styles.Name}>{data.name}</div>
                    <div className={styles.Rate}>{data.rating}</div>
                    <div className={styles.Status}></div>
                    <div className={styles.SelectColor}></div>
                    <div className={styles.ShortInfo}></div>
                </div>
                <div className={styles.PriceBlock}>
                    <div className={styles.Prices}>
                        <div className={styles.PriceRow}>
                            <div className={styles.PriceNow}></div>
                            <div className={styles.Discount}></div>
                        </div>
                    </div>
                    <div className={styles.PayDataChoose}></div>
                    <div className={styles.Buttons}></div>
                </div>
            </div>
        </div>
    )
}

export default DevicePage
