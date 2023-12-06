import { BrowserRouter } from 'react-router-dom'
import Router from './hoc/Router'
import Header from './components/Header'
import { useContext, useEffect, useState } from 'react'
import { Context } from './storage/Context'
import Alert from './components/Alert/Alert'
import LoginModal from './components/LoginModal/LoginModal'

const App = () => {

    return (
        <BrowserRouter>
            <Alert />
            <Header />
            <LoginModal/>
            <Router />
        </BrowserRouter>
    )
}

export default App
