import { useParams } from 'react-router-dom'
import styles from './DevicePage.module.css'
import DevicePay from '../../components/DevicePay/DevicePay'
import DeviceInfo from '../../components/DeviceInfo/DeviceInfo'
import { useEffect, useState, useContext } from 'react'
import { getDeviceById } from '../../api/devices/getDeviceById'
import { Context } from '../../storage/Context'
import { observer } from 'mobx-react-lite'
import CommentSection from '../../components/CommentSection/CommentSection'
import DevicePageContext from '../../storage/DevicePageContext'

const DevicePage = () => {
    const { id } = useParams()
    const { deviceInfo, setDeviceInfo } = useContext(DevicePageContext)

    useEffect(() => {
        const getData = async () => {
            const result = await getDeviceById(id)
            setDeviceInfo(result)
        }
        getData()
    }, [])

    return (
        <div className={styles.Page}>
            <div className={styles.TopBlock}>
                <div className={styles.ImageBlock}>
                    <img src={'/' + deviceInfo.img} />
                </div>

                <DeviceInfo />
                <DevicePay deviceInfo={deviceInfo}/>
            </div>
            <CommentSection />
        </div>
    )
}

export default observer(DevicePage)
