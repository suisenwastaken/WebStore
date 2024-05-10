import styles from './Footer.module.css'

const Footer = () => {
    return (
        <>
            <div className={styles.Footer}>
                <a
                    href="https://github.com/suisenwastaken"
                    className={styles.link}
                >
                    <img src="/github-mark.svg" atl="gitLogo" />{' '}
                    <div className={styles.text}>suisenwastaken - 2024</div>
                </a>
            </div>
        </>
    )
}

export default Footer
