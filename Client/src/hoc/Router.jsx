import { Route, Routes, useLocation } from 'react-router-dom'
import DevicePage from '../pages/DevicePage'
import Basket from '../pages/Basket'
import Auth from '../pages/Auth'
import Admin from '../pages/Admin'
import AdminPage from './AdminPage'
import AuthorizedPage from './AuthorizedPage'
import Store from '../pages/Store'
import Alert from '../components/Alert/Alert'

const Router = () => {
    const location = useLocation()

    return (
        <Routes location={location} key={location.pathname}>
            <Route
                path="/admin"
                element={
                    <AdminPage>
                        <Admin />
                    </AdminPage>
                }
            />
            <Route
                path="/basket"
                element={
                    <AuthorizedPage>
                        <Basket />
                    </AuthorizedPage>
                }
            />

            <Route element={<Alert/>} path='/alert'/>
            <Route element={<Auth />} path="/auth" />
            <Route element={<DevicePage />} path="/device/:id" />
            <Route element={<Store />} path="/" />
        </Routes>
    )
}

export default Router
