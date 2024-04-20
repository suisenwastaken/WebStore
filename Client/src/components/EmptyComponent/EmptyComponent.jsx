import styles from './EmptyComponent.module.css'
import { BiCartAdd } from 'react-icons/bi'
import { BiDonateHeart } from 'react-icons/bi'
const EmptyComponent = ({ type }) => {
    if (type === 'basket') {
        return (
            <div className={styles.EmptyComponent}>
                <BiCartAdd className={styles.Icon} />

                <div className={styles.h2}>Ваша корзина пуста</div>
                <div className={styles.Text}>
                    Похоже что вы еще ничего не добавили в корзину.
                    <br /> Как насчет пройтись по топ категориям?
                </div>
            </div>
        )
    } else {
        return (
            <div className={styles.EmptyComponent}>
                <BiDonateHeart className={styles.Icon} />

                <div className={styles.h2}>Ваш список избранных пуст</div>
                <div className={styles.Text}>
                    Похоже что вы еще ничего не добавили в избранные.
                    <br /> Как насчет пройтись по топ категориям?
                </div>
            </div>
        )
    }
}

export default EmptyComponent
