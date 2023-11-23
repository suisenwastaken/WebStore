import styles from './HeaderHover.module.css'
import { useContext, useState } from 'react'
import { Context } from '../../storage/Context'
import Card from '../Card/Card'
import { Link, useNavigate } from 'react-router-dom'

const HeaderHover = ({
    type,
    text,
    style,
    showState,
    setShowState,
    categoryState,
}) => {
    const adress = {
        _types: 'type',
        _brands: 'brand'
    }
    const { device } = useContext(Context);
    const list = device[categoryState];
    const navigate = useNavigate();
    return (
        <>
            <div
                className={styles.Container}
                style={style}
                onMouseLeave={() => setShowState(false)}
                onMouseOver={() => setShowState(true)}
            >
                {list.map((t, i) => (
                    <Card
                        key={i}
                        deviceName={t.name}
                        brandName={''}
                        img={
                            device.devices.filter((obj) => {
                                if (categoryState === '_brands') {
                                    return obj.brandId === t.id
                                } else {
                                    return obj.typeId === t.id
                                }
                            })[0].img
                        }
                        onClick={() => navigate(`/${adress[categoryState]}/${t.id}`)}
                    />
                ))}
            </div>

            <div className={styles.Dark} style={style} />
        </>
    )
}

export default HeaderHover
