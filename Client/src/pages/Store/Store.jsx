import styles from './Store.module.css'
import { useContext, useEffect } from 'react'
import Card from '../../components/Card/Card'
import GreetingsCard from '../../components/GreetingsCard'
import CardSlider from '../../components/CardSlider/CardSlider'
import CategoryCard from '../../components/CategorieCard'
import { TypeEnum } from '../../publicFunctions'
import { BiHeadphone } from 'react-icons/bi'
import { BiTv } from 'react-icons/bi'
import { BiDesktop } from 'react-icons/bi'
import { BiMobile } from 'react-icons/bi'
import { BiLaptop } from 'react-icons/bi'
import { useNavigate } from 'react-router-dom'
import { searchPageURL } from '../../hoc/routerLinks'
import { BiMouse } from "react-icons/bi";

const Store = () => {
    const icons = [
        <BiHeadphone />,
        <BiTv />,
        <BiDesktop />,
        <BiMouse/>,
        <BiMobile />,
        <BiLaptop />,
    ]
    const navigate = useNavigate()

    return (
        <div className={styles.Page}>
            <GreetingsCard />
            <CardSlider SliderName={'Самое популярное'} />

            <div className={styles.Categories}>
                <div className={styles.h1}>Категории</div>
                <div className={styles.CategoryCards}>
                    {TypeEnum.map((type, i) => (
                        <CategoryCard
                            key={i}
                            text={type.name}
                            icon={icons[i]}
                            onClick={() => {
                                const searchParams = new URLSearchParams()
                                searchParams.append('typeId', type.id)
                                navigate(
                                    searchPageURL +
                                        '?' +
                                        searchParams.toString()
                                )
                            }}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Store
