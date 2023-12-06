import { useContext, useEffect } from 'react'
import LoginModalContext from '../../storage/LoginModalContext'
import styles from './LoginModal.module.css'
import LoginCard from '../LoginCard/LoginCard'
import { observer } from 'mobx-react-lite'

const LoginModal = () => {
    const [showLoginModal, setShowLoginModal] = useContext(LoginModalContext)


    if (showLoginModal) {
        return (
            <div
                className={styles.LoginModalBackground}
                onClick={() => setShowLoginModal(false)}
            >
                <LoginCard onClick={(e) => e.stopPropagation()} />
            </div>
        )
    }
}

export default LoginModal
