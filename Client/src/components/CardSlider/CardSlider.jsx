import { useContext } from 'react'
import styles from './CardSlider.module.css'
import { Context } from '../../storage/Context'
import Card from '../Card/Card'



const CardSlider = ({SliderName}) => {
  const { device } = useContext(Context)

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
          />
        ))}
      </div>
    </>
  )
}

export default CardSlider
