import styles from './Header.module.css'
import { Link, useNavigate } from 'react-router-dom'

import { BiSearch, BiUser, BiCart } from 'react-icons/bi'
import { useState } from 'react'
import HeaderHover from '../HeaderHover/HeaderHover'
import LoginCard from '../Login/LoginCard'

const Header = ({}) => {
    const [showModal, setShowModal] = useState(false)
    const [showedCategory, setShowedCategory] = useState('_brands')
    const [showLoginCard, setShowLoginCard] = useState(false)
    const navigate = useNavigate()
    // console.log(showModal)
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
                            onClick={() => setShowLoginCard(true)}
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

            <div
                className={styles.LoginModalBackground}
                onClick={() => setShowLoginCard(false)}
                style={!showLoginCard ? {display: 'none'} : {display: 'flex'}}
            >
                <LoginCard
                    onClick={e => e.stopPropagation()}
                 />
            </div>
        </>
    )
}

export default Header
