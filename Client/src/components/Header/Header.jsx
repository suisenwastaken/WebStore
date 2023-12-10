import styles from './Header.module.css'
import { Link, useNavigate } from 'react-router-dom'

import { BiSearch, BiUser, BiCart, BiMenu } from 'react-icons/bi'
import { useState, useContext } from 'react'
import HeaderHover from '../HeaderHover/HeaderHover'
import LoginCard from '../LoginCard/LoginCard'
import { Context } from '../../storage/Context'
import LoginModalContext from '../../storage/LoginModalContext'
const Header = ({}) => {
    const [showModal, setShowModal] = useState(false)
    const [showLoginModal, setShowLoginModal] = useContext(LoginModalContext)
    const navigate = useNavigate()
    const { user } = useContext(Context)
    // console.log(showModal)

    const handleProfile = () => {
        user.isAuth ? navigate('/profile') : setShowLoginModal(true)
    }

    return (
        <>
            <div
                className={styles.FakeElement}
                style={{
                    // opacity: !showModal ? '0': '1'
                    display: !showModal ? 'none' : 'block',
                }}
            />

            <div
                className={styles.Header}
                style={{
                    position: !showModal ? 'relative' : 'fixed',
                }}
                onClick={() => showModal? setShowModal(false) : ''}
            >
                <div className={styles.Logo} onClick={() => navigate('/')}>
                    <img
                        className={styles.LogoPicture}
                        src="/HeaderLogo.png"
                        alt="logo"
                    />
                </div>
                <div className={styles.NavTools}>
                    <div
                        className={styles.Catalog}
                        onClick={() => setShowModal(!showModal)}
                    >
                        <BiMenu /> 	&nbsp; Каталог
                    </div>

                    <div className={styles.SearchBlock}>
                        <input type="text" placeholder='Найдем все'/>
                        <div className={styles.SearchButton}>
                            <BiSearch />
                        </div>
                    </div>
                </div>

                <div className={styles.UserTools}>
                    <div className={styles.UserLinks}>
                        <Link style={{ color: '#594ae3' }} to="/">
                            <BiCart />
                        </Link>
                    </div>
                    <div className={styles.UserLinks}>
                        <div style={{ color: '#594ae3' }} onClick={handleProfile}>
                            <BiUser />
                        </div>
                    </div>
                </div>
            </div>

            <HeaderHover
                style={{
                    display: !showModal ? 'none' : 'flex',
                }}
                setShowState={setShowModal}
                showState={showModal}
            />
        </>
    )
}

export default Header
