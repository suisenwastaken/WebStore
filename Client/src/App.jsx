import { BrowserRouter, Route } from 'react-router-dom'
import Router from './hoc/Router'
import Header from './components/Header'
import { useContext, useEffect, useState } from 'react'
import { Context } from './storage/Context'
import Alert from './components/Alert/Alert'
import LoginModal from './components/LoginModal/LoginModal'
import Footer from './components/Footer'
import Layout from './components/Layout'

const App = () => {
    return (
        <BrowserRouter>
            <Alert />
            <LoginModal />
            <Router />
        </BrowserRouter>
    )
}

export default App
