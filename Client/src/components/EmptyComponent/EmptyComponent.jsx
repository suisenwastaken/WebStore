import styles from './EmptyComponent.module.css'
import { BiCartAdd } from 'react-icons/bi'
import { BiDonateHeart } from 'react-icons/bi'
import { BiPackage } from 'react-icons/bi'
import { BiConfused } from "react-icons/bi";
const EmptyComponent = ({ type }) => {
    const renderComponent = {
        basket: (
            <div className={styles.EmptyComponent}>
                <BiCartAdd className={styles.Icon} />

                <div className={styles.h2}>Ваша корзина пуста</div>
                <div className={styles.Text}>
                    Похоже что вы еще ничего не добавили в корзину.
                    <br /> Как насчет пройтись по топ категориям?
                </div>
            </div>
        ),
        favorite: (
            <div className={styles.EmptyComponent}>
                <BiDonateHeart className={styles.Icon} />

                <div className={styles.h2}>Ваш список избранных пуст</div>
                <div className={styles.Text}>
                    Похоже что вы еще ничего не добавили в избранные.
                    <br /> Как насчет пройтись по топ категориям?
                </div>
            </div>
        ),
        orders: (
            <div className={styles.EmptyComponent}>
                <BiPackage className={styles.Icon} />

                <div className={styles.h2}>Ваш список заказов пуст</div>
                <div className={styles.Text}>
                    Похоже что вы еще ничего не заказали.
                    <br /> Как насчет пройтись по топ категориям?
                </div>
            </div>
        ),
        devices: (
            <div className={styles.EmptyComponent}>
                <BiConfused className={styles.Icon} />

                <div className={styles.h2}>По вашему запросу ничего не найдено</div>
                <div className={styles.Text}>
                    Похоже что вы ошиблись в написании.
                    <br /> Ну или мы пока не продаем это устройство.
                </div>
            </div>
        ),
    }

    return renderComponent[type]
}

export default EmptyComponent
