import styles from './LoadingComponent.module.css'

const LoadingComponent = () => {
    return (
        <>
        <div className={styles.LoadingScreen}>
            <div className={styles.Loader}></div>
        </div>
        </>
    );
}

export default LoadingComponent;
