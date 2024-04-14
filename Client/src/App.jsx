import { BrowserRouter, Route } from 'react-router-dom'
import Router from './hoc/Router'
import Alert from './components/Alert/Alert'
import LoginModal from './components/LoginModal/LoginModal'

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
