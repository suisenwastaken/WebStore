import { Outlet } from 'react-router-dom'
import Footer from '../Footer'
import Header from '../Header'
import styles from './Layout.module.css'
import HeaderHover from '../HeaderHover/HeaderHover'
import { useState } from 'react'

const Layout = () => {
    const [isHeaderHoverShown, setIsHeaderHoverShown] = useState(false)
    return (
        <>
            <div className={styles.PageContainer}>
                <Header
                    isHeaderHoverShown={isHeaderHoverShown}
                    setIsHeaderHoverShown={setIsHeaderHoverShown}
                />
                <HeaderHover
                    style={{
                        display: !isHeaderHoverShown ? 'none' : 'flex',
                    }}
                    setShowState={setIsHeaderHoverShown}
                    showState={isHeaderHoverShown}
                />
                <Outlet />
                <Footer />
            </div>
        </>
    )
}

export default Layout
