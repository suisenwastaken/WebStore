import { useParams } from 'react-router-dom'
import styles from './DevicePage.module.css'
import DevicePay from '../../components/DevicePay/DevicePay'
import DeviceInfo from '../../components/DeviceInfo/DeviceInfo'
import { useEffect, useState, useContext } from 'react'
import { observer } from 'mobx-react-lite'
import CommentSection from '../../components/CommentSection/CommentSection'
import DevicePageContext from '../../storage/DevicePageContext'
import { GET, Request } from '../../api/APIFile'
import { DEVICE_BY_ID_URL } from '../../api/Urls'

const DevicePage = () => {
    const { id } = useParams()
    const { deviceInfo, setDeviceInfo } = useContext(DevicePageContext)

    useEffect(() => {
        const getData = async () => {
            const deviceResponse = await Request.send({
                method: GET,
                url: DEVICE_BY_ID_URL(id),
                useToken: false,
            })
            setDeviceInfo(deviceResponse.data)
        }
        getData()
    }, [])

    return (
        <div className={styles.Page}>
            <div className={styles.TopBlock}>
                <div className={styles.ImageBlock}>
                    <img src={deviceInfo.img} />
                </div>

                <DeviceInfo deviceInfo={deviceInfo} />
                <DevicePay deviceInfo={deviceInfo} />
            </div>
            <CommentSection />
        </div>
    )
}

export default observer(DevicePage)
