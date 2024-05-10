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
import {
    DiscountPageURL,
    basketURL,
    brandPageURL,
    devicePageURL,
    favoriteURL,
    profileURL,
    searchPageURL,
    storeURL,
    typePageURL,
} from './routerLinks'
import Search from '../pages/Search/Search'
import DiscountPage from '../pages/DiscountPage/DiscountPage'

const Router = () => {
    const location = useLocation()

    return (
        <Routes location={location} key={location.pathname}>
            <Route path={storeURL} element={<Layout />}>
                <Route
                    path={profileURL}
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
                    path={devicePageURL + ':id'}
                />

                <Route
                    element={
                        <AuthorizedPage>
                            <Basket />
                        </AuthorizedPage>
                    }
                    path={basketURL}
                />
                <Route
                    element={
                        <AuthorizedPage>
                            <Favorites />
                        </AuthorizedPage>
                    }
                    path={favoriteURL}
                />

                <Route element={<Search />} path={searchPageURL} />

                <Route element={<DiscountPage />} path={DiscountPageURL + ':id'} />

                <Route element={<Store />} index />
            </Route>
        </Routes>
    )
}

export default Router
