import styles from './Header.module.css'
import { Link, useNavigate } from 'react-router-dom'

import { BiSearch, BiUser, BiCart, BiMenu, BiHeart } from 'react-icons/bi'
import { useState, useContext } from 'react'
import HeaderHover from '../HeaderHover/HeaderHover'
import CustomInput2 from '../CustomInput2/CustomInput2'
import CustomButton from '../CustomButton/CustomButton'
import UserContext from '../../storage/UserContext'
import LoginModal from '../LoginModal/LoginModal'
import {
    basketURL,
    favoriteURL,
    profileURL,
    searchPageURL,
    storeURL,
} from '../../hoc/routerLinks'
import LoginModalContext from '../../storage/LoginModalContext'
const Header = ({ isHeaderHoverShown, setIsHeaderHoverShown }) => {
    const [searchValue, setSearchValue] = useState('')
    const { showLoginModal, setShowLoginModal } = useContext(LoginModalContext)
    const navigate = useNavigate()
    const { user } = useContext(UserContext)

    const handleClick = (route) => {
        user ? navigate(route) : setShowLoginModal(true)
    }

    return (
        <>
            <div
                className={styles.Header}
                // style={{
                //     position: !showModal ? 'relative' : 'fixed',
                // }}
                onClick={() => (isHeaderHoverShown ? setIsHeaderHoverShown(false) : '')}
            >
                <div className={styles.Logo} onClick={() => navigate(storeURL)}>
                    <img
                        className={styles.LogoPicture}
                        src="/HeaderLogo.png"
                        alt="logo"
                    />
                </div>
                <div className={styles.NavTools}>
                    <CustomButton
                        onClick={() =>
                            setIsHeaderHoverShown(!isHeaderHoverShown)
                        }
                        icon={<BiMenu />}
                        text={'Каталог'}
                    />

                    <div className={styles.SearchBlock}>
                        <CustomInput2
                            buttonText={<BiSearch />}
                            buttonStyle={{ fontSize: '20px' }}
                            onClick={() => {
                                const searchParams = new URLSearchParams()
                                searchParams.append('search', searchValue)
                                navigate(
                                    searchPageURL +
                                        '?' +
                                        searchParams.toString()
                                )
                            }}
                            value={searchValue}
                            onChange={(e) => setSearchValue(e.target.value)}
                        />
                    </div>
                </div>

                <div className={styles.UserTools}>
                    <CustomButton
                        icon={<BiUser />}
                        style={{ padding: '15px', border: 'none' }}
                        pStyle={{ fontSize: '20px' }}
                        type="light"
                        onClick={() => handleClick(profileURL)}
                    />
                    <CustomButton
                        icon={<BiHeart />}
                        style={{ padding: '15px', border: 'none' }}
                        pStyle={{ fontSize: '20px' }}
                        type="light"
                        onClick={() => handleClick(favoriteURL)}
                    />
                    <CustomButton
                        icon={<BiCart />}
                        style={{ padding: '15px', border: 'none' }}
                        pStyle={{ fontSize: '20px' }}
                        type="light"
                        onClick={() => handleClick(basketURL)}
                    />
                </div>
            </div>

            <LoginModal
                showLoginModal={showLoginModal}
                setShowLoginModal={setShowLoginModal}
            />
        </>
    )
}

export default Header
