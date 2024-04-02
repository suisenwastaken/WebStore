import { useParams } from 'react-router-dom'
import styles from './DevicePage.module.css'
import DevicePay from '../../components/DevicePage/DevicePay/DevicePay'
import DeviceInfo from '../../components/DevicePage/DeviceInfo/DeviceInfo'
import { useEffect, useState, useContext } from 'react'
import { getDeviceById } from '../../api/devices/getDeviceById'
import { Context } from '../../storage/Context'
import { observer } from 'mobx-react-lite'
import CommentSection from '../../components/DevicePage/CommentSection/CommentSection'


const DevicePage = () => {
    const { cart } = useContext(Context)
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
                <DevicePay data={data} cart={cart} />
            </div>
            <div className={styles.CommentSection}>
                <CommentSection/>
            </div>
        </div>
    )
}

export default observer(DevicePage)
