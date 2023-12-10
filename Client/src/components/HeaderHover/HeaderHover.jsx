import styles from './HeaderHover.module.css'
import { useContext, useState } from 'react'
import { Context } from '../../storage/Context'
import { Link, useNavigate } from 'react-router-dom'
import HeaderCategories from '../../storage/HeaderCategories'

const HeaderHover = ({ style, showState, setShowState }) => {
    const chooseStile = {
        backgroundColor: '#fffdff',
        boxShadow: '-8px 8px 8px 0px rgba(34, 60, 80, 0.06)',
    }

    const { device } = useContext(Context)
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
                        {HeaderCategories.categories.name}
                    </div>
                    <div
                        className={styles.Categorie}
                        style={categoryState === 'brands' ? chooseStile : {}}
                        onClick={() => setCategoryState('brands')}
                    >
                        {HeaderCategories.brands.name}
                    </div>
                </div>
                <div className={styles.CategoryStates}>
                    {categoryState === 'categories'
                        ? HeaderCategories.categories.values.map((t, i) => (
                              <div className={styles.CategoreBlock} key={i}>
                                  <div className={styles.CategoryHead}>
                                      {t.name}
                                  </div>
                                  {t.values.map((c, i) => (
                                      <div
                                      key={i}
                                          className={styles.CategoryName}
                                          onClick={() => {
                                              navigate(`/type/${t.url}`)
                                              setShowState(false)
                                          }}
                                      >
                                          {c}
                                      </div>
                                  ))}
                              </div>
                          ))
                        : HeaderCategories.brands.values.map((t, i) => (
                              <div
                                  className={styles.BrandBlock}
                                  key={i}
                                  onClick={() => {
                                      navigate(`/brand/${t.name}`)
                                      setShowState(false)
                                  }}
                              >
                                  <div className={styles.Image}>
                                      <img src={t.logo} alt="logo" />
                                  </div>
                                  <div className={styles.BrandText}>
                                      {t.name}
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
