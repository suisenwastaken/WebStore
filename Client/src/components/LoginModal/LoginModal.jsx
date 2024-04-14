import { useContext, useEffect } from 'react'
import styles from './LoginModal.module.css'
import LoginCard from '../LoginCard/LoginCard'
import { observer } from 'mobx-react-lite'

const LoginModal = ({ showLoginModal, setShowLoginModal }) => {
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
