import { useContext, useEffect } from 'react'
import { Navigate, redirect, useNavigate } from 'react-router-dom'
import AlertContext from '../storage/AlertContext'
import AlertState from '../components/Alert/AlertState'
import { useIsMount } from '../hooks/useIsMount'
import LoginModal from '../components/LoginModal/LoginModal'
import UserContext from '../storage/UserContext'

const AuthorizedPage = ({ children }) => {
    const [globalUser,] = useContext(UserContext)
    const navigate = useNavigate()

    useEffect(() => {
        if (globalUser) {
            return children
        } else {
            // console.log('я в хоке авторизации')
            // console.log(user)
            setShowLoginModal(true)
            navigate('/')
        }
    })
}

export default AuthorizedPage
