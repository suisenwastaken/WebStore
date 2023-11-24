import { useParams } from 'react-router-dom'
import styles from './DevicePage.module.css'
import DevicePay from '../../components/DevicePage/DevicePay/DevicePay'
import DeviceInfo from '../../components/DevicePage/DeviceInfo/DeviceInfo'
import { useEffect, useState } from 'react'
import { getDeviceById } from '../../api/devices/getDeviceById'

const DevicePage = () => {
    const { id } = useParams()
    const [data, setData] = useState({})
    const [deviceInfo, setDeviceInfo] = useState([])

    useEffect(() => {
        const getData = async () => {
            const result = await getDeviceById(id)
            setData(result)
            setDeviceInfo(result.device_info)
        }
        getData()
    }, [])

    return (
        <div className={styles.Page}>
            <div className={styles.TopBlock}>
                <div className={styles.ImageBlock}>
                    <img src={'/' + data.img} />
                </div>

                <DeviceInfo data={data} deviceInfo={deviceInfo} />
                <DevicePay data={data} />
            </div>
        </div>
    )
}

export default DevicePage
