import { Outlet } from 'react-router-dom'
import Footer from '../Footer'
import Header from '../Header'
import styles from './Layout.module.css'

const Layout = () => {
    return (
        <>
            <div className={styles.PageContainer}>
                <Header />
                <Outlet />
                <Footer />
            </div>
        </>
    )
}

export default Layout
