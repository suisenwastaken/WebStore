import styles from './Header.module.css'
import { Link, useNavigate } from 'react-router-dom'

import { BiSearch, BiUser, BiCart } from 'react-icons/bi'
import { useState, useContext } from 'react'
import HeaderHover from '../HeaderHover/HeaderHover'
import LoginCard from '../LoginCard/LoginCard'
import { Context } from '../../storage/Context'
import LoginModalContext from '../../storage/LoginModalContext'
const Header = ({}) => {
    const [showModal, setShowModal] = useState(false)
    const [showedCategory, setShowedCategory] = useState('_brands')
    const [showLoginModal, setShowLoginModal] = useContext(LoginModalContext)
    const navigate = useNavigate()
    const { user } = useContext(Context)
    // console.log(showModal)

    const handleProfile = () =>{    
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
            >
                <div className={styles.Logo} onClick={() => navigate('/')}>
                    <img
                        className={styles.LogoPicture}
                        src="/logo.png"
                        alt="logo"
                    />
                </div>
                <div className={styles.NavTools}>
                    <div className={styles.NavLinks}>
                        <Link to="/">Главная</Link>
                    </div>
                    <div
                        className={styles.HeaderHoverBlock}
                        onMouseOver={() => setShowModal(true)}
                    >
                        <div
                            className={[
                                styles.NavLinks,
                                styles.HeaderHover,
                            ].join(' ')}
                            onMouseLeave={() => setShowModal(false)}
                            onMouseOver={() => {
                                setShowedCategory('_brands')
                            }}
                        >
                            Бренды
                        </div>
                        <div
                            className={[
                                styles.NavLinks,
                                styles.HeaderHover,
                            ].join(' ')}
                            onMouseLeave={() => setShowModal(false)}
                            onMouseOver={() => {
                                setShowedCategory('_types')
                            }}
                        >
                            Категории
                        </div>
                    </div>
                    <div className={styles.NavLinks}>
                        <Link to="/">О нас</Link>
                    </div>
                </div>
                <div className={styles.UserTools}>
                    <div className={styles.UserLinks}>
                        <Link style={{ color: 'black' }} to="/">
                            <BiSearch />
                        </Link>
                    </div>
                    <div className={styles.UserLinks}>
                        <Link style={{ color: 'black' }} to="/">
                            <BiCart />
                        </Link>
                    </div>
                    <div className={styles.UserLinks}>
                        <div
                            style={{ color: 'black' }}
                            onClick={handleProfile}
                        >
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
                categoryState={showedCategory}
            />
        </>
    )
}

export default Header
