import styles from './Store.module.css'
import { useContext } from 'react'
import Card from '../../components/Card/Card'
import GreetingsCard from '../../components/GreetingsCard'
import { Context } from '../../storage/Context'
import CardSlider from '../../components/CardSlider/CardSlider'

const Store = () => {
  

  return (
    <div className={styles.Page}>
      <GreetingsCard />
      <CardSlider
        SliderName={'Самое популярное'}
      />
      
    </div>
  )
}

export default Store
