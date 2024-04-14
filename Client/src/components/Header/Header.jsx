import styles from './Header.module.css'
import { Link, useNavigate } from 'react-router-dom'

import { BiSearch, BiUser, BiCart, BiMenu, BiHeart } from 'react-icons/bi'
import { useState, useContext } from 'react'
import HeaderHover from '../HeaderHover/HeaderHover'
import CustomInput2 from '../CustomInput2/CustomInput2'
import CustomButton from '../CustomButton/CustomButton'
import UserContext from '../../storage/UserContext'
import LoginModal from '../LoginModal/LoginModal'
const Header = ({}) => {
    const [showModal, setShowModal] = useState(false)
    const [showLoginModal, setShowLoginModal] = useState(false)
    const navigate = useNavigate()
    const { user } = useContext(UserContext)
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
                onClick={() => (showModal ? setShowModal(false) : '')}
            >
                <div className={styles.Logo} onClick={() => navigate('/')}>
                    <img
                        className={styles.LogoPicture}
                        src="/HeaderLogo.png"
                        alt="logo"
                    />
                </div>
                <div className={styles.NavTools}>
                    <CustomButton
                        onClick={() => setShowModal(!showModal)}
                        icon={<BiMenu />}
                        text={'Каталог'}
                    />

                    <div className={styles.SearchBlock}>
                        <CustomInput2
                            buttonText={<BiSearch />}
                            buttonStyle={{ fontSize: '20px' }}
                        />
                    </div>
                </div>

                <div className={styles.UserTools}>
                    <CustomButton
                        icon={<BiUser />}
                        style={{ padding: '15px', border: 'none' }}
                        pStyle={{ fontSize: '20px' }}
                        type="light"
                        onClick={handleProfile}
                    />
                    <CustomButton
                        icon={<BiHeart />}
                        style={{ padding: '15px', border: 'none' }}
                        pStyle={{ fontSize: '20px' }}
                        type="light"
                        onClick={() => navigate('/favorites')}
                    />
                    <CustomButton
                        icon={<BiCart />}
                        style={{ padding: '15px', border: 'none' }}
                        pStyle={{ fontSize: '20px' }}
                        type="light"
                        onClick={() => navigate('/basket')}
                    />
                </div>
            </div>

            <HeaderHover
                style={{
                    display: !showModal ? 'none' : 'flex',
                }}
                setShowState={setShowModal}
                showState={showModal}
            />

            <LoginModal
                showLoginModal={showLoginModal}
                setShowLoginModal={setShowLoginModal}
            />
        </>
    )
}

export default Header
