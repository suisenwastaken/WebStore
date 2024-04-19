import { useContext, useEffect } from 'react'
import styles from './LoginModal.module.css'
import LoginCard from '../LoginCard/LoginCard'
import { observer } from 'mobx-react-lite'
import LoginModalContext from '../../storage/LoginModalContext'

const LoginModal = ({ }) => {

    const {showLoginModal, setShowLoginModal} = useContext(LoginModalContext)

    if (showLoginModal) {
        return (
            <div
                className={styles.LoginModalBackground}
                onClick={() => setShowLoginModal(false)}
            >
                <LoginCard
                    onClick={(e) => e.stopPropagation()}
                    showLoginModal={showLoginModal}
                    setShowLoginModal={setShowLoginModal}
                />
            </div>
        )
    }
}

export default LoginModal
