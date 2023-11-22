import { useContext } from 'react'
import styles from './CardSlider.module.css'
import { Context } from '../../storage/Context'
import Card from '../Card/Card'
import { Link, redirect, useNavigate } from 'react-router-dom'



const CardSlider = ({SliderName}) => {
  const { device } = useContext(Context)
  const navigate = useNavigate();

  return (
    <>
      <div className={styles.Category}>{SliderName}</div>
      <div className={styles.CardLine}>
        {device.devices.map((d, i) => (
            <Card
              key={i}
              img={d.img}
              brandName={device.brands.filter((obj) => {
                return obj.id === d.brandId
              })}
              deviceName={d.name}
              devicePrice={d.price}
              deviceRate={d.rating}
              onClick={() => navigate('/login')}
            />
        ))}
      </div>
    </>
  )
}

export default CardSlider
