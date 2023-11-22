import { useParams } from 'react-router-dom'
import styles from './DevicePage.module.css'
import { useEffect, useState } from 'react';
import { getDeviceById } from '../../api/devices/getDeviceById';

const DevicePage = () => {
    const {id} = useParams();
    const [name, setName] = useState('asd')

    useEffect(() =>{
        const getData = async () =>{
            const result = await getDeviceById(id)
            setName(result.name)
        }
        getData()
    },[])

    return (
        <>
            <div className={styles.TopBlock}>
                <div className={styles.ImageBlock}>{name}</div>
                <div className={styles.InfoBlock}></div>
                <div className={styles.ProceBlock}></div>
            </div>

        </>
    );
}

export default DevicePage;