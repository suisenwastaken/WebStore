import { Route, Routes, useLocation } from 'react-router-dom'
import DevicePage from '../pages/DevicePage'
import Basket from '../pages/Basket'
import AuthorizedPage from './AuthorizedPage'
import Store from '../pages/Store'
import Alert from '../components/Alert/Alert'
import { DevicePageProvider } from '../storage/DevicePageContext'
import Profile from '../pages/Profile'
import Layout from '../components/Layout'
import Favorites from '../pages/Favorites/Favorites'
import { CartProvider } from '../storage/CartContext'

const Router = () => {
    const location = useLocation()

    return (
        <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Layout />}>
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

                <Route
                    element={
                        <AuthorizedPage>
                            <CartProvider>
                                <Basket />
                            </CartProvider>
                        </AuthorizedPage>
                    }
                    path="basket"
                />
                <Route
                    element={
                        <AuthorizedPage>
                            <Favorites />
                        </AuthorizedPage>
                    }
                    path="favorites"
                />
                <Route element={<Store />} index />
            </Route>
        </Routes>
    )
}

export default Router
