import { useParams } from 'react-router-dom'
import styles from './DevicePage.module.css'
import Button from "../../components/Button/Button";
import { useEffect, useState } from 'react'
import { getDeviceById } from '../../api/devices/getDeviceById'
import { BiShoppingBag, BiBadgeCheck, BiBox, BiSolidStar, BiSolidDiscount } from "react-icons/bi";

const DevicePage = () => {
    const { id } = useParams()
    const [data, setData] = useState({})
    const [deviceInfo, setDeviceInfo] = useState([])

    useEffect(() => {
        const getData = async () => {
            const result = await getDeviceById(id)
            setData(result)
            setDeviceInfo(result.device_info)
        }
        getData()
    }, [])

    return (
        <div className={styles.Page}>
            <div className={styles.TopBlock}>
                <div className={styles.ImageBlock}>
                    <img src={'/' + data.img} />
                </div>
                <div className={styles.InfoBlock}>
                    <div className={styles.Name}>{data.name}</div>
                    <div className={styles.RateRow}>
                        <div className={styles.Rate}><BiSolidStar />{data.rating}</div>
                        <div className={styles.SoldCount}> | продано 125</div>
                    </div>
                    <div className={styles.Statuses}>
                        <div className={styles.StatusGroup}><BiShoppingBag /> В наличии</div>
                        <div className={styles.StatusGroup}><BiBadgeCheck /> Гарантия</div>
                        <div className={styles.StatusGroup}><BiBox /> Бесплатная доставка</div>
                    </div>
                    <div className={styles.SelectColor}>Выберите цвет
                        <div className={styles.SelectColorRound}></div>
                        <div className={styles.SelectColorRound}></div>
                    </div>
                    {console.log(deviceInfo)}
                    <div className={styles.ShortInfo}>
                        {
                        deviceInfo.map((inf) =>(
                            <div className={styles.ShortInfoRow}>
                                <div className={styles.InfoKey}>{inf.title}</div>
                                <div className={styles.InfoValue}>{inf.name}</div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className={styles.PriceBlock}>
                    <div className={styles.Prices}>
                        <div className={styles.PriceRow}>
                            <div className={styles.PriceNow}>$ {data.price}</div>
                            <div className={styles.Discount}><BiSolidDiscount />-12%</div>
                        </div>
                        <div className={styles.LastPrice}>Обычная цена $ {data.price * 0.88}</div>
                    </div>
                    <div className={styles.PayDataChoose}>
                        <div className={styles.PayDataCheckRow}><input type="checkbox" />Заплатить сейчас</div>
                        <div className={styles.PayDataCheckRow}><input type="checkbox" />Купить в расрочку</div>
                    </div>
                    <div className={styles.CreditRowChoose}>
                        <div className={styles.CreditRowMonth}>3 Месяцев</div>
                        <div className={styles.CreditRowMonth}>6 Месяцев</div>
                        <div className={styles.CreditRowMonth}>9 Месяцев</div>
                        <div className={styles.CreditRowMonth}>12 Месяцев</div>
                    </div>
                    <div className={styles.Buttons}>
                        <Button
                            style={{backgroundColor: '#0C68F4'}}
                            text={'Купить'}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DevicePage
