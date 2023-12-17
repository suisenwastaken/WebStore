import { Route, Routes, useLocation } from 'react-router-dom'
import DevicePage from '../pages/DevicePage'
import Basket from '../pages/Basket'
import Auth from '../pages/Auth'
import Admin from '../pages/Admin'
import AdminPage from './AdminPage'
import AuthorizedPage from './AuthorizedPage'
import Store from '../pages/Store'
import Alert from '../components/Alert/Alert'
import { DevicePageProvider } from '../storage/DevicePageContext'
import Profile from '../pages/Profile'
import LoginModal from '../components/LoginModal/LoginModal'
import Layout from '../components/Layout'

const Router = () => {
    const location = useLocation()

    return (
        <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Layout />}>
                <Route
                    path="admin"
                    element={
                        <AdminPage>
                            <Admin />
                        </AdminPage>
                    }
                />
                <Route
                    path="profile"
                    element={
                        <AuthorizedPage>
                            <Profile />
                        </AuthorizedPage>
                    }
                />
                <Route
                    element={
                        <DevicePageProvider>
                            <DevicePage />
                        </DevicePageProvider>
                    }
                    path="device/:id"
                />
                <Route element={<Store />} index />
            </Route>
        </Routes>
    )
}

export default Router
