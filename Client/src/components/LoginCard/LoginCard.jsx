import { useContext, useEffect, useState } from 'react'
import styles from './LoginCard.module.css'
import { BiSolidKey, BiUser, BiLogoGmail } from 'react-icons/bi'
import { login } from '../../api/user/login'
import { registration } from '../../api/user/registration'
import AlertContext from '../../storage/AlertContext'
import AlertState from '../Alert/AlertState'
import CustomInput from '../CustomInput/CustomInput'
import CustomButton from '../CustomButton'
import { LOGIN_URL } from '../../api/Urls'
import { POST, Request, SetAccessTokenCookie } from '../../api/APIFile'

const LoginCard = ({ onClick, showLoginModal, setShowLoginModal }) => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    const passwordRegex = /^[a-zA-Z0-9]{8,}$/
    const nameRegex = /^[А-ЯЁ][А-ЯЁа-яё]{3,}$/

    const [loginState, setLoginState] = useState('login')
    const [isButtonDisable, setIsButtonDisable] = useState(false)
    const [candidate, setCandidate] = useState({
        name: '',
        email: '',
        password: '',
    })
    const [errors, setErrors] = useState({
        name: '',
        email: '',
        password: '',
    })

    useEffect(() => {
        const handleInputChange = () => {
            if (loginState !== 'login') {
                if (nameRegex.test(candidate.name) && errors.name) {
                    setErrors((prevErrors) => ({
                        ...prevErrors,
                        name: '',
                    }))
                    setIsButtonDisable(false)
                }
            }
            if (emailRegex.test(candidate.email) && errors.email) {
                setErrors((prevErrors) => ({
                    ...prevErrors,
                    email: '',
                }))
                setIsButtonDisable(false)
            }
            if (passwordRegex.test(candidate.password) && errors.password) {
                setErrors((prevErrors) => ({
                    ...prevErrors,
                    password: '',
                }))
                setIsButtonDisable(false)
            }
        }
        handleInputChange()
    }, [errors.name, errors.email, errors.password, candidate])

    const handleChangeInputs = (e) => {
        const { name, value } = e.target
        setCandidate((prevCandidate) => ({
            ...prevCandidate,
            [name]: value,
        }))
    }

    const handleLogin = async () => {
        if (!emailRegex.test(candidate.email)) {
            setErrors((prevErrors) => ({
                ...prevErrors,
                email: 'Введите корректную почту',
            }))
            setIsButtonDisable(true)
        } else if (!passwordRegex.test(candidate.password)) {
            setErrors((prevErrors) => ({
                ...prevErrors,
                password: 'Пароль состоит из 8 символов',
            }))
            setIsButtonDisable(true)
        }
        const loginResponse = await Request.send({
            method: POST,
            url: LOGIN_URL,
            data: { email: candidate.email, password: candidate.password },
            useToken: false,
        })
        if (loginResponse) {
            SetAccessTokenCookie(loginResponse.data.token)
            setShowLoginModal(false)
        }
    }

    const handleRegistration = async () => {
        if (!nameRegex.test(candidate.name)) {
            setErrors((prevErrors) => ({
                ...prevErrors,
                name: 'Введите корректное имя',
            }))
            setIsButtonDisable(true)
        } else if (!emailRegex.test(candidate.email)) {
            setErrors((prevErrors) => ({
                ...prevErrors,
                email: 'Введите корректную почту',
            }))
            setIsButtonDisable(true)
        } else if (!passwordRegex.test(candidate.password)) {
            setErrors((prevErrors) => ({
                ...prevErrors,
                password: 'Пароль состоит из 8 символов',
            }))
            setIsButtonDisable(true)
        }
        const response = await registration(
            candidate.name,
            candidate.email,
            candidate.password
        )
        if (response.status === 200) {
            document.cookie = `token = ${
                response.data.token
            }; path = /; expiers = ${Date.now() + 86400e3}`
            setShowLoginModal(false)
            setAlert(AlertState['registrationSuccess'])
        } else {
            setAlert(AlertState['userAlreadyRegistrated'])
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
                                      color: '#594ae3',
                                      borderBottom: '2px solid #594ae3',
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
                                      color: '#594ae3',
                                      borderBottom: '2px solid #594ae3',
                                  }
                                : {}
                        }
                    >
                        Регистрация
                    </div>
                </div>
                <div className={styles.h1}>
                    {loginState === 'login'
                        ? 'Войдите в  Web store'
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
                        <CustomInput
                            type="text"
                            placeHolder="Имя"
                            onChange={handleChangeInputs}
                            value={candidate.name}
                            name="name"
                            error={errors.name}
                        />
                    </div>
                    <div className={styles.InputWraper}>
                        <CustomInput
                            type="text"
                            placeHolder="Почта"
                            onChange={handleChangeInputs}
                            value={candidate.email}
                            name="email"
                            error={errors.email}
                        />
                    </div>
                    <div className={styles.InputWraper}>
                        <CustomInput
                            type="text"
                            placeHolder="Пароль"
                            onChange={handleChangeInputs}
                            value={candidate.password}
                            name="password"
                            error={errors.password}
                        />
                    </div>
                </div>

                <CustomButton
                    text={
                        loginState === 'login' ? 'Войти' : 'Зарегистрироваться'
                    }
                    onClick={
                        loginState === 'login'
                            ? handleLogin
                            : handleRegistration
                    }
                    disabled={isButtonDisable}
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
