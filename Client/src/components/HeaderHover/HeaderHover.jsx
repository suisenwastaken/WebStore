import styles from './HeaderHover.module.css'
import { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { BrandEnum, TypeEnum } from '../../publicFunctions'


const HeaderHover = ({ style, showState, setShowState }) => {
    const chooseStile = {
        backgroundColor: '#fffdff',
        boxShadow: '-8px 8px 8px 0px rgba(34, 60, 80, 0.06)',
    }


    const navigate = useNavigate()
    const [categoryState, setCategoryState] = useState('categories')
    return (
        <>
            <div className={styles.Container} style={style}>
                <div className={styles.Categories}>
                    <div
                        className={styles.Categorie}
                        style={
                            categoryState === 'categories' ? chooseStile : {}
                        }
                        onClick={() => setCategoryState('categories')}
                    >
                        Категории
                    </div>
                    <div
                        className={styles.Categorie}
                        style={categoryState === 'brands' ? chooseStile : {}}
                        onClick={() => setCategoryState('brands')}
                    >
                        Бренды
                    </div>
                </div>
                <div className={styles.CategoryStates}>
                    {categoryState === 'categories'
                        ? TypeEnum.map((type, i) => (
                              <div className={styles.CategoreBlock} key={i}>
                                  <div className={styles.CategoryHead}>
                                      {type.name}
                                  </div>
                                  {type.values.map((subType, i) => (
                                      <div
                                      key={i}
                                          className={styles.CategoryName}
                                          onClick={() => {
                                              setShowState(false)
                                          }}
                                      >
                                          {subType.name}
                                      </div>
                                  ))}
                              </div>
                          ))
                        : BrandEnum.map((brand, i) => (
                              <div
                                  className={styles.BrandBlock}
                                  key={i}
                                  onClick={() => {
                                      setShowState(false)
                                  }}
                              >
                                  <div className={styles.Image}>
                                      <img src={brand.logo} alt="logo" />
                                  </div>
                                  <div className={styles.BrandText}>
                                      {brand.name}
                                  </div>
                              </div>
                          ))}
                </div>
            </div>

            <div
                className={styles.Dark}
                style={style}
                onClick={() => setShowState(false)}
            />
        </>
    )
}

export default HeaderHover
