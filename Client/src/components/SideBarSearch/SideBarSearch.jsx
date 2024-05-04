import { useEffect, useState } from 'react'
import styles from './SideBarSearch.module.css'
import { BrandEnum, TypeEnum } from '../../publicFunctions'
import CustomCheckbox from '../CustomCheckbox/CustomCheckbox'
import CustomDropDown from '../CustomDropDown/CustomDropDown'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { searchPageURL } from '../../hoc/routerLinks'
import { useIsMount } from '../../hooks/useIsMount'

const SideBarSearch = ({}) => {
    const [searchParams, setSearchParams] = useSearchParams()
    const [brandState, setBrandState] = useState([])
    const [typeState, setTypeState] = useState([])
    const navigate = useNavigate()
    const isMount = useIsMount()

    useEffect(() => {
        if (isMount) {
            setBrandState(searchParams.getAll('brandId').map(Number))
            setTypeState(searchParams.getAll('typeId').map(Number))
        }
    }, [])

    const handleChangeType = (id) => {
        setTypeState((prevTypeState) => {
            const updatedTypeState = prevTypeState.includes(id)
                ? prevTypeState.filter((el) => el !== id)
                : [...prevTypeState, id]

            const searchParams = new URLSearchParams(window.location.search)
            searchParams.delete('typeId')
            updatedTypeState.forEach((el) =>
                searchParams.append('typeId', el.toString())
            )
            navigate(searchPageURL + '?' + searchParams.toString())

            return updatedTypeState
        })
    }

    const handleChangeBrand = (id) => {
        setBrandState((prevTypeState) => {
            const updatedTypeState = prevTypeState.includes(id)
                ? prevTypeState.filter((el) => el !== id)
                : [...prevTypeState, id]

            const searchParams = new URLSearchParams(window.location.search)
            searchParams.delete('brandId')
            updatedTypeState.forEach((el) =>
                searchParams.append('brandId', el.toString())
            )
            navigate(searchPageURL + '?' + searchParams.toString())

            return updatedTypeState
        })
    }

    return (
        <>
            <div className={styles.SideSearchBar}>
                <div className={styles.h2}>Фильтры</div>
                <CustomDropDown
                    title={'Категории'}
                    key={'categories'}
                    childrenStyle={{ gap: '10px' }}
                    children={TypeEnum?.map((el) => (
                        <CustomDropDown
                            TitleRowStyle={{ fontWeight: '400' }}
                            style={{ paddingLeft: '10px' }}
                            key={'categories' + el.id}
                            title={el.name}
                            children={el?.values?.map((subEl) => (
                                <CustomCheckbox
                                    checked={typeState.includes(subEl.id)}
                                    onClick={() => handleChangeType(subEl.id)}
                                    style={{ paddingLeft: '10px' }}
                                    label={subEl.name}
                                    key={'subCategories' + subEl.id}
                                />
                            ))}
                        />
                    ))}
                />
                <CustomDropDown
                    title={'Бренды'}
                    key={'brands'}
                    childrenStyle={{ gap: '10px' }}
                    children={BrandEnum?.map((subEl) => (
                        <CustomCheckbox
                            checked={brandState.includes(subEl.id)}
                            onClick={() => handleChangeBrand(subEl.id)}
                            style={{ paddingLeft: '10px' }}
                            label={subEl.name}
                            key={'subBrand' + subEl.id}
                        />
                    ))}
                />
            </div>
        </>
    )
}

export default SideBarSearch
