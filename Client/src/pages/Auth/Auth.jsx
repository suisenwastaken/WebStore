import LoginCard from '../../components/LoginCard/LoginCard';
import styles from './Auth.module.css'
const Auth = () => {
    return (
        <div className={styles.Card}>
            <LoginCard/>
        </div>
    );
}

export default Auth;