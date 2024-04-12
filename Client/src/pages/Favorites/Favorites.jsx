import { useState } from 'react'
import styles from './Favorites.module.css'
import { getDevicesFromFavorite } from '../../localStorage/favoriteDeviceStorage'
import Card from '../../components/Card/Card'
import { Link, redirect, useNavigate } from 'react-router-dom'
const Favorites = () => {
    const [devices, setDevices] = useState(getDevicesFromFavorite())
    const navigate = useNavigate()

    return (
        <div className={styles.Page}>
            <div className={styles.h1}>Избранные</div>
            <div className={styles.CenterBlock}>
                {devices.map((item) => (
                    <Card
                        device={item}
                        onClick={() => navigate('/device/' + item.id)}
                    />
                ))}
            </div>
        </div>
    )
}

export default Favorites
