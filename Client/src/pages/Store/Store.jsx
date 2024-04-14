import styles from './Store.module.css'
import { useContext, useEffect } from 'react'
import Card from '../../components/Card/Card'
import GreetingsCard from '../../components/GreetingsCard'
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
