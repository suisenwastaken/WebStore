import { BrowserRouter, Route } from 'react-router-dom'
import Router from './hoc/Router'
import Alert from './components/Alert/Alert'
import LoginModal from './components/LoginModal/LoginModal'
import InitialInfo from './hoc/InitialInfo.jsx'

const App = () => {
    return (
        <BrowserRouter>
            <InitialInfo>
                <Alert />
                <LoginModal />
                <Router />
            </InitialInfo>
        </BrowserRouter>
    )
}

export default App
