import { useContext, useState } from 'react'
import Button from '../Button/Button'
import styles from './LoginCard.module.css'
import { BiSolidKey, BiUser, BiLogoGmail } from 'react-icons/bi'
import { login } from '../../api/user/login'
import UserContext from '../../storage/UserContext'
import { registration } from '../../api/user/registration'

const LoginCard = ({ onClick }) => {
    const [loginState, setLoginState] = useState('login')
    const [globalUser, setGlobalUser] = useContext(UserContext)
    const [candidate, setCandidate] = useState({
        name: '',
        email: '',
        password: '',
    })

    const handleChangeInputs = (e) => {
        const { name, value } = e.target
        setCandidate((prevCandidate) => ({
            ...prevCandidate,
            [name]: value,
        }))
    }

    const handleLogin = async () => {
        const response = await login(candidate.email, candidate.password)
        if (response.status === 200) {
            document.cookie = `token = ${
                response.data.token
            }; path = /; expiers = ${Date.now() + 86400e3}`
        }
    }

    const handleRegistration = async () => {
        const response = await registration(
            candidate.name,
            candidate.email,
            candidate.password
        )
        if (response.status === 200) {
            document.cookie = `token = ${
                response.data.token
            }; path = /; expiers = ${Date.now() + 86400e3}`
        }
    }

    return (
        <>
            <div className={styles.LoginCard} onClick={onClick}>
                <div className={styles.HeaderChoise}>
                    <div
                        className={styles.LoginChoise}
                        onClick={() => setLoginState('login')}
                        style={
                            loginState === 'login'
                                ? {
                                      color: '#0c68f4',
                                      borderBottom: '2px solid #0c68f4',
                                  }
                                : {}
                        }
                    >
                        Вход
                    </div>
                    <div
                        className={styles.LoginChoise}
                        onClick={() => setLoginState('register')}
                        style={
                            loginState === 'register'
                                ? {
                                      color: '#0c68f4',
                                      borderBottom: '2px solid #0c68f4',
                                  }
                                : {}
                        }
                    >
                        Регистрация
                    </div>
                </div>
                <div className={styles.h1}>
                    {loginState === 'login'
                        ? 'Войдите в Web store'
                        : 'Создайте аккаунт'}
                </div>
                <div className={styles.Inputs}>
                    <div
                        className={styles.InputWraper}
                        style={
                            loginState === 'register'
                                ? { display: 'flex' }
                                : { display: 'none' }
                        }
                    >
                        <div className={styles.Icon}>
                            <BiUser />
                        </div>
                        <input
                            type="text"
                            placeholder="Имя"
                            className={styles.Input}
                            onChange={handleChangeInputs}
                            value={candidate.name}
                            name="name"
                        />
                    </div>
                    <div className={styles.InputWraper}>
                        <div className={styles.Icon}>
                            <BiLogoGmail />
                        </div>
                        <input
                            type="text"
                            placeholder="Почта"
                            className={styles.Input}
                            onChange={handleChangeInputs}
                            value={candidate.email}
                            name="email"
                        />
                    </div>
                    <div className={styles.InputWraper}>
                        <div className={styles.Icon}>
                            <BiSolidKey />
                        </div>
                        <input
                            type="password"
                            placeholder="Пароль"
                            className={styles.Input}
                            onChange={handleChangeInputs}
                            value={candidate.password}
                            name="password"
                        />
                    </div>
                </div>

                <Button
                    text={
                        loginState === 'login' ? 'Войти' : 'Зарегистрироваться'
                    }
                    style={{
                        width: '100%',
                        height: '35px',
                        backgroundColor: '#0c68f4',
                        borderRadius: '5px',
                    }}
                    pStyle={{
                        fontSize: '15px',
                    }}
                    className={styles.Button}
                    onClick={
                        loginState === 'login'
                            ? handleLogin
                            : handleRegistration
                    }
                />

                <div
                    className={styles.LastRow}
                    style={
                        loginState === 'login'
                            ? { display: 'flex' }
                            : { display: 'none' }
                    }
                >
                    <div className={styles.LastRowFirst}>
                        Не зарегистрированы? &nbsp;
                    </div>
                    <div
                        className={styles.LastRowSecond}
                        onClick={() => setLoginState('register')}
                    >
                        Исправим!
                    </div>
                </div>
                <div
                    className={styles.LastRow}
                    style={
                        loginState === 'register'
                            ? { display: 'flex' }
                            : { display: 'none' }
                    }
                >
                    <div className={styles.LastRowFirst}>
                        Уже зарегистрированы? &nbsp;
                    </div>
                    <div
                        className={styles.LastRowSecond}
                        onClick={() => setLoginState('login')}
                    >
                        Войти!
                    </div>
                </div>
            </div>
        </>
    )
}

export default LoginCard
