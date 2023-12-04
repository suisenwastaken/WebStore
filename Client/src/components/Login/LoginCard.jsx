import { useState } from 'react'
import Button from '../Button/Button'
import styles from './LoginCard.module.css'
import { BiSolidKey, BiUser, BiLogoGmail  } from "react-icons/bi";

const LoginCard = ({onClick}) => {
    const [loginState, setLoginState] = useState('login')

    return (
        <>
            <div className={styles.LoginCard} onClick={onClick}>
                <div className={styles.HeaderChoise}>
                    <div
                        className={styles.LoginChoise}
                        onClick={() => setLoginState('login')}
                        style={loginState === 'login' ?{
                            color: '#0c68f4',
                            borderBottom: '2px solid #0c68f4'
                        }:{

                        }}
                    >
                        Вход
                    </div>
                    <div
                        className={styles.LoginChoise}
                        onClick={() => setLoginState('register')}
                        style={loginState === 'register' ?{
                            color: '#0c68f4',
                            borderBottom: '2px solid #0c68f4'
                        }:{

                        }}
                    >
                        Регистрация
                    </div>
                </div>
                <div className={styles.h1}>{loginState === 'login' ? 'Войдите в Web store' : 'Создайте аккаунт'}</div>
                <div className={styles.Inputs}>

                <div className={styles.InputWraper} style={loginState === 'register' ? {display: 'flex'} : {display: 'none'}}>
                        <div className={styles.Icon}><BiUser /></div>
                        <input
                            type="text"
                            placeholder="Имя"
                            className={styles.Input}
                        />
                    </div>
                    <div className={styles.InputWraper}>
                        <div className={styles.Icon}><BiLogoGmail /></div>
                        <input
                            type="text"
                            placeholder="Почта"
                            className={styles.Input}
                        />
                    </div>
                    <div className={styles.InputWraper}>
                        <div className={styles.Icon}><BiSolidKey /></div>
                        <input
                            type="password"
                            placeholder="Пароль"
                            className={styles.Input}
                        />
                    </div>
                </div>

                <Button
                    text={'Войти'}
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
                />

                <div className={styles.LastRow} style={loginState === 'login' ? {display: 'flex'} : {display: 'none'}}>
                    <div className={styles.LastRowFirst}>
                        Не зарегистрированы? &nbsp;
                    </div>
                    <div className={styles.LastRowSecond}onClick={() => setLoginState('register')}>Исправим!</div>
                </div>
                <div className={styles.LastRow} style={loginState === 'register' ? {display: 'flex'} : {display: 'none'}}>
                    <div className={styles.LastRowFirst}>
                        Уже зарегистрированы? &nbsp;
                    </div>
                    <div className={styles.LastRowSecond}onClick={() => setLoginState('login')}>Войти!</div>
                    </div>
            </div>
        </>
    )
}

export default LoginCard
