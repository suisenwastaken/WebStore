import { useContext, useEffect, useState } from 'react'
import styles from './Favorites.module.css'
import Card from '../../components/Card/Card'
import { Link, redirect, useNavigate } from 'react-router-dom'
import FavoriteContext from '../../storage/FavoriteContext'
const Favorites = () => {
    const navigate = useNavigate()
    const {favoriteDevices} = useContext(FavoriteContext)


    return (
        <div className={styles.Page}>
            <div className={styles.h1}>Избранные</div>
            <div className={styles.CenterBlock}>
                {favoriteDevices?.map((item, i) => (
                    <Card
                        device={item}
                        key={i}
                        onClick={() => navigate('/device/' + item.id)}
                    />
                ))}
            </div>
        </div>
    )
}

export default Favorites
